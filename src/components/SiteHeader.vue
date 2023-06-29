<template>
  <div class="header"
       id="header">
    <div class="greetings-wrapper">
      <div class="header-greetings">{{ headerGreetings }}</div>
      <img class="burger"
           src="../../public/images/burger.svg"
           alt="burger-menu"
           @click="burgerMenuClicked">
    </div>
    <nav v-if="!isMobile || navigationVisible"
         class="navigation">
      <router-link to="/">Home</router-link>
      <div class="separator">|</div>
      <router-link to="/faq">FAQ</router-link>
    </nav>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed, ref } from 'vue';
import { headerGreetings } from '@/common/content/text/commonFrases';
import store from '@/store';

export default defineComponent({
  name: 'SiteHeader',
  emits: ["downloadNext"],
  setup(props, { emit }) {
    const isMobile = computed(() => store.getters.getBreakpoints.mobile);
    const navigationVisible = ref(false);
    const burgerMenuClicked = () => navigationVisible.value = !navigationVisible.value;
    let previousSrollPos = 0;
    window.onscroll = () => {
      const currentScrollPos = window.pageYOffset;
      if (currentScrollPos > previousSrollPos) {
        document.getElementById("header")!.style.top = "-100px";
        previousSrollPos = currentScrollPos;
      }
      else {
        document.getElementById("header")!.style.top = "0";
        previousSrollPos = currentScrollPos;
      }
      if (currentScrollPos > 100) emit("downloadNext");
    };

    return {
      isMobile,
      navigationVisible,
      burgerMenuClicked,
      headerGreetings
    };
  }
});
</script>
<style lang="scss" scoped>
.header {
  color: $header-text-color;
  position: fixed;
  transition: all ease 0.3s;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: $header-text-color;
  font-size: 30px;
  width: 100%;
  height: 100px;
  background-color: $header-background;
  border-radius: 0px 0px 30px 30px;
  border-bottom: 3px solid $header-text-color;
  padding: 20px;
  z-index: 100;

  @include breakpoint-tablet {
    height: 70px;
  }

  @include breakpoint-mobile {
    flex-direction: column;
    width: 100vw;
    height: fit-content;
  }
}

.navigation {
  color: $header-text-color;
  display: flex;
  flex-wrap: nowrap;
  gap: 10px;
  width: fit-content;

  @include breakpoint-mobile() {
    text-align: center;
    display: flex;
    flex-direction: column;
    gap: 10px;
    font-size: 25px;
  }

}

.separator {
  @include breakpoint-mobile() {
    display: none;
  }
}

.greetings-wrapper {
  display: flex;
  flex-wrap: nowrap;
  justify-content: space-between;
  align-items: center;
  width: 100%;
}

.header-greetings {
  font-size: 24px;
  font-weight: 500;
  width: 100%;
  height: fit-content;
  text-align: left;
}

.burger {
  width: 19.37px;
  height: 14.38px;
  display: none;

  @include breakpoint-mobile() {
    display: block;
  }
}
</style>