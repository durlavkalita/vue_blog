<template>
  <div class="bg-white">
    <div class="mx-auto py-12 px-4 max-w-7xl sm:px-6 lg:px-8 lg:py-24">
      <div class="space-y-12">
        <h2 class="text-3xl font-extrabold tracking-tight sm:text-4xl">Meet our Authors</h2>
        
        <div>
            <base-button v-if='!isAuthor && isLoggedIn' link to="/register">Register as Author</base-button>
        </div>

        <ul class="space-y-12 lg:grid lg:grid-cols-2 lg:items-start lg:gap-x-8 lg:gap-y-12 lg:space-y-0" x-max="1">
          
          <AuthorItemVue
          v-for="author in allAuthors" 
          :key="author.id" 
          :id="author.id" 
          :about="author.about" 
          :name="author.name" 
          :image="author.image"
          :occupation="author.occupation"
          ></AuthorItemVue>
          
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import AuthorItemVue from '../../components/authors/AuthorItem.vue';
export default {
    components: {
        AuthorItemVue
    },  
    computed: {
        allAuthors() {
            const authors = this.$store.getters['authors/authors'];
            return authors;
        },
        isAuthor() {
            return this.$store.getters['coaches/isCoach'];
        },
        isLoggedIn() {
            return this.$store.getters.isAuthenticated;
        }
    }
}
</script>