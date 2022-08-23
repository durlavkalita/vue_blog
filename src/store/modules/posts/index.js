import mutations from './mutations'
import getters from './getters'
import actions from './actions'

export default {
  namespaced: true,
  state() {
    return {
      posts: [
        {
          "id": 101,
          "title": "lorem ipsum 101",
          "content": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi semper vitae velit non vulputate. Donec pulvinar accumsan metus. Donec vel eleifend massa. Donec lacinia nunc sit amet est vestibulum, vel pellentesque erat auctor. Quisque orci nisi, suscipit eu lorem sed, vulputate elementum nisl. Lorem ipsum dolor sit amet, consectetur adipiscing elit. In hac habitasse platea dictumst. Mauris tristique mattis cursus.",
          "author": "John Doe"
        },
        {
          "id": 105,
          "title": "lorem ipsum 105",
          "content": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi semper vitae velit non vulputate. Donec pulvinar accumsan metus. Donec vel eleifend massa. Donec lacinia nunc sit amet est vestibulum, vel pellentesque erat auctor. Quisque orci nisi, suscipit eu lorem sed, vulputate elementum nisl. Lorem ipsum dolor sit amet, consectetur adipiscing elit. In hac habitasse platea dictumst. Mauris tristique mattis cursus.",
          "author": "Jane Doe"
        }
      ]
    }
  },
  mutations,
  getters,
  actions
}