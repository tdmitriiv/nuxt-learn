import Vuex from 'vuex'
import postsModule from './modules/posts';

const createStore = () => {
  return new Vuex.Store({
    namespaced: true,
    modules: {
      posts: postsModule
    }
  })
};

export default createStore
