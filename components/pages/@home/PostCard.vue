<!-- [postCard] -->

<!-- #HTML -->

<template>
    <NuxtLink
    :class="`postCard ${propBanner ? '@banner d_flx f_cl_ j_end p_rlt o_hid w_any' : 'd_blc pt_6 pr_6 pb_6 pl_6 b_brd brd_s_sld brd_c_drk2'} brd_r_2 c_hrt`"
    :to="`/singlePost/${propPost.slug}`"
    >
        <article>
            <app-wrapper
            :class="`d_blc w_any ${propBanner ? 'p_abs t_0 l_0 z_-1 h_any' : 'o_hid mb_6 brd_r_1'}`"
            >
                <img
                class="cover w_any h_any op_c of_c"
                :src="CONFIG.public.apiUrl + (propBanner ? propPost.cover.url : propPost.cover.formats.small.url)"
                :alt="propPost.cover.alternativeText"
                >
            </app-wrapper>

            <app-wrapper
            :class="`d_blc ${propBanner ? 'pt_10 pr_10 pb_10 pl_10' : 'pt_3 pr_3 pb_3 pl_3'} b_brd`"
            >
                <PostHeader
                :propBlog="false"
                :propBanner
                :propPost
                />
            </app-wrapper>
        </article>
    </NuxtLink>
</template>

<!-- #SCRIPT -->

<script
setup
>

// #DEFINE

    // ##PROPS
defineProps(
{
    propPost  : Object,
    propBanner:
    {
        type   : Boolean,
        default: false
    }
})

// #CONSTANTES

    // ##CONFIG
const CONFIG = useRuntimeConfig()

</script>

<!-- #STYLE -->

<style
lang="scss"
scoped
>

/* #THIS */

.postCard
{
    min-height: 45rem;

    &.\@banner app-wrapper:has(.cover)::after
    {
        @include constructor(c_void, p_abs, t_0, l_0, w_any, h_any);

        background-color: rgba($drk3, .4);
    }

    &:not(.\@banner)
    {
        max-width: 39.2rem;
    
        border-width: 1px;

        app-wrapper:has(.cover) { height: 24rem; }
    }

    .cover
    {
        $c: $drk2; 
        $g: 5%;

        background: repeating-linear-gradient(30deg, $c 0%, $c $g, transparent $g, transparent $g * 2, $c $g * 2, $c $g * 3, transparent $g * 3, transparent $g * 5);
    }
}

</style>