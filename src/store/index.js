import Vue from 'vue';
import Vuex from 'vuex';
import navigator from './modules/navigator';

Vue.use(Vuex);

const state = {};

const getters = {};

const actions = {};

const mutations = {};

export default new Vuex.Store({
  modules: {
    navigator,
  },
  state,
  getters,
  actions,
  mutations
});
