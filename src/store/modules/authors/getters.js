export default {
  authors(state)  {
    return state.authors;
  },
  isAuthor(_, getters, _2, rootGetters) {
    const authors = getters.authors;
    const userId = rootGetters.userId;
    return authors.some(author=>author.id == userId);
  }
}