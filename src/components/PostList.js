const PostLink = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts")
  const posts = await response.json()
  console.log(posts)
  return (
    <div>
      {posts.map((post) => {
        <div key={post.id}>
          <p>{post.title}</p>
        </div>
      })}
    </div>
  );
}

export default PostLink
