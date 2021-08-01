import { createStore } from 'vuex'
import axios from 'axios'

export default createStore({
  state: {
    posts: [] as string[]
  },
  mutations: {
    addPost (state, data) {
      state.posts.push(data)
    }
  },
  actions: {
    async getPost ({ commit, state }, page) {
      // Only hit API if post isn't available in cache
      if (!state.posts[page - 1]) {
        const apiUrl = 'https://jsonplaceholder.typicode.com/posts/'
        const { data } = await axios.get(`${apiUrl}${page}`)
        commit('addPost', data)
        return data
      }
      return state.posts[page - 1]
    }
  },
  modules: {
  }
})
