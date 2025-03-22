import { useState, useEffect } from "react";
import axios from "axios";
import PostForm from "./PostForm";
import PostList from "./PostList";

const Posts = () => {
  const [posts, setPosts] = useState([]);

  // Fetch posts when the component mounts
  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    try {
      const response = await axios.get("http://localhost:5000/posts");
      setPosts(response.data);
    } catch (error) {
      console.error("Error fetching posts:", error);
    }
  };

  // Function to update posts when a new one is added
  const handlePostAdded = (newPost) => {
    setPosts([newPost, ...posts]);
  };

  return (
    <div className="container mx-auto p-6">
      <h2 className="text-2xl font-bold text-center mb-6">Post Your Ads</h2>
      <PostForm onPostAdded={handlePostAdded} />
      <PostList posts={posts} />
    </div>
  );
};

export default Posts;


// import { useState, useEffect } from "react";
// import { Routes, Route, useNavigate } from "react-router-dom";
// import axios from "axios";
// import PostForm from "./PostForm";
// import PostList from "./PostList";

// const Posts = () => {
//   const [posts, setPosts] = useState([]);
//   const navigate = useNavigate(); // Hook for navigation

//   // Fetch posts when the component mounts
//   useEffect(() => {
//     fetchPosts();
//   }, []);

//   const fetchPosts = async () => {
//     try {
//       const response = await axios.get("http://localhost:5000/posts");
//       setPosts(response.data);
//     } catch (error) {
//       console.error("Error fetching posts:", error);
//     }
//   };

//   // Function to update posts when a new one is added
//   const handlePostAdded = (newPost) => {
//     setPosts([newPost, ...posts]);
//     navigate("/post"); // Redirect back to post list after submission
//   };

//   return (
//     <div className="container mx-auto p-6">
//       <h2 className="text-2xl font-bold text-center mb-6">Post Your Ads</h2>

//       <Routes>
//         {/* Default Route - Show Post List */}
//         <Route
//           path="/"
//           element={
//             <>
//               <button
//                 onClick={() => navigate("/post/post-ad")}
//                 className="bg-blue-600 text-white px-4 py-2 rounded mb-4"
//               >
//                 Go to Post Ad
//               </button>
//               <PostList posts={posts} />
//             </>
//           }
//         />

//         {/* Route to show PostForm */}
//         <Route path="post-ad" element={<PostForm onPostAdded={handlePostAdded} />} />
//       </Routes>
//     </div>
//   );
// };

// export default Posts;

