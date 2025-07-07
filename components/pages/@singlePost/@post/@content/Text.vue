<!-- [text] -->

<!-- #HTML -->

<template>
    <template
    v-for="child in propChildren"
    >
        <span
        v-if="child.type === 'text'"
        class="text"
        :class="
        {
            '@bold'         : child.bold,
            '@italic'       : child.italic,
            '@underline'    : child.underline,
            '@strikethrough': child.strikethrough
        }"
        >
            {{child.text}}
        </span>

        <NuxtLink
        v-else-if="child.type === 'link'"
        class="link @default c_prm1"
        :to="child.url"
        >
            <Text
            :propChildren="child.children"
            />
        </NuxtLink>

        <li
        v-else-if="child.type === 'list-item'"
        class="item @default"
        >
            <Text
            :propChildren="child.children"
            />
        </li>
    </template>
</template>

<!-- #SCRIPT -->

<script
setup
>

// #DEFINE

    // ##PROPS
defineProps({ propChildren: Array })

</script>

<!-- #STYLE -->

<style
lang="scss"
scoped
>

/* #THIS */

.text
{
    &.\@bold { @extend %FW_700; }

    &.\@italic { font-style: italic; }

    &.\@underline:not(.\@strikethrough) { text-decoration-line: underline; }

    &.\@strikethrough:not(.\@underline) { text-decoration-line: line-through; }

    &.\@underline.\@strikethrough { text-decoration-line: underline line-through; }
}

.item { list-style-position: inside; }

</style>