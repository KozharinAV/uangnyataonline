<template>
    <a :href="mainPartnersLink">
        <button class="custom-button">
            <div class="button-inner-wrapper">
                <slot></slot>
                <img v-if="downloadImages"
                     class="arrow"
                     src="../../public/images/arrow.png"
                     alt="arrow">
            </div>
        </button></a>
</template>

<script lang="ts">

import { defineComponent, computed } from 'vue';
import { mainPartnersLink } from '@/common/content/links';

export default defineComponent({
    name: 'CustomButton',
    props: {
        downloadImages: {
            type: Boolean,
            default: false
        }
    },
    setup(props) {
        const downloadImages = computed(() => props.downloadImages);
        return {
            downloadImages,
            mainPartnersLink
        };
    }
});
</script>

<style lang="scss" scoped>
.custom-button {
    width: fit-content;
    height: 50px;
    cursor: pointer;
    border: none;
    border-radius: 25px;
    background-color: $button-background-color;
    font-family: $logo-app;
    font-size: 30px;
    padding: 0 40px;
    box-shadow: 0px 0px 25px 10px $buttons-shadow;
    transition: all 0.3s ease;
    line-height: 160%;
    margin: 10px;

    @include breakpoint-mobile() {
        width: 75vw;
        height: -moz-fit-content;
        height: fit-content;
        font-size: 25px;
        padding: 5px 10px;
    }
}

.custom-button:hover {
    background-color: $button-hover-color;
}

.button-inner-wrapper {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
}

.arrow {
    width: 13px;
    height: 9.5px;
}
</style>