<template>
    <div>
        <div>
            <a href="#" class="inline-block">
            <span class="inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium bg-indigo-100 text-indigo-800">
                Article
            </span>
            </a>
        </div>
        <router-link :to="postDetailsLink" class="block mt-4">
            <p class="text-xl font-semibold text-gray-900">
            {{title}}
            </p>
            <p class="mt-3 text-base text-gray-500">
            {{content}}
            </p>
        </router-link>
        <div class="mt-6 flex items-center">
            <div class="flex-shrink-0">
            <a href="#">
                <span class="sr-only">{{author}}</span>
                <img class="h-10 w-10 rounded-full" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=2&amp;w=256&amp;h=256&amp;q=80" alt="">
            </a>
            </div>
            <div class="ml-3">
            <p class="text-sm font-medium text-gray-900">
                <a href="#">
                {{author}}
                </a>
            </p>
            <div class="flex space-x-1 text-sm text-gray-500">
                <time datetime="2020-03-16">
                Mar 16, 2020
                </time>
                <span aria-hidden="true">
                ·
                </span>
                <span>
                6 min read
                </span>
            </div>
            </div>
        </div>
    </div>
</template>

<script>

export default {
  props: ['id', 'title', 'content', 'author'],
  computed: {
    postDetailsLink() {
        return '/posts/'+this.id;
    }
  }
}
</script>
