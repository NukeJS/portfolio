import { GetterTree, ActionTree, MutationTree } from "vuex";

export const state = () => ({
  navigationDrawer: false
});

export type RootState = ReturnType<typeof state>;

export const mutations: MutationTree<RootState> = {
  SET_NAVIGATION_DRAWER(state, payload: boolean) {
    state.navigationDrawer = payload;
  }
};

export const actions: ActionTree<RootState, RootState> = {
  setNavigationDrawer({ commit }, payload: boolean) {
    commit("SET_NAVIGATION_DRAWER", payload);
  }
};

export const getters: GetterTree<RootState, RootState> = {
  navigationDrawer: state => state.navigationDrawer
};
