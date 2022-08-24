import { createStore } from 'vuex'

import postsModule from './modules/posts/index'
import authorsModule from './modules/authors/index'

const store = createStore({
  modules: {
    posts: postsModule,
    authors: authorsModule
  },
})

export default store;