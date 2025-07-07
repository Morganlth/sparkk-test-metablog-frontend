<!-- [post] -->

<!-- #HTML -->

<template>
    <article
    class="post b_brd"
    >
        <PostHeader
        :propBlog="true"
        :propBanner="false"
        :propPost
        />

        <Content
        :propContent="propPost.content"
        />
    </article>
</template>

<!-- #SCRIPT -->

<script
setup
>

// #IMPORTS

    // ##COMPONENTS
import Content from './@post/Content.vue'

// #DEFINE

    // ##PROPS
defineProps({ propPost: Object })

</script>

<!-- #STYLE -->

<style
lang="scss"
scoped
>

/* #THIS */

.post
{
    max-width: 80rem;

    padding-bottom: 12.4rem;
}

</style>