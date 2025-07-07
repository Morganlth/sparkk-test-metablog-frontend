<!-- [content] -->

<!-- #HTML -->

<template>
    <main
    class="content pt_9 b_brd"
    >
        <section
        v-for="content, i in propContent"
        >
            <component
            v-if="content.type === 'heading'"
            :is="`h${content.level}`"
            class="title superWorkSans5 mb_6 fw_600 lh_4"
            >
                <Text
                :propChildren="content.children"
                />
            </component>

            <p
            v-else-if="content.type === 'paragraph'"
            class="text superSourceSerif44 mb_9 c_gry1 fw_400 lh_5"
            >
                <Text
                :propChildren="content.children"
                />
            </p>
    
            <img
            v-else-if="content.type === 'image'"
            class="image d_blc w_any mb_9 op_c of_c brd_r_2"
            :src="content.image.url"
            :alt="content.image.alternativeText"
            />

            <component
            v-else-if="content.type === 'list'"
            :is="content.format === 'ordered' ? 'ol' : 'ul'"
            class="list superSourceSerif44 mb_9 pt_9 pr_9 pb_9 pl_9 b_brd b_drk2 brd_r_2 fw_400 lh_5"
            >
                <Text
                :propChildren="content.children"
                />
            </component>

            <blockquote
            v-else-if="content.type === 'quote'"
            class="quote superSourceSerif45 mb_9 pt_9 pr_9 pb_9 pl_9 b_brd b_drk2 brd_r_2 lh_5"
            >
                <p
                v-for="child in content.children"
                >
                    {{child.text}}
                </p>
            </blockquote>

            <app-ad
            v-if="i === 10"
            class="d_flx f_cl_ a_ctr mb_9 b_brd b_drk2 c_gry3"
            aria-hidden="true"
            >
                <app-wrapper
                class="superWorkSans1 fw_400 lh_1"
                >
                    Advertisement
                </app-wrapper>

                <app-wrapper
                class="superWorkSans4 fw_600 lh_2"
                >
                    You can place ads
                </app-wrapper>

                <app-wrapper
                class="superWorkSans3 fw_400 lh_3"
                >
                    750x100
                </app-wrapper>
            </app-ad>
        </section>
    </main>
</template>

<!-- #SCRIPT -->

<script
setup
>

// #IMPORTS

    // ##COMPONENTS
import Text from './@content/Text.vue'

// #DEFINE

    // ##PROPS
defineProps({ propContent: Object })

</script>

<!-- #STYLE -->

<style
lang="scss"
scoped
>

/* #THIS */

.content
{
    .image { max-height: 46.2rem; }

    .quote
    {
        border-left: solid $lgh2 $g1;

        font-style: italic;
    
        &>p::before { content: '“ '; }

        &>p::after { content: ' ”'; }
    }

    app-ad
    {
        margin-inline: 2.5rem;
        padding-block: 1.5rem;
    }
}

</style>