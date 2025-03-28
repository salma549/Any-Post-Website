


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
import ResidentialRentals from "./pages/Rentals/ResidentialRentals"
import NotFound from "./views/Not-found";
import PostAd from "./components/PostAd";
import PostForm from "./Post/PostForm";
import ResidentialRentalList from "./pages/Rentals/ResidentialRentalList"
import PostList from "./Post/PostList";
import CategoryPosts from "./pages/Rentals/CategoryPosts";
import VehiclesList from "./pages/Vehicles/VehiclesList"
import CategoryPosts1 from "./pages/Vehicles/CategoryPosts"
import VehiclesFile from "./pages/Vehicles/VehiclesFile"
import CategoryPosts2 from "./pages/Jobs/CategoryPosts";
import JobsFile from "./pages/Jobs/JobsFile"
import JobsLists from "./pages/Jobs/JobsList"
import ServicesList from "./pages/Services/SevicesList"
import ServicesFile from "./pages/Services/ServicesFile"
import CategoryPosts3 from "./pages/Services/CategoryList";
import ElectronicsFile from "./pages/Electronics/ElectronicsFile"
import ElectronicsList from "./pages/Electronics/ElectronicsLists"
import CategoryPosts4 from "./pages/Electronics/CategoryPosts";
import FashionFiles from "./pages/Fashion/FashionFiles";
import FashionList from "./pages/Fashion/FashionList";
import CategoryPosts5 from "./pages/Fashion/CategoryPosts";
import HomeFiles from "./pages/Home/HomeFiles"
import HomeLists from "./pages/Home/HomeLists"
import CategoryPosts6 from "./pages/Home/CategoryPosts";
import PetsFiles from "./pages/Pets/PetsFiles";
import PetsLists from "./pages/Pets/PetsLists";
import CategoryPosts7 from "./pages/Pets/CategoryPosts";
import HobbiesFiles from "./pages/Hobbies/HobbiesFiles";
import HobbiesLists from "./pages/Hobbies/HobbiesLists";
import CategoryPosts8 from "./pages/Hobbies/CategoryPosts";
import HealthFiles from "./pages/Health/HealthFiles";
import HealthLists from "./pages/Health/HealthLists";
import CategoryPosts9 from "./pages/Health/CategoryPosts";
import KidsFiles from "./pages/Kids/KidsFiles";
import KidsLists from "./pages/Kids/KidsLists";
import CategoryPosts10 from "./pages/Kids/CategoryPosts";
import CategoryPosts11 from "./pages/Freelance/CategoryPosts";
import FreelanceFiles from "./pages/Freelance/FreelanceFiles";
import FreelanceLists from "./pages/Freelance/FreelanceLists"




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

        <Route path="/create1" element={<VehiclesList/>}/>
        <Route path="/vehicles/:category" element={<CategoryPosts1 />} />
        <Route path="/Vehicles/ALL" element={<VehiclesFile />} />

        <Route path="/create2" element={<JobsLists/>}/>
        <Route path="/jobs/:category" element={<CategoryPosts2 />} />
        <Route path="/jobs/ALL" element={<JobsFile />} />

        <Route path="/create3" element={<ServicesList/>}/>
        <Route path="/services/:category" element={<CategoryPosts3 />} />
        <Route path="/services/ALL" element={<ServicesFile />} />

        <Route path="/create4" element={<ElectronicsList/>}/>
        <Route path="/electronics/:category" element={<CategoryPosts4 />} />
        <Route path="/electronics/ALL" element={<ElectronicsFile />} />



        <Route path="/create5" element={<FashionList/>}/>
        <Route path="/fashion/:category" element={<CategoryPosts5 />} />
        <Route path="/fashion/ALL" element={<FashionFiles />} />


       
        <Route path="/create6" element={<HomeLists/>}/>
        <Route path="/home-furniture/:category" element={<CategoryPosts6 />} />
        <Route path="/home-furniture/ALL" element={<HomeFiles />} />


        
        <Route path="/create7" element={<PetsLists/>}/>
        <Route path="/pets/:category" element={<CategoryPosts7 />} />
        <Route path="/pets/ALL" element={<PetsFiles />} />


        <Route path="/create8" element={<HobbiesLists/>}/>
        <Route path="/hobbies/:category" element={<CategoryPosts8 />} />
        <Route path="/hobbies/ALL" element={<HobbiesFiles />} />


        <Route path="/create9" element={<HealthLists/>}/>
        <Route path="/health-beauty/:category" element={<CategoryPosts9 />} />
        <Route path="/health-beauty/ALL" element={<HealthFiles />} />


        <Route path="/create10" element={<KidsLists/>}/>
        <Route path="/baby-kids/:category" element={<CategoryPosts10 />} />
        <Route path="/baby-kids/ALL" element={<KidsFiles />} />


        <Route path="/create11" element={<FreelanceLists/>}/>
        <Route path="/freelance/:category" element={<CategoryPosts11 />} />
        <Route path="/freelance/ALL" element={<FreelanceFiles />} />






        


        

      




       
      </Routes>

    </div>
  );
};

export default App;

