<template>
    <site-header @download-next="downloadNext" />
    <div class="site-container">
        <title-block />

        <welcome-article />

        <games-view :download-images="isTimeToRender"
                    :use-reverse="true"
                    :games="filteredGames()"
                    :title="gamesTitle" />
        <pagination class="pagination"
                    buttonType="digit-button"
                    :page-amount="paginationOnePageAmount"
                    @page-clicked="paginationOnePageClicked" />

        <intermediate-article :download-images="isTimeToRender"
                              :intermediate-article-title="intermediateArticleTitle"
                              :intermediate-article-description="intermediateArticleDescription"
                              :intermediate-article="intermediateArticle" />

        <games-column-view :download-images="isTimeToRender"
                           :games="filteredMoreGames()"
                           :title="moreGamesTitle" />
        <pagination class="pagination"
                    buttonType="point-button"
                    :page-amount="paginationTwoPageAmount"
                    @page-clicked="paginationTwoPageClicked" />


        <video-block v-if="isTimeToRender" />

        <card-board :title="cardsTitle"
                    :description="cardsDescription"
                    :cards="cards"></card-board>

        <custom-button :download-images="isTimeToRender"
                       class="button">Asia Anda dapat mencobanya di KINGZ ASIA</custom-button>

        <intermediate-article :download-images="isTimeToRender"
                              :intermediate-article-title="intermediateArticle2Title"
                              :intermediate-article-description="intermediateArticle2Description"

                              :intermediate-article="intermediateArticle2" />

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
import { defineComponent, ref, computed } from 'vue';
import SiteHeader from '@/components/SiteHeader.vue';
import TitleBlock from '@/components/TitleBlock.vue';
import WelcomeArticle from '@/components/WelcomeArticle.vue';
import GamesView from '@/components/GamesView.vue';
import GamesColumnView from '@/components/GamesColumn.vue';
import VideoBlock from '@/components/VideoBlock.vue';
import CustomButton from '@/components/CustomButton.vue';
import CardBoard from '@/components/CardBoard.vue';
import MegaBonus from '@/components/MegaBonus.vue';
import Pagination from '@/components/Pagination.vue';
import { gamesTitle, games, moreGamesTitle, moreGames } from '@/common/content/picture+text/picture+text';
import IntermediateArticle from '@/components/IntermediateArticle.vue';
import {
    intermediateArticleTitle,
    intermediateArticleDescription,
    intermediateArticle,
    intermediateArticle2Title,
    intermediateArticle2Description,
    intermediateArticle2,
} from "@/common/content/picture+text/intermediate-article";
import { cardsTitle, cards, cardsDescription, moreCards, moreCardsTitle } from "@/common/content/text/cards";
import store from '@/store';

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
        Pagination
    },
    setup() {
        const isMobile = computed(() => store.getters.getBreakpoints.mobile);
        const isTimeToRender = ref(false);
        const downloadNext = () => isTimeToRender.value = true;

        //1st pagination
        const gamesPerPage1 = 2;
        const paginationOnePageAmount = ref(Math.ceil(games.length / 2));
        const paginationOneCurrentPage = ref(0);
        const filteredGames = () => {
            if (isMobile.value) return games.filter((game, index) =>
                index >= paginationOneCurrentPage.value * gamesPerPage1
                && index < paginationOneCurrentPage.value * gamesPerPage1 + gamesPerPage1);
            else return games;
        };
        const paginationOnePageClicked = (pageNumber: number) => paginationOneCurrentPage.value = pageNumber;

        //2nd pagination
        const paginationTwoPageAmount = ref(Math.ceil(moreGames.length));
        const paginationTwoCurrentPage = ref(0);
        const filteredMoreGames = () => {
            if (isMobile.value) return moreGames.filter((game, index) =>
                index === paginationTwoCurrentPage.value);
            else return moreGames;
        };
        const paginationTwoPageClicked = (pageNumber: number) => paginationTwoCurrentPage.value = pageNumber;

        return {
            isMobile,
            downloadNext,
            isTimeToRender,
            gamesTitle,
            filteredGames,
            moreGamesTitle,
            filteredMoreGames,
            //1st pagination
            paginationOnePageAmount,
            paginationOnePageClicked,
            //2nd pagination
            paginationTwoPageAmount,
            paginationTwoPageClicked,
            //Intermediate article 1
            intermediateArticleTitle,
            intermediateArticleDescription,
            intermediateArticle,
            intermediateArticle2Title,
            intermediateArticle2Description,
            intermediateArticle2,

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

.pagination {
    display: none;

    @include breakpoint-mobile() {
        display: flex;
    }
}
</style>