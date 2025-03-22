


import "./styles.css"; // Import the CSS file

  const PostList = ({ posts }) => {
  return (
    <div className="post-list">
      {posts.length === 0 ? (
        <p className="no-posts">No posts available. Add a new post!</p>
      ) : (
        <div className="post-grid">
          {posts.map((post) => (
            <div key={post._id} className="post-card">
              {post.image && (
                <img
                  src={`http://localhost:5000${post.image}`}
                  alt="Post"
                  className="post-image"
                />
              )}
              <div className="post-content">
              <p className="post-date">
                  Posted on: {new Date(post.createdAt).toLocaleDateString()}
                </p>
                <h2>{post.title}</h2>
                <p>{post.description}</p>
              
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default PostList;

