<template>
    <router-link :to="url" class="item">
        <div class="img"><img :src="require(`@/assets/img/${imgSrc}`)" v-if="imgSrc" alt=""/><Icon :name="iconName" size="50%"  v-if="iconName" /></div>
        <h2 class="text">{{ catText }}</h2>
        <button class="arrow"></button>
    </router-link>
</template>

<script>
    import Icon from '@/components/Icon.vue'

    export default {
        components: {
            Icon
        },
        props: {
            url: {
                type: String,
                required: true
            },
            imgSrc: {
                type: String,
            },
            iconName: {
                type: String,
            },
            catText: {
                type: String,
                required: true
            },
            index: {
                type: Number,
            }
        }
    }
</script>