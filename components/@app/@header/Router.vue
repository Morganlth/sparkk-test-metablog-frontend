<!-- [router] -->

<!-- #HTML -->

<template>
    <nav
    class="router b_brd"
    >
        <ul
        class="routes superWorkSans2 d_flx f_wrp j_ctr a_ctr g_10 fw_400 lh_2"
        >
            <li
            v-for="route in ROUTER_ROUTES"
            :key="route"
            class="route"
            >
                <NuxtLink
                class="c_hrt"
                :to="`/${route === 'Home' ? '' : route[0].toLowerCase() + route.slice(1).replace(/\s/g, '')}`"
                >
                    {{route}}
                </NuxtLink>
            </li>
        </ul>
    </nav>
</template>

<!-- #SCRIPT -->

<script
setup
>

// #CONSTANTES

    // ##THIS
const ROUTER_ROUTES = ['Home', 'Blog', 'Single Post', 'Pages', 'Contact']

</script>

<!-- #STYLE -->

<style
lang="scss"
scoped
>

/* #IMPORTS */

    /* ##UTILS */
@use '~/assets/styles/utils/media';

/* #THIS */

.router { @include media.media_desktop { padding-inline: 11.6rem; } }

</style>