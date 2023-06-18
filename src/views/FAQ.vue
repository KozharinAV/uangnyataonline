<template>
  <site-header />

  <div class="page-wrapper">
    <h2 class="faq-title">{{ faqTitle }}</h2>
    <div
         v-for="(item, index) in faqItems"
         :key="index">
      <div :class="questionClass(index)"
           @click="questionClicked(index)">
        {{ item.question }}
      </div>
      <div v-if="answerVisible(index)" class="answer">{{ item.answer }}</div>
    </div>
    <div class=" faq-button">
      <custom-button>MULAILAH BERMAIN</custom-button>
    </div>
  </div>
</template>
<script lang="ts">

import { defineComponent, ref } from 'vue';
import { faqItems, faqTitle, faqDescription } from "@/common/content/faq"
import CustomButton from '@/components/CustomButton.vue';
import SiteHeader from '@/components/SiteHeader.vue';
import { useHead } from '@vueuse/head'

export default defineComponent({
  components: { CustomButton, SiteHeader },
  name: 'MegaBonus',
  setup() {

    useHead({
      title: faqTitle,
      meta: [{
        name: 'description',
        content: faqDescription
      }]
    })
    const clickedQuestions = ref(faqItems.map((item, index) => !index))
    const questionClass = (index: number) =>
      clickedQuestions.value[index]
        ? "question clicked"
        : "question"
    const questionClicked = (clickedIndex: number) => clickedQuestions.value = clickedQuestions.value.map((item, index) => clickedIndex === index)

    const answerVisible = (answerIndex: number) => clickedQuestions.value[answerIndex]
    return {
      faqItems,
      faqTitle,
      questionClass,
      questionClicked,
      answerVisible
    }
  }
});
</script>

<style lang="scss" scoped>
.page-wrapper {
  background-color: $main-background-color;
  padding-bottom: 20px;
}

.faq-title {
  color: $main-text-color;
  padding: 150px 0 20px 0;
  text-align: center;

  @include breakpoint-mobile() {
    padding: 80px 0 10px 0;
  }
}

.question {
  color: $main-background-color;
  font-size: 35px;
  font-weight: 400;
  padding: 30px 40px;
  background: $main-text-color;
  border-radius: 100px;
  width: 85%;
  margin: 20px auto;
  cursor: pointer;

  @include breakpoint-mobile() {
    font-size: 20px;
    width: 95%;
    padding: 10px 25px;
  }
}

.clicked {
  background: $header-background;
}

.answer {
  color: $main-text-color;
  font-size: 24px;
  font-weight: 500;
  line-height: 38px;
  text-align: left;
  padding: 0 40px;
  width: 85%;
  margin: 0 auto;

  @include breakpoint-mobile() {
    font-size: 20px;
    width: 95%;
    padding: 0 25px;
    line-height: 23px;
  }
}

.faq-button {
  text-align: center;
}
</style>