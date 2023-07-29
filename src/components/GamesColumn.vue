<template>
    <div class="wrapper">
        <h2 class="games-title">{{ title }}</h2>
        <div class="page-container-column">
            <div :class="gameWrapperClass(index)"
                 v-for="(game, index) in prepearedMoreGames()"
                 :key="index">
                <h3 class="game-title column">{{ game.title }}</h3>
                <div class="image-wrapper">
                    <img v-if="downloadImages"
                         class="image-column"
                         :src="game.image"
                         :alt="game.title">
                    <custom-button :download-images="downloadImages"
                                   class="tablet">
                        Bermain
                    </custom-button>
                </div>
                <div class="text-wrapper-column">
                    <p class="text-column">{{ game.description }}</p>
                    <custom-button :download-images="downloadImages"
                                   class="non-tablet">
                        Bermain
                    </custom-button>
                </div>
            </div>
        </div>

        <pagination class="pagination"
                    buttonType="point-button"
                    :page-amount="paginationTwoPageAmount"
                    @page-clicked="paginationTwoPageClicked" />
    </div>
</template>
  
<script lang="ts">
import { computed, defineComponent, PropType, ref } from 'vue';
import { mainPartnersLink } from '@/common/content/links';
import CustomButton from '@/components/CustomButton.vue';
import Pagination from '@/components/Pagination.vue';
import { Game } from '@/common/content/picture+text/picture+text';
import store from '@/store';

export default defineComponent({
    name: 'GamesColumnView',
    components: {
        CustomButton,
        Pagination
    },
    props: {
        games: {
            type: Array as PropType<Array<Game>>,
            required: true
        },
        title: {
            type: String,
            default: ""
        },
        useReverse: {
            type: Boolean,
            default: false
        },
        downloadImages: {
            type: Boolean,
            default: false
        }

    },

    setup(props) {
        const isMobile = computed(() => store.getters.getBreakpoints.mobile);
        const downloadImages = computed(() => props.downloadImages);
        const gridAreas = ["gridA", "gridB", "gridC", "gridD", "gridE"];
        const gameWrapperClass = (index: number) => `game-wrapper-column ${gridAreas[index]}`;
        //pagination
        const paginationTwoPageAmount = ref(Math.ceil(props.games.length));
        const paginationTwoCurrentPage = ref(0);
        const prepearedMoreGames = () => {
            if (isMobile.value) return props.games.filter((_, index) =>
                index === paginationTwoCurrentPage.value);
            else return props.games;
        };
        const paginationTwoPageClicked = (pageNumber: number) => paginationTwoCurrentPage.value = pageNumber;
        return {
            downloadImages,
            mainPartnersLink,
            gameWrapperClass,
            paginationTwoPageAmount,
            paginationTwoPageClicked,
            prepearedMoreGames
        };
    }
});

</script>
<style lang="scss" scoped>
.wrapper {
    width: 85%;
    align-self: center;
    color: $title-background-color;
    background-color: $main-background-color;


    @include breakpoint-tablet-and-down() {
        padding: 10px 5px;
        width: 95%;
    }
}

.image-wrapper {
    @include breakpoint-tablet() {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        gap: 20px;
    }

    @include breakpoint-mobile() {
        align-self: center;
    }

}

.games-title {
    margin: 20px auto;
    text-align: center;
}

.page-container-column {
    display: grid;
    grid-template-areas:
        "A A B"
        "A A B"
        "C D E"
        "C D E";
    gap: 20px;
    margin: auto;

    @include breakpoint-tablet() {
        display: flex;
        flex-direction: column;
        width: 100%;
    }

    @include breakpoint-mobile() {
        width: 100%;
        display: flex;
        flex-direction: column;
    }

}

.gridA {
    grid-area: A;
}

.gridB {
    grid-area: B;
}

.gridC {
    grid-area: C;
    margin-top: -200px;

    @include breakpoint-tablet-and-down() {
        margin-top: 0;
    }
}

.gridD {
    grid-area: D;
    margin-top: -200px;

    @include breakpoint-tablet-and-down() {
        margin-top: 0;
    }
}

.gridE {
    grid-area: E;
}

.game-wrapper {
    display: flex;
    width: 100%;

    @include breakpoint-mobile() {
        flex-direction: column !important;
    }
}

.game-wrapper-column {
    color: $header-text-color;
    background-color: $title-background-color;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 10px;
    height: fit-content;
    border-radius: 67px;

    @include breakpoint-tablet() {
        align-self: center;
    }

    @include breakpoint-mobile() {
        width: 100%;
        flex-direction: column !important;
        height: 100%;
        align-self: center;
    }
}

.image-column {
    width: 400px;
    height: -moz-fit-content;
    height: fit-content;
    border-radius: 30px;
    float: left;
    padding: 10px;

    @include breakpoint-mobile() {
        width: 90vw;
    }
}

.game-title {
    color: $header-text-color;
    font-weight: 700;
    padding: 20px 50px;
    height: fit-content;
    background: $header-background;
    border-radius: 60px;
    position: absolute;
    right: 8%;
    width: 65%;
    height: fit-content;
    text-align: center;

    @include breakpoint-tablet() {
        font-size: 1.71em;
        padding: 18px 45px;
        right: 3%;
        width: 80%;
    }

    @include breakpoint-mobile() {
        position: static;
        font-size: 1.52em;
        padding: 16px 40px;
        width: 100%;
        border-radius: 0 0 60px 60px;
        margin-top: -80px;
    }
}

.column {
    position: relative;
    right: auto;
    width: 100%;
    padding: 20px 50px;
    height: -moz-fit-content;
    height: fit-content;
    background: #febd27;
    border-radius: 60px 60px 0 0;
    text-align: center;

    @include breakpoint-mobile() {
        position: static;
        margin-top: 0;
    }

}

.text-wrapper-column {
    display: flex;
    flex-direction: column;
    text-align: center;
    gap: 20px;
    margin-bottom: 40px;
    padding: 0 30px;
    max-width: 500px;
    line-height: 26px !important;

    @include breakpoint-tablet() {
        max-width: 700px;
    }

    @include breakpoint-mobile() {
        padding: 0 10px;
    }

}

.text-column {
    text-align: left;
    line-height: 110%;

    @include breakpoint-mobile() {
        text-align: left;
        line-height: 110%;
    }

}

.tablet {
    display: none;

    @include breakpoint-tablet() {
        display: block;
    }
}

.non-tablet {
    display: block;

    @include breakpoint-tablet() {
        display: none;
    }
}

.pagination {
    display: none;

    @include breakpoint-mobile() {
        display: flex;
    }
}
</style>