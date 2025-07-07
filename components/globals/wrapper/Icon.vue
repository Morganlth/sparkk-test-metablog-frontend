<!-- [icon] -->

<!-- #HTML -->

<template>
    <cpn-icon
    :class="`icon @size${propSize} p_non ${propClass} ${ICON_STYLES.icon}`"
    v-bind="ICON_$STATE"
    >
        <slot />
    </cpn-icon>
</template>

<!-- #SCRIPT -->

<script
setup
>

// #IMPORTS

    // ##STYLES
import ICON_STYLES from './@icon/icon.module.scss'

// #DEFINE

    // ##PROPS
const PROPS = defineProps(
{
    propClass:
    {
        type   : String,
        default: '' 
    },
    propLabel:
    {
        type   : String,
        default: ''
    },
    propSize:
    {
        type   : Number,
        default: 0
    }
})

// #CONSTANTES

    // ##THIS
const ICON_$STATE = computed(() => PROPS.propLabel
    ? {
        role        : 'img',
        'aria-label': PROPS.propLabel
    }
    : {
        role         : 'presentation',
        'aria-hidden': true
    }
)

</script>