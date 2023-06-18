<template>
  <div class="title-image-mobile" />
  <div class="title-block">
    <div class="coins">
    </div>
    <div class="title-image" />
    <div class="text-container">
      <span class="title">{{ title }}</span>
      <a class="casino-wrapper"
         :href="mainPartnersLink">
        <div class="casino-image" />
      </a>
    </div>
  </div>
  <span class="popular-key">Kingz Asia alternatif</span>
  <div class="description">
    <p>{{ description }}</p>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { title, description, titleImageWeb, titleImageMobile } from "@/common/content/text/commonFrases";
import { mainPartnersLink } from '@/common/content/links';

export default defineComponent({
  name: 'TitleBlock',

  setup() {
    return {
      title,
      description,
      titleImageWeb,
      titleImageMobile,
      mainPartnersLink,
    };
  }
});
</script>

<style scoped lang="scss">
.title-block {
  display: flex;
  height: 750px;
  background-color: $title-background-color;

  @include breakpoint-tablet {
    height: 490px;
  }

  @include breakpoint-mobile {
    background: none;
    height: 640px;
  }
}

.coins {
  width: 100%;
  aspect-ratio: 1.33;
  background-repeat: no-repeat;
  background-size: contain;
  position: absolute;
  top: -70px;
  overflow: hidden;
  z-index: 20;
  background-image: url("/public/images/coins.webp");

  @include breakpoint-mobile {
    top: 70px;
    aspect-ratio: 0.5;
    background-image: url("/public/images/coins-mobile.webp");
  }
}

.title-image {
  width: 100%;
  height: 750px;
  border-radius: 0 0 50px 0;
  background-size: cover;
  background-image: url("/public/images/title-image.webp");

  @include breakpoint-tablet {
    height: 490px;
  }

  @include breakpoint-mobile() {
    display: none;
  }
}

.title-image-mobile {
  display: none;

  @include breakpoint-mobile() {
    position: absolute;
    display: block;
    top: -90px;
    width: 100vw;
    aspect-ratio: 428 / 737;
    background-size: cover;
    background-image: url("/public/images/title-image-mobile.webp");
  }

}

.text-container {
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  gap: 10px;
  font-family: Barlow, sans-serif;
  min-width: 350px;
  padding: 30px;
  text-align: left;
  width: 100%;

  @include breakpoint-tablet {
    font-size: 50px;
    line-height: 60px;
    padding-bottom: 0;
  }

  @include breakpoint-mobile {
    padding: 0;
    justify-content: center;
    z-index: 30;
  }
}

.casino-wrapper {
  margin-top: 150px;
  margin-bottom: 20px;
  cursor: pointer;
  z-index: 100;

  @include breakpoint-tablet {
    margin-top: 50px;
    margin-bottom: 0;
  }

  @include breakpoint-mobile {
    margin: 50px 0 0 0;

  }
}

.casino-image {
  width: 426px;
  height: 128px;
  background-image: url("/public/images/casino-icon.webp");

  @include breakpoint-mobile {
    width: 356px;
    height: 120px;
    background-image: url("/public/images/casino-icon-mobile.webp");
  }
}

.title {
  max-width: 900px;
  font-size: 70px;
  font-weight: 700;
  line-height: 105px;
  letter-spacing: -.011em;

  @include breakpoint-tablet {
    font-size: 50px;
    line-height: 60px;
  }

  @include breakpoint-mobile {
    color: $main-text-color;
    font-size: 36px;
    line-height: 54px;
    padding: 0 10px;
  }
}

.description {
  color: $main-text-color;
  text-align: center;
  padding: 0 200px;

  @include breakpoint-mobile {
    font-size: 18px;
    padding: 0;
    z-index: 10;
  }
}

.popular-key {
  color: $main-text-color;
  font-size: 40px;
  font-weight: 700;
  margin: 10px auto;
  z-index: 10;

  @include breakpoint-mobile {
    font-size: 18px;
  }
}
</style>
