import { createStore } from 'vuex'
// modules

// getters、 actions 、 mutations
import actions from './actions'
import mutations from './mutations'
import getters from './getters'

const Store = createStore({
  modules: {},
  mutations,
  actions,
  getters,
})

export default Store
