export const state = () => ({
  navigationDrawer: false
});

export const mutations = {
  SET_NAVIGATION_DRAWER(state, payload) {
    state.navigationDrawer = payload;
  }
}

export const actions = {
  setNavigationDrawer({ commit }, payload) {
    commit('SET_NAVIGATION_DRAWER', payload);
  }
}

export const getters = {
  navigationDrawer: state => state.navigationDrawer
}