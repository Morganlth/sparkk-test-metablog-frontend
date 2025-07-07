<!-- [page] -->

<!-- #HTML -->

<template>
    <cpn-page
    :id="propID"
    :class="propClass"
    >
        <slot />
    </cpn-page>
</template>

<!-- #SCRIPT -->

<script
setup
>

// #DEFINE

    // ##PROPS
defineProps(
{
    propID   : String,
    propClass:
    {
        type   : String,
        default: 'd_cts'
    }
})

</script>