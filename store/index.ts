import { MutationTree, ActionTree, GetterTree } from 'vuex'

interface State {
  projects: any[] | null
}

export const state = (): State => ({
  projects: null,
})

type RootState = ReturnType<typeof state>

export const mutations: MutationTree<RootState> = {
  SET_PROJECTS(state, payload) {
    state.projects = payload
  },
}

export const actions: ActionTree<RootState, RootState> = {
  async fetchProjects({ commit }) {
    const projects = await this.$axios.$get('/v1/projects')
    commit('SET_PROJECTS', projects)
  },
}

export const getters: GetterTree<RootState, RootState> = {
  projects: (state) => state.projects,
}
