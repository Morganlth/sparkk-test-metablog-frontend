<!-- [post] -->

<!-- #HTML -->

<template>
    <Page
    :propID="`SINGLE_POST_${POST_SLUG.toUpperCase()}`"
    propClass="d_flx j_ctr"
    >
        <Error
        v-if="POST_POST?.err"
        >
            {{POST_POST.msg}}
        </Error>
    
        <Post
        v-else-if="POST_POST"
        :propPost="POST_POST"
        />

        <Loader
        v-else
        />
    </Page>
</template>

<!-- #SCRIPT -->

<script
setup
>

// #IMPORTS

    // ##COMPONENTS
import Post from '~/components/pages/@singlePost/Post.vue'

// #CONSTANTES

    // ##THIS
const
POST_SLUG = useRoute().params.slug,
POST_POST = useNuxtApp().$apiGetPost(POST_SLUG)

</script>