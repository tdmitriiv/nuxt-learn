export const loadPosts = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        { id: '1', title: 'First post', previewText: 'Post 1 preview test', thumbnail: 'https://www.maketecheasier.com/assets/uploads/2019/01/intermediate-tech-feature.jpg' },
        { id: '2', title: 'Second post', previewText: 'Post 2 preview test', thumbnail: 'https://www.maketecheasier.com/assets/uploads/2019/01/intermediate-tech-feature.jpg' },
        { id: '3', title: 'Third post', previewText: 'Post 3 preview test', thumbnail: 'https://www.maketecheasier.com/assets/uploads/2019/01/intermediate-tech-feature.jpg' }
      ])
    }, 1000)
  })
};

export const loadPostSingle = (id = '') => {
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
};
