import Post from './Post';

export default function Posts() {
  const posts = [
    {
      id: '1',
      username: 'codewithsahand',
      userImg:
        'https://staticic.skill.com/uploads/users/35031760/user-image-large.jpg',
      img: 'https://images.unsplash.com/photo-1433838552652-f9a46b332c40?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
      caption: 'Thanks for your post',
    },
    {
      id: '2',
      username: 'alotofcode',
      userImg:
        'https://staticic.skill.com/uploads/users/35031760/user-image -large.jpg',
      img: 'https://images.unsplash.com/photo-1454391304352-2bf4678b1a7a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
      caption: 'Thanks for your post',
    },
  ];
  return (
    <div>
      {posts.map((post) => (
        <Post
          key={post.id}
          id={post.id}
          username={post.username}
          userImg={post.profileImg}
          img={post.image}
          caption={post.caption}
        />
      ))}
    </div>
  );
}
