<!-- [filter] -->

<!-- #HTML -->

<template>
    <ul
    class="filters superWorkSans2 d_flx fw_400"
    >
        <li
        v-for="category in FILTERS_$CATEGORIES"
        :key="category"
        class="filter pr_5 pl_5 b_brd lh_2"
        >
            <button
            :class="`b_trp ${category === FILTERS_$CURRENT_CATEGORY ? 'c_hrt' : 'c_gry3'} f_hrt`"
            @click="btn_eClick(category)"
            >
                {{category}}
            </button>
        </li>
    </ul>
</template>

<!-- #SCRIPT -->

<script
setup
>

// #CONSTANTES

    // ##COMPOSABLES
const NUXT_APP = useNuxtApp()

    // ##THIS
const
FILTERS_$CATEGORIES       = NUXT_APP.$apiGetCategories(),
FILTERS_$CURRENT_CATEGORY = NUXT_APP.$apiGetCurrentCategory()

// #FUNCTIONS

    // ##EVENTS
function btn_eClick(category) { FILTERS_$CURRENT_CATEGORY.value = category }

</script>

<!-- #STYLE -->

<style
lang="scss"
scoped
>

/* #THIS */

.filters .filter:not(:first-child) { border-left: solid $lgh2 1px; }

</style>