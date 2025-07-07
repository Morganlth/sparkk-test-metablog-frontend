/* [api] */

// #CONSTANTES

    // ##THIS
const
API_CATEGORIES = ['All']
,
API_POSTS = []

// #FUNCTIONS

    // ##GET
function api_getErrMsg(err, msg)
{
    console.error(err)

    return {err, msg}
}

    // ##ADD
function api_addCategories(data)
{
    let updated = false

    if (data) for (let i = 0, max = data.length; i < max; i++)
    {
        const CATEGORY = data[i].name

        if (!CATEGORY || API_CATEGORIES.includes(CATEGORY)) continue

        API_CATEGORIES.push(CATEGORY)

        if (!updated) updated = true
    }

    return updated
}

// #EXPORTS

    // ##THIS
export default defineNuxtPlugin(() =>
{
    const CONFIG = useRuntimeConfig()

    return {
        provide:
        {
            apiFetch: $fetch.create(
            {
                baseURL: CONFIG.public.apiUrl,
                headers: { Authorization: `Bearer ${CONFIG.public.apiToken}` }
            })
            ,
            apiGetCategories: function ()
            {
                api_addCategories(useNuxtData('CATEGORIES')?.data.value)
        
                const $CATEGORIES = useState('CATEGORIES', () => API_CATEGORIES)

                useAsyncData('CATEGORIES', () => this.$apiFetch('/api/categories?fields=name'), { server: true })
                .then(res => { if (api_addCategories(res.data.value?.data)) $CATEGORIES.value = [...API_CATEGORIES] })
                .catch(console.error)

                return $CATEGORIES
            },
            apiGetCurrentCategory: function () { return useState('CURRENT_CATEGORY', () => API_CATEGORIES[0]) }
            ,
            apiGetPosts: function (index = 0)
            {
                const $POSTS = useState('POSTS', () => API_POSTS)

                return {
                    posts: $POSTS,
                    load : async (limit = 0) =>
                    {
                        const START = index + limit
            
                        if (API_POSTS[START]) return

                        // ?Errors are not captured
                        const DATA = (
                            await this.$apiFetch(
                                `/api/posts?fields[0]=title&fields[1]=slug&fields[2]=publishedAt&populate[category]=*&populate[cover]=true&populate[author][populate]=avatar&pagination[start]=${index}&pagination[limit]=${limit}`
                            )
                        ).data

                        if (!DATA.length) return

                        index = START
                        
                        API_POSTS.push(...DATA)

                        $POSTS.value = API_POSTS
                    }
                }
            },
            apiGetPost: function (slug)
            {
                const $POST = useState('POST', () => null)

                if ($POST.value?.slug !== slug)
                {
                    const FINDED = API_POSTS.find(post => post.slug === slug)

                    FINDED?.postCompleted
                        ? $POST.value = FINDED
                        : this.$apiFetch(
                            `/api/posts?filters[slug][$eq]=${slug}&fields[0]=title&fields[1]=content&fields[2]=publishedAt&populate[category]=*&populate[cover]=true&populate[author][populate]=avatar`
                        ).then(res =>
                        {
                            const POST = res.data[0]
            
                            $POST.value = POST

                            if (FINDED) Object.assign(FINDED, POST, { postCompleted: true })
                        })
                        .catch(err => $POST.value = api_getErrMsg(err, 'Unable to retrieve the post.'))
                }

                return $POST
            }
        }
    }
})