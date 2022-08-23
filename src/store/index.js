import { createStore } from 'vuex'

import postsModule from './modules/posts/index'

const store = createStore({
  modules: {
    posts: postsModule
  },
})

export default store;