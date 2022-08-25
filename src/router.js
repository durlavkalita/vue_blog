import { createRouter, createWebHashHistory } from 'vue-router';

import PostsList from './pages/posts/PostsList.vue'
import PostDetail from './pages/posts/PostDetail.vue'
import PostCreate from './pages/posts/PostCreate.vue'
import PostUpdate from './pages/posts/PostUpdate.vue'
import AuthorsList from './pages/authors/AuthorsList.vue'
import AuthorDetail from './pages/authors/AuthorDetail.vue'
import AuthorRegister from './pages/authors/AuthorRegister.vue'
import UserAuth from './pages/auth/UserAuth.vue'
import NotFound from './pages/NotFound.vue'

const router = createRouter({
    history: createWebHashHistory(),
    routes: [
        { path: '/', redirect: '/posts' },
        { path: '/posts', component: PostsList },
        {
            path: '/posts/:id',
            component: PostDetail,
            props: true,
            children: [
                { path: 'update', component: PostUpdate },
            ]
        },
        { path: '/authors', component: AuthorsList },
        { path: '/authors/register', component: AuthorRegister },
        {
            path: '/authors/:id',
            component: AuthorDetail,
            props: true,
            children: [
                { path: 'create', component: PostCreate },
            ]
        },
        { path: '/auth', component: UserAuth },
        { path: '/:notFound(.*)', component: NotFound },
    ],
});

export default router;