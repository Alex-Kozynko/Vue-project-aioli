<template>
    <div id="app">
        <div class="header">
            <a
                v-if="$router.currentRoute.name !== 'home'"
                @click="$router.go(-1)"
                class="back"
            ></a>
            <span v-else class="b_menu"></span>
            <div class="action">
                {{ pageTitle }}
            </div>
            <ShoppingCart/>
        </div>
        <transition :name="transitionName"
                    mode="out-in">
            <router-view/>
        </transition>
    </div>
</template>

<script>
    import ShoppingCart from "@/components/ShoppingCart"

    export default {
        data(){
            return {
                transitionName: 'slide-left'
            }
        },
        components: {
            ShoppingCart
        },

        computed: {
            pageTitle() {
                return this.$store.state.pageTitle
            }
        },
    }
</script>

<style lang="scss">
@import "assets/styles/all_pages";
    .slide-left-enter-active,
    .slide-left-leave-active,
    .slide-right-enter-active,
    .slide-right-leave-active {
        transition-duration: 0.5s;
        transition-property: height, opacity, transform;
        transition-timing-function: cubic-bezier(0.55, 0, 0.1, 1);
        // overflow: hidden;
    }

    .slide-left-enter,
    .slide-right-leave-active {
        opacity: 0;
        transform: translate(2em, 0);
    }

    .slide-left-leave-active,
    .slide-right-enter {
        opacity: 0;
        transform: translate(-2em, 0);
    }
</style>
