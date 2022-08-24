import mutations from './mutations'
import getters from './getters'
import actions from './actions'

export default {
  namespaced: true,
  state() {
    return {
      authors: [
        {
          "id": 105,
          "name": "Jane Doe",
          "occupation": "Programmer",
          "image": "https://images.unsplash.com/photo-1502685104226-ee32379fefbe?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=8&amp;w=1024&amp;h=1024&amp;q=80",
          "about": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi semper vitae velit non vulputate. Donec pulvinar accumsan metus. Donec vel eleifend massa. Donec lacinia nunc sit amet est vestibulum, vel pellentesque erat auctor. Quisque orci nisi, suscipit eu lorem sed, vulputate elementum nisl. Lorem ipsum dolor sit amet, consectetur adipiscing elit. In hac habitasse platea dictumst. Mauris tristique mattis cursus.",
        },
        {
          "id": 101,
          "name": "John Doe",
          "occupation": "Writer",
          "image": "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=8&amp;w=1024&amp;h=1024&amp;q=80",
          "about": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi semper vitae velit non vulputate. Donec pulvinar accumsan metus. Donec vel eleifend massa. Donec lacinia nunc sit amet est vestibulum, vel pellentesque erat auctor. Quisque orci nisi, suscipit eu lorem sed, vulputate elementum nisl. Lorem ipsum dolor sit amet, consectetur adipiscing elit. In hac habitasse platea dictumst. Mauris tristique mattis cursus.",
        }
      ]
    }
  },
  mutations,
  getters,
  actions
}