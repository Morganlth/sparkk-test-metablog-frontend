<!-- [postHeader] -->

<!-- #HTML -->

<template>
    <header
    class="postHeader"
    :class="{ '@banner': propBanner }"
    >
        <post-category
        :class="`superWorkSans1 d_ilb mb_6 ${propBlog ? 'pt_2 pr_5 pb_2 pl_5' : 'pt_1 pr_4 pb_1 pl_4'} b_brd ${propBanner || propBlog ? 'b_prm1 brd_r_1' : '@rgbaBg c_prm1'} fw_500 lh_1`"
        >
            {{propPost.category.name}}
        </post-category>

        <component
        :is="`h${propBlog ? 1 : propBanner ? 2 : 3}`"
        :class="`title superWorkSans${propBlog || propBanner ? '7 lh_7' : '5 lh_4'} mb_${propBanner ? 8 : 7} fw_600`"
        >
            {{propPost.title}}
        </component>

        <section
        :class="`${propBlog ? 'superWorkSans1 g_8 lh_1' : 'superWorkSans2 g_7 lh_2'} d_flx a_ctr ${propBanner ? 'c_hrt' : 'c_gry2'}`"
        >
            <post-author
            :class="`d_flx a_ctr g_${propBlog ? 3 : 5}`"
            >
                <Icon
                propLabel="Author avatar"
                :propSize="propBlog ? 1 : 2"
                >
                    <img
                    v-if="propPost.author.avatar"
                    class="avatar d_blc op_c of_c brd_r_50"
                    :src="CONFIG.public.apiUrl + propPost.author.avatar.url"
                    :alt="`${propPost.author.name} profile picture`"
                    >

                    <Person
                    v-else
                    />
                </Icon>

                <p
                class="fw_500"
                >
                    {{propPost.author.name}}
                </p>
            </post-author>

            <time
            v-if="!isNaN(POST_HEADER_CREATE_AT)"
            class="fw_400"
            :datetime="propPost.publishedAt"
            >
                {{POST_HEADER_CREATE_AT.toLocaleDateString('en-US',
                {
                    year : 'numeric',
                    month: 'long',
                    day  : 'numeric'
                })}}
            </time>
        </section>
    </header>
</template>

<!-- #SCRIPT -->

<script
setup
>

// #DEFINE

    // ##PROPS
const PROPS = defineProps(
{
    propBlog  : Boolean,
    propBanner: Boolean,
    propPost  : Object
})

// #CONSTANTES

    // ##CONFIG
const CONFIG = useRuntimeConfig()

    // ##THIS
const POST_HEADER_CREATE_AT = new Date(PROPS.propPost.publishedAt)

</script>

<!-- #STYLE -->

<style
lang="scss"
scoped
>

/* #THIS */

.postHeader
{
    &.\@banner .title { text-wrap: balance; }

    post-category.\@rgbaBg { background-color: rgba($prm1, .05); }

    .avatar { width: var(--s); }
}

</style>