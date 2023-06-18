<template>
    <div class="wrapper">
        <h2 class="games-title">{{ title }}</h2>
        <div class="page-container">
            <div :class="gameWrapperClass(index)"
                 v-for="(game, index) in games"
                 :key="index">
                <div class="image-wrapper">
                    <img v-if="downloadImages"
                         class="image"
                         :src="game.image"
                         :alt="game.title">
                    <custom-button :download-images="downloadImages"
                                   class="tablet">
                        Bermain
                    </custom-button>
                </div>
                <h3 :class="gameTitleClass(index)">{{ game.title }}</h3>
                <div class="text-wrapper">
                    <p class="text">{{ game.description }}</p>
                    <custom-button :download-images="downloadImages"
                                   class="non-tablet">
                        Bermain
                    </custom-button>
                </div>
            </div>
        </div>
    </div>
</template>
  
<script lang="ts">
import { computed, defineComponent, PropType } from 'vue';
import { mainPartnersLink } from '@/common/content/links';
import CustomButton from '@/components/CustomButton.vue';
import { Game } from '@/common/content/picture+text/picture+text';

export default defineComponent({
    name: 'GamesView',
    components: {
        CustomButton
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
        const downloadImages = computed(() => props.downloadImages);
        const gameWrapperClass = (index: number) => {
            let style = "game-wrapper";
            if (props.useReverse) style = index % 2 === 0 ? style : `${style} reverse`;
            return style;
        };
        const gameTitleClass = (index: number) => index % 2 === 0 ? "game-title column" : `game-title column left`;
        return {
            downloadImages,
            mainPartnersLink,
            gameWrapperClass,
            gameTitleClass
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

.games-title {
    margin: 20px auto;
    text-align: center;
}

.page-container {
    display: flex;
    flex-direction: column;
    gap: 80px;
    margin: auto;
}


.game-wrapper {
    display: flex;
    width: 100%;

    @include breakpoint-mobile() {
        flex-direction: column !important;
    }
}

.reverse {
    flex-direction: row-reverse;
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

.image {
    width: 615px;
    height: -moz-fit-content;
    height: fit-content;
    border-radius: 60px;

    @include breakpoint-tablet() {
        width: 400px;
    }

    @include breakpoint-mobile() {
        width: 100%;
        border-radius: 0 0 60px 60px;
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

.left {
    right: auto;
    left: 8%;

    @include breakpoint-tablet() {
        left: 3%;
    }
}

.text-wrapper {
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    padding: 15vh 0 0 30px;
    text-align: left;

    @include breakpoint-tablet() {
        padding: 100px 10px 0 30px;
    }

    @include breakpoint-mobile() {
        padding: 20px 10px 0 10px;
    }

}

.text {
    line-height: 120%;
    margin-bottom: 20px;
}

.tablet {
    display: none;

    @include breakpoint-tablet() {
        display: block;
    }
}

.non-tablet {
    display: block;
    text-align: center;

    @include breakpoint-tablet() {
        display: none;
    }
}
</style>