<!-- [home] -->

<!-- #HTML -->

<template>
    <Page
    propID="HOME"
    propClass="d_flx f_cl_ g_11 o_hid m__aut"
    >
        <app-container
        class="d_flx f_cl_ a_ctr g_3 pt_6 pb_6 b_brd"
        >
            <h1
            class="superWorkSans6 fw_600 lh_6"
            >
                Our Blog
            </h1>

            <Filters />
        </app-container>

        <template
        v-if="HOME_$POSTS[0]"
        >
            <PostCard
            :propPost="HOME_$POSTS[0]"
            :propBanner="true"
            />

            <section>
                <h2
                class="superWorkSans5 mb_9 fw_700 lh_4"
                >
                    Latest Post
                </h2>

                <PostCards
                :propPosts="HOME_$POSTS.slice(1)"
                />
            </section>
        </template>

        <app-sentinel
        ref="$SENTINEL"
        aria-hidden="true"
        />

        <Error
        v-if="HOME_$ERROR"
        >
            {{HOME_$ERROR}}
        </Error>
    
        <app-wrapper
        v-else
        v-show="HOME_$LOADING || !HOME_$POSTS[0]"
        class="d_flx j_ctr mb_11"
        >
             <Loader />
        </app-wrapper>
    </Page>
</template>

<!-- #SCRIPT -->

<script
setup
>

// #IMPORTS

    // ##COMPONENTS
import Filters   from '~/components/pages/@home/Filters.vue'
import PostCard  from '~/components/pages/@home/PostCard.vue'
import PostCards from '~/components/pages/@home/PostCards.vue'

// #CONSTANTES

    // ##THIS
const
{posts: HOME_$POSTS, load} = useNuxtApp().$apiGetPosts()
,
HOME_$LOADING = ref(false)
,
HOME_$ERROR = ref('')

    // ##SENTINEL
const $SENTINEL = ref(null)

// #VARIABLES

    // ##SENTINEL
let sentinelIntersectionObserver

// #FUNCTIONS

    // ##NUXT
onMounted(home_set)
onBeforeUnmount(home_destroy)

    // ##SET
function home_set() { sentinel_set() }

function sentinel_set()
{
    sentinel_setVars()
    sentinel_setObservers()
}

function sentinel_setVars() { sentinelIntersectionObserver = new IntersectionObserver(sentinel_oIntersection) }

function sentinel_setObservers() { sentinelIntersectionObserver.observe($SENTINEL.value) }

    // ##DESTROY
function home_destroy() { sentinel_destroy() }

function sentinel_destroy() { sentinel_destroyObservers() }

function sentinel_destroyObservers() { sentinelIntersectionObserver.disconnect() }

    // ##OBSERVERS
async function sentinel_oIntersection(e)
{
    if (HOME_$ERROR.value) HOME_$ERROR.value = ''

    if (HOME_$LOADING.value || !e[0].isIntersecting) return

    HOME_$LOADING.value = true
    
    try { await load(HOME_$POSTS.value.length ? 3 : 4) } catch (err)
    {
        console.error(err)

        HOME_$ERROR.value = 'An error has occurred. Please try reloading the page.'
    }
    
    HOME_$LOADING.value = false
}

</script>

<!-- #STYLE -->

<style
lang="scss"
scoped
>

/* #THIS */

#HOME
{
    max-width: min(1216px, 100vw);

    padding-bottom: 174px;
}

</style>