import Vuex from 'vuex'
import { loadPosts } from '@/api/posts'

const createStore = () => {
  return new Vuex.Store({
    state: {
      loadedPosts: []
    },
    mutations: {
      setPosts (state, posts) {
        state.loadedPosts = posts
      }
    },
    actions: {
      // Инициализация начального значения хранилища
      nuxtServerInit (vuexContext, context) {
        return loadPosts(context)
          .then(data => {
            const postsArray = []
            for (const key in data) {
              postsArray.push({
                'id': key,
                ...data[key]
              })
            }
            vuexContext.commit('setPosts', postsArray)
          })
          .catch(error => {
            context.error(error)
          })
      },
      setPosts (context, posts) {
        context.commit('setPosts', posts)
      }
    },
    getters: {
      loadedPosts (state) {
        return state.loadedPosts
      }
    }
  })
};

export default createStore
