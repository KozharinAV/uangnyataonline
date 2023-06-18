<template>
    <div class="bonus">
        <h2 class="bonus-title">{{ bonusTitle }}</h2>
        <img v-if="downloadImages"
             :src="bonusImageWeb"
             :alt="bonusTitle">
        <span class="bonus-description"> {{ bonusDescription }}</span>

        <div class="bonus-container">
            <p v-for="(point, index) in bonusPoints"
               :key="index">{{ point }}</p>
        </div>
        <span class="bonus-description">{{ bonusConclusion }}</span>
        <custom-button :download-images="downloadImages">Dapatkan bonusnya sekarang juga</custom-button>
    </div>
</template>

<script lang="ts">

import { defineComponent, computed } from 'vue';
import { bonusPoints, bonusTitle, bonusDescription, bonusImageWeb, bonusConclusion } from "@/common/content/picture+text/mega-bonus"
import CustomButton from './CustomButton.vue';

export default defineComponent({
    components: { CustomButton },
    name: 'MegaBonus',
    props: {
        downloadImages: {
            type: Boolean,
            default: false
        }
    },
    setup(props) {
        const downloadImages = computed(() => props.downloadImages)
        return {
            downloadImages,
            bonusTitle,
            bonusDescription,
            bonusPoints,
            bonusImageWeb,
            bonusConclusion
        }
    }
});
</script>

<style lang="scss" scoped>
.bonus {
    display: flex;
    justify-content: flex-start;
    text-align: center;
    flex-direction: column;
    gap: 20px;
    padding: 20px;
    border-radius: 20px;
    background-color: $bonus-background-color;
    align-self: center;
    color: $main-text-color;
    width: 85%;

    @include breakpoint-tablet-and-down() {
        width: 95%;
        padding: 15px 10px;
    }
}

.bonus-title {
    text-align: center;
}

.bonus-description {
    text-align: center;
    font-size: 25px;
}

.bonus-container {
    display: flex;
    flex-direction: column;
    text-align: left;
}

img {
    border-radius: 20px;
    max-width: 1000px;
    max-height: 700px;
    align-self: center;

    @include breakpoint-mobile() {
        width: 90vw;
    }
}
</style>