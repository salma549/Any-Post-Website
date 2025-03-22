// import { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";
// import axios from "axios";

// function CategoryPosts() {
//   const { category } = useParams();
//   const [posts, setPosts] = useState([]);

//   useEffect(() => {
//     axios.get(`http://localhost:5000/real-estate/${category}`).then((res) => setPosts(res.data));
//   }, [category]);

//   return (
//     <div>
//       <h1>{category.replace("-", " ")}</h1>
//       {posts.map((post) => (
//         <div key={post._id}>
//           <h2>{post.title}</h2>
//           <p>{post.description}</p>
//           <img src={`http://localhost:5000/${post.image}`} alt={post.title} />
//           <p>Price: ${post.price}</p>
//         </div>
//       ))}
//     </div>
//   );
// }

// export default CategoryPosts;




// import { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";
// import axios from "axios";
// import Navbar8 from "../components/Navbar8";

// function CategoryPosts() {
//   const { category } = useParams();
//   const [posts, setPosts] = useState([]);

//   useEffect(() => {
//     axios.get(`http://localhost:5000/real-estate/${category}`).then((res) => setPosts(res.data));
//   }, [category]);

//   return (
//     <div className="container">
//       <Navbar8/>
      
//       <h1 className="category-title">{category.replace("-", " ")}</h1>
//       <div className="posts-grid">
//         {posts.map((post) => (
//           <div className="post-card" key={post._id}>
//             <img className="post-image" src={`http://localhost:5000/${post.image}`} alt={post.title} />
//             <div className="post-content">
//             <p className="post-date">
//                   Posted on: {new Date(post.createdAt).toLocaleDateString()}
//                 </p>
//               <h2>{post.title}</h2>
//               <p>{post.description}</p>
//               <p className="price">Price: ${post.price}</p>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default CategoryPosts;

// // Add CSS styling
// const styles = `
// .container {
//   padding: 30px;
//   text-align: center;
//   background-color: #f9f9f9;
// }

// .category-title {
//   font-size: 2.5rem;
//   font-weight: bold;
//   margin-bottom: 30px;
//   text-transform: capitalize;
//   color: #333;
// }

// .posts-grid {
//   display: grid;
//   grid-template-columns: repeat(4, 1fr);
//   gap: 25px;
//   justify-content: center;
//   padding: 20px;
// }

// .post-card {
//   background: white;
//   border-radius: 30px 0px 30px 30px;
//   box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
//   transition: transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out;
//   overflow: hidden;
//   max-width: 300px;
//   margin: auto;
// }

// .post-card:hover {
//   transform: translateY(-10px);
//   box-shadow: 0 15px 30px rgba(0, 0, 0, 0.2);
// }

// .post-image {
//   width: 100%;
//   height: 250px;
//   object-fit: cover;
//   border-radius: 30px 0px 0px 0px;
// }

// .post-content {
//   padding: 20px;
// }

// .post-title {
//   font-size: 1.6rem;
//   font-weight: bold;
//   margin-bottom: 10px;
//   color: #222;
// }

// .post-description {
//   font-size: 1rem;
//   color: #555;
//   margin-bottom: 10px;
// }

// .price {
//   font-weight: bold;
//   color: #27ae60;
//   font-size: 1.4rem;
// }

// .price span {
//   color: #000;
//   font-weight: bold;
// }
// `;

// // Inject styles into the document
// const styleSheet = document.createElement("style");
// styleSheet.type = "text/css";
// styleSheet.innerText = styles;
// document.head.appendChild(styleSheet);




import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Navbar8 from "../components/Navbar8";

function CategoryPosts() {
  const { category } = useParams();
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios.get(`http://localhost:5000/real-estate/${category}`).then((res) => setPosts(res.data));
  }, [category]);

  return (
    <div>
      {/* Sticky Navbar */}
      <div className="navbar-container">
        <Navbar8 />
      </div>

      <div className="container">
        <h1 className="category-title">{category.replace("-", " ")}</h1>
        <div className="posts-grid">
          {posts.map((post) => (
            <div className="post-card" key={post._id}>
              <img className="post-image" src={`http://localhost:5000/${post.image}`} alt={post.title} />
              <div className="post-content">
                <p className="post-date">Posted on: {new Date(post.createdAt).toLocaleDateString()}</p>
                <h2 className="post-title">{post.title}</h2>
                <p className="post-description">{post.description}</p>
                <p className="price">Price: <span>${post.price}</span></p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default CategoryPosts;

// Add CSS styling
const styles = `

/* Sticky Navbar */
.navbar-container {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background-color: white;
  z-index: 1000;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

/* Main Container */
.container {
  padding: 100px 50px 30px; /* Avoid overlapping navbar */
  text-align: center;
  background-color: #f9f9f9;
  max-width: 1400px;
  margin: auto;
}

/* Category Title */
.category-title {
  font-size: 2.5rem;
  font-weight: bold;
  margin-bottom: 30px;
  text-transform: capitalize;
  color: #333;
}

/* Post Grid - 4 Cards per Row */
.posts-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr); /* 4 cards per row */
  gap: 30px;
  justify-content: center;
  padding: 20px;
}

/* Post Card */
.post-card {
  background: white;
  border-radius: 30px 0px 30px 30px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out;
  overflow: hidden;
}

.post-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 15px 30px rgba(0, 0, 0, 0.2);
}

/* Post Image */
.post-image {
  width: 100%;
  height: 280px;
  object-fit: cover;
  border-radius: 30px 0px 0px 0px;
}

/* Post Content */
.post-content {
  padding: 20px;
}

/* Post Title */
.post-title {
  font-size: 1.6rem;
  font-weight: bold;
  margin-bottom: 10px;
  color: #222;
}

/* Post Description */
.post-description {
  font-size: 1rem;
  color: #555;
  margin-bottom: 10px;
}

/* Price */
.price {
  font-weight: bold;
  color: #27ae60;
  font-size: 1.4rem;
}

.price span {
  color: #000;
  font-weight: bold;
}

/* Responsive Design */
@media (max-width: 1200px) {
  .posts-grid {
    grid-template-columns: repeat(3, 1fr); /* 3 cards per row on smaller screens */
  }
}

@media (max-width: 900px) {
  .posts-grid {
    grid-template-columns: repeat(2, 1fr); /* 2 cards per row on tablets */
  }
}

@media (max-width: 600px) {
  .posts-grid {
    grid-template-columns: repeat(1, 1fr); /* 1 card per row on mobile */
  }
}
`;

// Inject styles into the document
const styleSheet = document.createElement("style");
styleSheet.type = "text/css";
styleSheet.innerText = styles;
document.head.appendChild(styleSheet);
