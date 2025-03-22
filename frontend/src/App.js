


// // 999999


// import { useState, useEffect } from "react";
// import { Routes, Route } from "react-router-dom";
// import axios from "axios";
// import Home from "./views/Home";
// import AllCards from "./views/AllCards";
// import ResidentialRentals from "./pages/ResidentialRentals";
// import NotFound from "./views/Not-found";
// import PostAd from "./components/PostAd";
// import PostForm from "./Post/PostForm";
// import PostList from "./Post/PostList";
// import ResidentialRentalList from "./pages/ResidentialRentalList";

// const App = () => {
//   const [posts, setPosts] = useState([]);

//   // Fetch posts from backend when the component mounts
//   useEffect(() => {
//     fetchPosts();
//   }, []);

//   const fetchPosts = async () => {
//     try {
//       const response = await axios.get("http://localhost:5000/posts");
//       setPosts(response.data); // Store fetched posts in state
//     } catch (error) {
//       console.error("Error fetching posts:", error);
//     }
//   };

//   // Function to update posts when a new one is added
//   const handlePostAdded = (newPost) => {
//     setPosts([newPost, ...posts]); // Add new post to the beginning of the list
//   };

//   return (
//     <div className="container mx-auto p-6">
//       <h1 className="text-3xl font-bold text-center mb-6">Post App</h1>

//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/post-ad" element={<PostAd />} />
//         <Route path="/post-ad/post1" element={<PostForm onPostAdded={handlePostAdded} />} />
//         <Route path="/post-ad/post2" element={<PostList posts={posts} />} />
//         <Route path="/all-cards" element={<AllCards />} />
//         <Route path="/real-estate/residential-rentals" element={<ResidentialRentals />} />
//         <Route path="/real-estate/residential-rentals" element={<ResidentialRentalList posts={posts} />} />
//         <Route path="*" element={<NotFound />} />
//       </Routes>
// {/* 
//       Display PostForm and PostList on the homepage */}
//       {/* <PostForm onPostAdded={handlePostAdded} /> */}
//       <PostList posts={posts} />
//       <ResidentialRentalList posts={posts}/>
//     </div>
//   );
// };

// export default App;






// 999999


import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import axios from "axios";
import Home from "./views/Home";
import AllCards from "./views/AllCards";
import ResidentialRentals from "./pages/ResidentialRentals";
import NotFound from "./views/Not-found";
import PostAd from "./components/PostAd";
import PostForm from "./Post/PostForm";
import PostList from "./Post/PostList";
import ResidentialRentalList from "./pages/ResidentialRentalList";
import CategoryPosts from "./pages/CategoryPosts";

const App = () => {
  const [posts, setPosts] = useState([]);

  // Fetch posts from backend when the component mounts
  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    try {
      const response = await axios.get("http://localhost:5000/posts");
      setPosts(response.data); // Store fetched posts in state
    } catch (error) {
      console.error("Error fetching posts:", error);
    }
  };

  // Function to update posts when a new one is added
  const handlePostAdded = (newPost) => {
    setPosts([newPost, ...posts]); // Add new post to the beginning of the list
  };

  return (
    <div className="container mx-auto p-6">

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/post-ad" element={<PostAd />} />
        <Route path="/post-ad/post1" element={<PostForm onPostAdded={handlePostAdded} />} />
        <Route path="/post-ad/post2" element={<PostList posts={posts} />} />
        <Route path="/all-cards" element={<AllCards />} />
        <Route path="/create" element={<ResidentialRentalList />} />
        <Route path="/real-estate/:category" element={<CategoryPosts />} />
        <Route path="/real-estate/ALL" element={<ResidentialRentals />} />
        <Route path="*" element={<NotFound />} />
      </Routes>

    </div>
  );
};

export default App;

