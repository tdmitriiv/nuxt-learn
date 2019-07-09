import { loadPosts } from "@/api/posts";

export default {
  nuxtServerInit (vuexContext, context) {
    return loadPosts(context)
      .then(data => {
        const postsArray = []
        for (const key in data) {
          postsArray.push({
            'id': key,
            ...data[key]
          })
        }
        vuexContext.commit('setPosts', postsArray)
      })
      .catch(error => {
        context.error(error)
      })
  },
  setPosts (context, posts) {
    context.commit('setPosts', posts)
  }
}