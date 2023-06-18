<template>
    <div class="container">
        <img v-if="downloadImages"
             v-show="intermediateArticleImage"
             :src="intermediateArticleImage"
             :alt="intermediateArticleTitle" />
        <h2 class="article center">{{ intermediateArticleTitle }}</h2>
        <h3 class="article title">{{ intermediateArticleDescription }}</h3>
        <div class="main-text">
            <p class="article"
               v-for="(paragraph, index) in intermediateArticle"
               :key="index">{{ paragraph }}</p>
        </div>
        <p class="article">{{ intermediateArticleConclusion }}</p>
    </div>
</template>
  
<script lang="ts">
import { defineComponent, PropType, computed } from 'vue';

export default defineComponent({
    name: 'IntermediateArticle',
    props: {
        intermediateArticleImage: {
            type: String,
            default: ""
        },
        intermediateArticleTitle: {
            type: String,
            default: ""
        },
        intermediateArticleDescription: {
            type: String,
            default: ""
        },
        intermediateArticle: {
            type: Array as PropType<Array<string>>,
            default: ""
        },
        intermediateArticleConclusion: {
            type: String,
            default: ""
        },
        downloadImages: {
            type: Boolean,
            default: false
        }
    },
    setup(props) {
        const downloadImages = computed(() => props.downloadImages);
        return { downloadImages };
    }
});
</script>
<style lang="scss" scoped>
.container {
    display: flex;
    justify-content: flex-start;
    flex-direction: column;
    gap: 20px;
    padding: 10px;
    width: 85%;
    align-self: center;
    color: $main-text-color;

    @include breakpoint-tablet() {
        width: 95%;
    }

    @include breakpoint-mobile() {
        padding: 10px;
        width: 95%;
    }
}

.article {
    text-align: left;
}

.title {
    font-size: 1.6em;

    @include breakpoint-mobile() {
        font-size: 1.1em;
    }
}

.main-text {
    display: flex;
    flex-direction: column;
    gap: 5px;
}

.center {
    text-align: center;
}

img {
    max-width: 900px;
    max-height: 600px;
    align-self: center;
    border-radius: 20px;

    @include breakpoint-mobile() {
        max-width: 375px;
    }
}
</style>