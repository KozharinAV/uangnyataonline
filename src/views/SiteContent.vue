<template>
    <site-header @download-next="downloadNext" />
    <div class="site-container">
        <title-block />

        <welcome-article />

        <games-view :download-images="isTimeToRender"
                    :use-reverse="true"
                    :games="games"
                    :title="gamesTitle" />

        <intermediate-article :download-images="isTimeToRender"
                              :intermediate-article-title="intermediateArticleTitle"
                              :intermediate-article-description="intermediateArticleDescription"
                              :intermediate-article-text="intermediateArticleText" />

        <games-column-view :download-images="isTimeToRender"
                           :games="moreGames"
                           :title="moreGamesTitle" />

        <video-block v-if="isTimeToRender" />

        <card-board :title="cardsTitle"
                    :description="cardsDescription"
                    :cards="cards"></card-board>

        <custom-button :download-images="isTimeToRender"
                       class="button">Asia Anda dapat mencobanya di KINGZ ASIA</custom-button>

        <intermediate-article :download-images="isTimeToRender"
                              :intermediate-article-title="intermediateArticle2Title"
                              :intermediate-article-description="intermediateArticle2Description"

                              :intermediate-article-text="intermediateArticleText2" />

        <h2 class="title">Anda dapat mulai menghasilkan sekarang</h2>
        <custom-button :download-images="isTimeToRender"
                       class="button">Asia Anda dapat mencobanya di KINGZ ASIA </custom-button>

        <mega-bonus :download-images="isTimeToRender" />

        <card-board :title="moreCardsTitle"
                    :cards="moreCards"></card-board>
        <custom-button :download-images="isTimeToRender"
                       class="button">Hasilkan sekarang</custom-button>
    </div>
</template>
  
<script lang="ts">
import { defineComponent, ref } from 'vue';
import SiteHeader from '@/components/SiteHeader.vue';
import TitleBlock from '@/components/TitleBlock.vue';
import WelcomeArticle from '@/components/WelcomeArticle.vue';
import GamesView from '@/components/GamesView.vue';
import GamesColumnView from '@/components/GamesColumn.vue';
import VideoBlock from '@/components/VideoBlock.vue';
import CustomButton from '@/components/CustomButton.vue';
import CardBoard from '@/components/CardBoard.vue';
import MegaBonus from '@/components/MegaBonus.vue';
import { gamesTitle, games, moreGamesTitle, moreGames } from '@/common/content/picture+text/picture+text';
import IntermediateArticle from '@/components/IntermediateArticle.vue';
import {
    intermediateArticleTitle,
    intermediateArticleDescription,
    intermediateArticleText,
    intermediateArticle2Title,
    intermediateArticle2Description,
    intermediateArticleText2,
} from "@/common/content/picture+text/intermediate-article";
import { cardsTitle, cards, cardsDescription, moreCards, moreCardsTitle } from "@/common/content/text/cards";

export default defineComponent({
    name: 'SiteContent',
    components: {
        SiteHeader,
        TitleBlock,
        WelcomeArticle,
        GamesView,
        GamesColumnView,
        VideoBlock,
        IntermediateArticle,
        CustomButton,
        CardBoard,
        MegaBonus,
    },
    setup() {
        const isTimeToRender = ref(false);
        const downloadNext = () => isTimeToRender.value = true;





        return {
            downloadNext,
            isTimeToRender,
            gamesTitle,
            games,
            moreGamesTitle,
            moreGames,
            //Intermediate article
            intermediateArticleTitle,
            intermediateArticleDescription,
            intermediateArticleText,
            intermediateArticle2Title,
            intermediateArticle2Description,
            intermediateArticleText2,

            //Cards
            cardsTitle,
            cardsDescription,
            cards,
            moreCards,
            moreCardsTitle

        };
    }
});
</script>
<style lang="scss" scoped>
.site-container {
    display: flex;
    flex-direction: column;
    gap: 70px;
    background-color: $main-background-color;
    width: 100%;
    padding-bottom: 20px;

    @include breakpoint-tablet-and-down() {
        gap: 50px;
    }

    @include breakpoint-mobile() {
        width: 100vw;
        gap: 0;
    }
}


.button {
    align-self: center;

    @include breakpoint-mobile() {
        max-width: 95%;
        margin: auto;
    }
}

.title {
    font-size: 40px;
    text-align: center;
    color: $main-text-color;
}
</style>