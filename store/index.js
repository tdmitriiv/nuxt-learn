import Vuex from "vuex";
import postsModule from "./modules/posts";
import authModule from "./modules/auth";

const createStore = () => {
  return new Vuex.Store({
    namespaced: true,
    modules: {
      posts: postsModule,
      auth: authModule
    }
  });
};

export default createStore;
