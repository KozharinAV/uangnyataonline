<template>
    <div class="pagination">
        <div :class="pageButtonClass(index)"
             v-for="(button, index) in clickedButtons"
             :key="index"
             @click="pageClicked(index)">
            <div v-if="digitVisible">{{ index + 1 }}</div>
        </div>
    </div>
</template>

<script lang="ts">

import { computed, defineComponent, PropType, ref } from 'vue';

export default defineComponent({
    name: 'Pagination',
    props: {
        buttonType: {
            type: String as PropType<"digit-button" | "point-button">,
            default: "digit"
        },
        pageAmount: {
            type: Number,
            required: true
        },

    },
    emits: ["pageClicked"],
    setup(props, { emit }) {
        const digitVisible = computed(() => props.buttonType === "digit-button");
        const clickedButtons = ref(new Array<number>(props.pageAmount).fill(0).map((item, index) => !index));
        const pageButtonClass = (index: number) =>
            clickedButtons.value[index]
                ? `${props.buttonType} clicked`
                : props.buttonType;
        const pageClicked = (clickedIndex: number) => {
            clickedButtons.value = clickedButtons.value.map((button, index) => clickedIndex === index);
            emit("pageClicked", clickedIndex);
        };
        return {
            digitVisible,
            clickedButtons,
            pageButtonClass,
            pageClicked
        };
    }
});
</script>

<style lang="scss" scoped>
.pagination {
    display: flex;
    justify-content: center;
    height: fit-content;
    gap: 16px;
    flex-wrap: nowrap;
    margin: 20px auto;
}

.digit-button {
    color: $main-text-color;
    padding: 15px 20px;
    width: 50px;
    height: 50px;
    border: 1px solid $title-background-color;
    border-radius: 25px;
    background: none;
    cursor: pointer;
}

.point-button {
    width: 20px;
    height: 20px;
    background: $title-background-color;
    opacity: .4;
    border-radius: 10px;
    cursor: pointer;
}

.clicked {
    background-color: $header-background;
}
</style>