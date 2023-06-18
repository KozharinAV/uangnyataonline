<template>
    <div class="title-description">
        <h2>{{ title }}</h2>
        <h3>{{ description }}</h3>
    </div>
    <div class="card-container">
        <div class="titles-container">
            <div :class="cardTitleClass(index)"
                 v-for="(card, index) in cards"
                 :key="index"
                 @click="cardClicked(index)">
                {{ card.title }}
                <div v-if="descriptionVisible(index)"
                     class="in-card-description">
                    <div v-for="(item, index) in cardDescription"
                         :key="index">{{ item }}</div>
                </div>
            </div>
        </div>
        <div class="card-description">
            <div v-for="(item, index) in cardDescription"
                 :key="index">{{ item }}</div>
        </div>
    </div>
</template>
  
<script lang="ts">
import { defineComponent, PropType, ref } from 'vue';
import { Card } from "@/common/content/text/cards";

export default defineComponent({
    name: 'CardBoard',

    props: {
        cards: {
            type: Array as PropType<Array<Card>>,
            required: true
        },
        title: {
            type: String,
            default: ""
        },
        description: {
            type: String,
            default: ""
        },

    },
    setup(props) {
        const clickedCards = ref(props.cards.map((card, index) => !index));
        const cardDescription = ref(props.cards[0].content);
        const descriptionVisible = (index: number) => clickedCards.value[index];
        const cardTitleClass = (index: number) =>
            clickedCards.value[index]
                ? "card-title clicked"
                : "card-title";
        const cardClicked = (clickedCardIndex: number) => {
            cardDescription.value = props.cards[clickedCardIndex].content;
            clickedCards.value = clickedCards.value.map((card, index) => clickedCardIndex === index);
        };
        return {
            cardTitleClass,
            cardClicked,
            cardDescription,
            descriptionVisible
        };
    }
});

</script>
<style lang="scss" scoped>
.title-description {
    color: $main-text-color;
    display: flex;
    flex-direction: column;
    gap: 20px;
    text-align: center;
    width: 85%;
    align-self: center;

    @include breakpoint-tablet() {
        width: 95%;
    }

    @include breakpoint-mobile() {
        margin: 20px auto;
        gap: 10px;
        width: 100%;
        padding: 0 10px;
    }
}

.card-container {
    display: flex;
    flex-wrap: nowrap;
    align-items: stretch;
    width: 85%;
    align-self: center;
    border-radius: 50px;
    overflow: hidden;

    @include breakpoint-tablet-and-down() {
        width: 95%;
        border-radius: 30px;
    }

}

.titles-container {
    display: flex;
    flex-direction: column;
    text-align: left;
    min-width: 40vw;
    z-index: 10;

    @include breakpoint-mobile() {
        display: flex;
        flex-direction: column;
        text-align: left;
        min-width: 40vw;
        z-index: 10;
    }

}

.card-title {
    background-color: $title-background-color;
    border: 3px solid $main-background-color;
    border-radius: 50px;
    padding: 30px;
    font-size: 32px;
    cursor: pointer;

    @include breakpoint-mobile() {
        font-size: 25px;
        font-weight: 700;
        height: fit-content;
        padding: 15px;
        border-radius: 30px;
    }
}

.clicked {
    background-color: #febd27;
    border: none;
}

.card-description {
    background-color: $header-background;
    margin-left: -50px;
    padding: 30px 30px 30px 100px;
    font-size: 24px;
    line-height: 38px;

    @include breakpoint-mobile() {
        display: none;
    }
}

.in-card-description {
    display: none;

    @include breakpoint-mobile() {
        display: block;
        font-size: 20px;
        line-height: 22px;
        margin-top: 20px;
    }
}
</style>