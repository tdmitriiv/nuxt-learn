import { loadPosts, addPost, editPost } from "@/api/posts";

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
  },
  addPost (context, post) {
    const createdPost = {
      ...post,
      updatedDate: new Date()
    };
    return addPost(createdPost)
      .then(result => {
        if (result && result.status === 200) {
          context.commit('addPost', {
            ...createdPost,
            id: result.data.name
          })
        }
        return result
      })
  },
  editPost (context, editedPost) {
    return editPost(editedPost).then(result => {
      if (result && result.status === 200) {
        context.commit('editPost', editedPost)
      }
      return result;
    })
  }
}
