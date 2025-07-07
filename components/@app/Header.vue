<!-- [header] -->

<!-- #HTML -->

<template>
    <header
    id="HEADER"
    class="d_grd w_fit m__aut mb_8 pt_9 pr_6 pb_9 pl_6 b_brd t_ctr"
    >
        <Logo />

        <Router />
    </header>
</template>

<!-- #SCRIPT -->

<script
setup
>

// #IMPORTS

    // ##COMPONENTS
import Logo   from './@header/Logo.vue'
import Router from './@header/Router.vue'

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

#HEADER
{
    @include media.media_desktop($not: true)
    {
        grid-template-rows: repeat(2, auto);
        gap               : $g6;
    }

    @include media.media_desktop
    {
        grid-template-columns: 1fr auto 1fr;
        gap                  : 11.8rem;
    }
}

</style>