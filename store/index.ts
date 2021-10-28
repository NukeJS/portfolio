import { MutationTree, ActionTree, GetterTree } from 'vuex'

export const state = () => ({
  projects: null,
  navigationDrawer: false,
})

type RootState = ReturnType<typeof state>

export const mutations: MutationTree<RootState> = {
  SET_PROJECTS(state, payload) {
    state.projects = payload
  },
  SET_NAVIGATION_DRAWER(state, payload: boolean) {
    state.navigationDrawer = payload
  },
}

export const actions: ActionTree<RootState, RootState> = {
  async fetchProjects({ commit }) {
    const projects = await this.$axios.$get('/v1/projects')
    commit('SET_PROJECTS', projects)
  },
  setNavigationDrawer({ commit }, payload: boolean) {
    commit('SET_NAVIGATION_DRAWER', payload)
  },
}

export const getters: GetterTree<RootState, RootState> = {
  projects: (state) => state.projects,
  navigationDrawer: (state) => state.navigationDrawer,
}
