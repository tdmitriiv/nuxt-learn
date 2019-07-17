import mutations from './mutations'
import actions from './actions'
import getters from './getters'

export default {
  state: {
    loadedPosts: [],
    colors: {
      blue: '#0000ff',
      red: '#ff0000'
    }
  },
  mutations,
  actions,
  getters
}
