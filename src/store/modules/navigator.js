const state = {
  stack: [],
  options: {
      animation: 'slide'
  },
}

const getters = {

}

const actions = {

}

const mutations = {
  push(state, page) {
    // Go to a deeper page
    state.stack.push(page);
  },
  pop(state) {
    if (state.stack.length > 1) {
      state.stack.pop();
    }
  },
  replace(state, page) {
    // Go to a same level page
    state.stack.pop();
    state.stack.push(page);
  },
  reset(state, page) {
    // Clear stack then go to page or bottom of stack
    state.stack = Array.isArray(page) ? page : [page || state.stack[0]];
  },
  options(state, newOptions = {}) {
    // Merge old options with new options.
    // Properties in newOptions will override old options.
    state.options = Object.assign(state.options, newOptions);
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}