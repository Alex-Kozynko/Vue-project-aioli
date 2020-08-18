<template>
    <div class="holder">
        <div id="nav">
            <CategoriesPayItem
            v-for="(cat, i) in cats"
            :key="i"
            :url="'/menu/' + cat.url"
            :imgSrc="cat.imgSrc"
            :catText="cat.text"
            :index="i"
            >
            </CategoriesPayItem>
        </div>
        <img class="logo" src="@/assets/img/logo.png" alt="" />
    </div>
</template>

<script>
    import CategoriesPayItem from '@/components/CategoriesPayItem.vue'

    export default {
        name: 'home',
        components: {
            CategoriesPayItem
        },
        computed: {
            cats() {
                return this.$store.state.cats
            }
        },
        beforeRouteEnter(to, from, next) {
            next((vm) => vm.$store.dispatch('setPageTitle', 'Categories'))
        }
    }
</script>


<style lang="scss">
    body {
        background: linear-gradient(90deg, $color1 65%, $color3 35%) 65% 0 / 160% 100%;
        transition: all 0.5s;
        #app {
            min-height: calc(100vh - #{$t60});
            .holder {

            }
        }
    }
</style>
