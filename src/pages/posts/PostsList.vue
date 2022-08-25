<template>
    <div class="relative max-w-lg mx-auto divide-y-2 divide-gray-200 lg:max-w-5xl mt-8">
        <div>
            <h2 class="text-3xl tracking-tight font-extrabold text-gray-900 sm:text-4xl">
            Recent publications
            </h2>
            <p class="mt-3 text-xl text-gray-500 sm:mt-4">
            Nullam risus blandit ac aliquam justo ipsum. Quam mauris volutpat massa dictumst amet. Sapien tortor lacus arcu.
            </p>
            <div>
                <base-button link to="/register">Create a post</base-button>
            </div>
        </div>
        <div class="mt-12 grid gap-16 pt-12">
        
            <PostItemVue
            v-for="post in allPosts" 
            :key="post.id" 
            :id="post.id" 
            :content="post.content" 
            :title="post.title" 
            :author="post.author"
            ></PostItemVue>
        
        </div>
    </div>
</template>

<script>
import PostItemVue from '../../components/posts/PostItem.vue';
export default {
    components: {
        PostItemVue
    },  
    computed: {
        allPosts() {
            const posts = this.$store.getters['posts/posts'];
            return posts;
        }
    }
}
</script>