<template>
    <div class="holder">
        <div id="nav">
            <CategoriesPayItem v-for="(pay, i) in pays" :key="i" :url="pay.url" :iconName="pay.iconName" :catText="pay.text" :index="i">
            </CategoriesPayItem>
        </div>
        <img class="logo" src="@/assets/img/logo.png" alt="" />
    </div>
</template>

<script>
    // @ is an alias to /src
    import CategoriesPayItem from '@/components/CategoriesPayItem.vue'

    export default {
        name: 'home',
        components: {
            CategoriesPayItem
        },
        methods: {},
        data() {
            return {
                pays: [
                    {
                        url: '/card',
                        iconName: 'card',
                        text: 'Card'
                    },
                    {
                        url: '/cash',
                        iconName: 'cash',
                        text: 'Cash'
                    },
                    {
                        url: '/blink',
                        iconName: 'blink',
                        text: 'Blink'
                    },
                    {
                        url: '/qr',
                        iconName: 'qr',
                        text: 'Scan QR'
                    }
                ]
            }
        },
        computed: {
            // eslint-disable-next-line vue/return-in-computed-property

        },
        beforeRouteEnter(to, from, next) {
            next((vm) => vm.$store.dispatch('setPageTitle', 'Pay'))
        }
    }
</script>


<style lang="scss">
    body.pay {
        background-position: -60% 0;
        #app {
            .header {
                .action {
                    color: $color1;
                }
                .shopping-cart {
                    color: #ffffff;
                }
            }
            .logo {
                filter: invert(1);
            }
            .back {
                &:before {
                    border-bottom-color: #000000;
                    border-left-color: #000000;
                }
                &:after {
                    background: #000000;
                }
            }
        }
    }
</style>
