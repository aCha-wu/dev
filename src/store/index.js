import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    name: 'abb'
  },
  mutations: {
    changea(state) {
      state.name = 'add';
    }
  },
  actions: {},
  modules: {}
});
