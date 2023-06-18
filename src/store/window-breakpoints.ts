import { getClientHeight, getClientWidth } from "@/utils/breakpoints/windowSizes";
import { Module } from "vuex"
import { getDefaultBreakpointMap, getUpdatedBreakpointMap } from "@/utils/breakpoints/useBreakpointState"

export const windowBreakpoints: Module<any, any> = {
  state: {
    breakpoints: getDefaultBreakpointMap(),
    height: 0,
    width: 0
  },

  getters: {
    getBreakpoints(state) {
      return state.breakpoints
    },
  },

  mutations: {
    setClientWidth: (state) => {
      state.width = getClientWidth()
    },
    setClientHeight: (state) => {
      state.height = getClientHeight()
    },
    setBreakpoints: (state) => {
      state.breakpoints = getUpdatedBreakpointMap(state.width)
    },
  },

  actions: {
    updateBreakpoints({ commit }) {
      commit("setClientWidth")
      commit("setClientHeight")
      commit("setBreakpoints")
    },

    startWatchBreakpoints({ commit, dispatch }) {
      if (typeof window === 'undefined') return;

      dispatch("updateBreakpoints")
      window.addEventListener('resize', () => dispatch("updateBreakpoints"), { passive: true });

    },
  },
}

export default windowBreakpoints