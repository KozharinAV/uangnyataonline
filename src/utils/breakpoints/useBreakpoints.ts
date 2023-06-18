import { computed } from 'vue'
import store from "@/store"

const { breakpointModule } = store.state.windowBreakpoints;

/**
 * Composition function that can return a reactive display breakpoint information.
 *
 * Example of using:
 * <template>
 *    <div v-if="breakpointMobile">Mobile Only</div>
 *    <div v-if="breakpointTablet">Tablet Only</div>
 * </template>
 *
 * <script lang="ts">
 *   export default defineComponent({
 *        name: 'AdaptiveComponent',
 *        setup() {
 *          return {
 *            ...useBreakpoints();
 *          }
 *        } 
 *     });
 * </script>
 */

const useBreakpoints = () => {
  console.log(breakpointModule)
  const breakpoints = computed(() => breakpointModule.breakpoints);
  const breakpointMobile = computed(() => breakpoints.value.mobile);
  const breakpointTablet = computed(() => breakpoints.value.tablet);
  const breakpointDesktop = computed(() => breakpoints.value.desktop);

  return {
    breakpointMobile,
    breakpointTablet,
    breakpointDesktop
  };
};

export default useBreakpoints
