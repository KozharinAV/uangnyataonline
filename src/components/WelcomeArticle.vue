<template>
    <div class="title-article">
        <article class="article">
            <h1 class="title">{{ articleTitle }}</h1>
            <p v-for="(paragraph, index) in articleContent"
               :key="index">{{ paragraph }}</p>
        </article>
    </div>
</template>
  
<script lang="ts">
import { defineComponent } from 'vue';
import { articleTitle, articleContent } from "@/common/content/text/titleArticle"

export default defineComponent({
    name: 'TitleArticle',

    setup() {
        return {
            articleTitle,
            articleContent
        }
    }
});
</script>
  
<style scoped lang="scss">
.title-article {
    color: $main-text-color;
    width: 85%;
    align-self: center;
    z-index: 10;

    @include breakpoint-tablet() {
        width: 95%;
    }

    @include breakpoint-mobile() {
        width: 95%;
        text-align: center;
    }
}

.title {
    align-self: center;
}

.article {
    display: flex;
    flex-direction: column;
    gap: 10px;
}
</style>
  