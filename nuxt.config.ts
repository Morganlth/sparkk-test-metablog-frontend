/* [nuxt-config] */

// #IMPORTS

    // ##SCRIPTS

// #CONSTANTES

    // ##THIS
const NUXT_CUSTOM_ELEMENTS =
[
    // *APP
    'app-wrapper', 'app-container', 'app-sentinel', 'app-ad',
    // *COMPONENT
    'cpn-page', 'cpn-icon', 'cpn-loader',
    // *POST
    'post-category', 'post-author'
]

// #EXPORTS

    // ##THIS
export default defineNuxtConfig(
{
    compatibilityDate: '2025-05-15',
    devtools         : { enabled: true },
    modules          : ['@nuxt/eslint'],
    app              :
    {
        head:
        {
            title: 'MetaBlog',
            link :
            [
                {
                    rel : 'icon',
                    type: 'image/svg+xml',
                    href: '/favicon.svg'
                }
            ],
            htmlAttrs:
            {
                id   : 'APP',
                class: 'superScrollBar o_h_a b_drk1 c_lgh1',
                lang : 'en-US'
            },
            bodyAttrs:
            {
                id   : 'BODY',
                class: 'w_ful'
            }
        }
    },
    components:
    [
        {
            path      : '~/components',
            pathPrefix: false,
            ignore    : ['**/@*/**']
        }
    ],
    css : ['~/assets/styles/app.scss'],
    vite:
    {
        css:
        {
            preprocessorOptions:
            {
                scss:
                {
                    additionalData:  `
                        @use '~/assets/styles/globals/vars' as *;
                        @use '~/assets/styles/globals/placeholders' as *;
                    `,
                    outputStyle: 'compressed'
                }
            }
        }
    },
    vue          : { compilerOptions: { isCustomElement: tag => NUXT_CUSTOM_ELEMENTS.includes(tag) } },
    runtimeConfig:
    {
        public:
        {
            apiUrl  : process.env.NUXT_PUBLIC_API_URL,
            apiToken: process.env.NUXT_PUBLIC_API_TOKEN
        }
    }
})