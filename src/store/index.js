import { createStore } from 'vuex'

import postsModule from './modules/posts/index'
import authorsModule from './modules/authors/index'
import authModule from './modules/auth/index'

const store = createStore({
  modules: {
    posts: postsModule,
    authors: authorsModule,
    auth: authModule
  },
})

export default store;