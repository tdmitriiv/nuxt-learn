import axios from "axios";

export const loadPosts = () => {
  return axios.get(`${process.env.baseUrl}/posts.json`).then(res => res.data);
  /*
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        { id: '1', title: 'First post', previewText: 'Post 1 preview test', thumbnail: 'https://www.maketecheasier.com/assets/uploads/2019/01/intermediate-tech-feature.jpg' },
        { id: '2', title: 'Second post', previewText: 'Post 2 preview test', thumbnail: 'https://www.maketecheasier.com/assets/uploads/2019/01/intermediate-tech-feature.jpg' },
        { id: '3', title: 'Third post', previewText: 'Post 3 preview test', thumbnail: 'https://www.maketecheasier.com/assets/uploads/2019/01/intermediate-tech-feature.jpg' }
      ])
    }, 1000)
  })
  */
};

export const loadPostSingle = (id = "") => {
  return axios
    .get(`${process.env.baseUrl}/posts/${id}.json`)
    .then(res => res.data);
  /*
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        id: '1',
        title: `First post (ID ${id})`,
        previewText: 'Post 1 preview test',
        thumbnail: 'https://www.maketecheasier.com/assets/uploads/2019/01/intermediate-tech-feature.jpg',
        author: 'Dmitry',
        content: 'Some dummy text of post content',
        updatedDate: new Date()
      })
    }, 1000)
  })
  */
};

export const editPost = postData => {
  return axios.put(
    `${process.env.baseUrl}/posts/${postData.id}.json`,
    postData
  );
};

export const createPost = postData => {
  return axios.put(`${process.env.baseUrl}/posts/${id}.json`, postData);
};

export const addPost = postData => {
  return axios.post(`${process.env.baseUrl}/posts.json`, {
    ...postData,
    updatedDate: new Date()
  });
};
