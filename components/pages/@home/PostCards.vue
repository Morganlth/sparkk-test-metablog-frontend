<!-- [postCards] -->

<!-- #HTML -->

<template>
    <ul
    class="postCards d_flx f_wrp j_ctr g_7"
    >
        <li
        v-for="post in propPosts"
        v-show="POST_CARDS_$CURRENT_CATEGORY === 'All' || post.category.name === POST_CARDS_$CURRENT_CATEGORY"
        :key="post.id"
        >
            <PostCard
            :propPost="post"
            />
        </li>
    </ul>
</template>

<!-- #SCRIPT -->

<script
setup
>

// #IMPORTS

    // ##COMPONENTS
import PostCard from './PostCard.vue'

// #DEFINE

    // ##PROPS
defineProps({ propPosts: Array })

// #CONSTANTES

    // ##THIS
const POST_CARDS_$CURRENT_CATEGORY = useNuxtApp().$apiGetCurrentCategory()

</script>