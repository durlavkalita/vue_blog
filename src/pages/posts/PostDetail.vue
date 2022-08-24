<template>
  <div>
    <div class="relative px-4 sm:px-6 lg:px-16 lg:ml-32 lg:mr-32">
      <div class="text-lg max-w-prose mx-auto mt-8">
        <h1>
          <span class="mt-2 block text-3xl text-center leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">{{title}}</span>
        </h1>
        <!-- <p class="mt-8 text-xl text-gray-500 leading-8">Aliquet nec orci mattis amet quisque ullamcorper neque, nibh sem. At arcu, sit dui mi, nibh dui, diam eget aliquam. Quisque id at vitae feugiat egestas ac. Diam nulla orci at in viverra scelerisque eget. Eleifend egestas fringilla sapien.</p> -->
      </div>
      <div class="mt-6 prose prose-indigo prose-lg text-gray-500 mx-auto">
        <p>{{content}}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['id'],
  data() {
    return {
      post: null
    }
  },
  computed: {
    title() {
      return this.post.title;
    },
    content() {
      return this.post.content;
    }
  },  
  created() {
    this.post = this.$store.getters['posts/posts'].find(post=>post.id == this.id);
  }
}
</script>