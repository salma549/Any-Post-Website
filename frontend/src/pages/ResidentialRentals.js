





// import { useState } from "react";
// import axios from "axios";
// import { toast } from "react-toastify";
// import "./styles.css"; // Import the CSS file

// const ResidentialRentals = ({ onPostAdded }) => {
//   const [formData, setFormData] = useState({
//     title: "",
//     description: "",
//     image: null,
//   });

//   const [showModal, setShowModal] = useState(false);

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleFileChange = (e) => {
//     setFormData({ ...formData, image: e.target.files[0] });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const data = new FormData();
//     data.append("title", formData.title);
//     data.append("description", formData.description);
//     data.append("image", formData.image);

//     try {
//       const response = await axios.post("http://localhost:5000/real-estate/residential-rentals", data);
//       toast.success("Post added successfully!");
//       onPostAdded(response.data);
//       setShowModal(true); // Show the success modal
//       setFormData({ title: "", description: "", image: null });
//     } catch (error) {
//       console.error(error);
//       toast.error("Failed to add post");
//     }
//   };

//   return (
//     <>
//       <form onSubmit={handleSubmit} className="post-form">
//         <h2>Create a Post</h2>
//         <input
//           type="text"
//           name="title"
//           placeholder="Title"
//           value={formData.title}
//           onChange={handleChange}
//           required
//         />
//         <textarea
//           name="description"
//           placeholder="Description"
//           value={formData.description}
//           onChange={handleChange}
//           required
//         />
//         <input type="file" onChange={handleFileChange} required />
//         <button type="submit">Add Post</button>
//       </form>

//       {/* Success Modal */}
//       {showModal && (
//         <div className="modal">
//           <div className="modal-content">
//             <h3>Post Added Successfully!</h3>
//             <button onClick={() => setShowModal(false)}>Close</button>
//           </div>
//         </div>
//       )}
//     </>
//   );
// };

// export default ResidentialRentals;



// import { Link } from "react-router-dom";

// function ResidentialRentals() {
//   return (
//     <div className="container">
//       <h1>Real Estate Listings</h1>
//       <Link to="/create">Create New Post</Link>
//       <h2>Categories</h2>
//       <ul>
//         <li><Link to="/real-estate/residential-rentals">Residential Rentals</Link></li>
//         <li><Link to="/real-estate/commercial-properties">Commercial Properties</Link></li>
//         <li><Link to="/real-estate/buy-sell-homes">Buy/Sell Homes</Link></li>
//         <li><Link to="/real-estate/land-plots">Land/Plots</Link></li>
//         <li><Link to="/real-estate/shared-accommodation">Shared Accommodation</Link></li>
//       </ul>
//     </div>
//   );
// }

// export default ResidentialRentals;


// import { Link } from "react-router-dom";
// import "./styles.css"; // Import your styles

// function HomePage() {
//   return (
//     <div className="container">
//       <h1>Real Estate Listings</h1>
//       <Link to="/create" className="create-btn">Create New Post</Link>

//       <h2>Categories</h2>
//       <ul className="category-list">
//       <li><Link to="/real-estate/ALL">ALL</Link></li>
//         <li><Link to="/real-estate/residential-rentals">Residential Rentals</Link></li>
//         <li><Link to="/real-estate/commercial-properties">Commercial Properties</Link></li>
//         <li><Link to="/real-estate/buy-sell-homes">Buy/Sell Homes</Link></li>
//         <li><Link to="/real-estate/land-plots">Land/Plots</Link></li>
//         <li><Link to="/real-estate/shared-accommodation">Shared Accommodation</Link></li>
//       </ul>
//     </div>
//   );
// }

// export default HomePage;

import { Link } from "react-router-dom";
import Navbar8 from "../components/Navbar8";

function HomePage() {
  return (
    <>
      {/* Navbar should be full width and visible clearly */}
      <div style={styles.navbarWrapper}>
        <Navbar8 />
      </div>

      {/* Page Content */}
      <div style={styles.container}>
        <h1 style={styles.heading}>Real Estate Listings</h1>
        <Link to="/create" style={styles.createBtn}>Create New Post</Link>

        <h2 style={styles.subheading}>Categories</h2>
        <ul style={styles.categoryList}>
          <li style={styles.categoryItem}><Link to="/real-estate/ALL" style={styles.categoryLink}>ALL</Link></li>
          <li style={styles.categoryItem}><Link to="/real-estate/residential-rentals" style={styles.categoryLink}>Residential Rentals</Link></li>
          <li style={styles.categoryItem}><Link to="/real-estate/commercial-properties" style={styles.categoryLink}>Commercial Properties</Link></li>
          <li style={styles.categoryItem}><Link to="/real-estate/buy-sell-homes" style={styles.categoryLink}>Buy/Sell Homes</Link></li>
          <li style={styles.categoryItem}><Link to="/real-estate/land-plots" style={styles.categoryLink}>Land/Plots</Link></li>
          <li style={styles.categoryItem}><Link to="/real-estate/shared-accommodation" style={styles.categoryLink}>Shared Accommodation</Link></li>
        </ul>
      </div>
    </>
  );
}

const styles = {
  navbarWrapper: {
    width: "100%",
    position: "relative",
    backgroundColor: "#fff",
    padding: "0 0",
    boxShadow: "0px 2px 10px rgba(0, 0, 0, 0.1)", // Adds slight shadow for visibility
    zIndex: 1000,
  },
  container: {
    maxWidth: "1200px", // Increased width for better layout
    margin: "20px auto",
    textAlign: "center",
    padding: "20px",
    fontFamily: "Arial, sans-serif",
    paddingLeft: "20px",  // Left padding
    paddingRight: "20px", // Right padding
  },
  heading: {
    fontSize: "28px",
    fontWeight: "bold",
    marginBottom: "15px",
    color: "#333",
  },
  subheading: {
    fontSize: "22px",
    margin: "20px 0",
    color: "#444",
  },
  createBtn: {
    display: "inline-block",
    padding: "10px 20px",
    margin: "15px 0",
    backgroundColor: "#D35400", // Dark Orange
    color: "white",
    textDecoration: "none",
    fontSize: "16px",
    borderRadius: "5px",
    transition: "background 0.3s",
  },
  categoryList: {
    display: "flex", // Flexbox for side-by-side layout
    flexWrap: "wrap", // Ensures responsiveness
    justifyContent: "center", // Center aligns the cards
    gap: "20px",
    listStyle: "none",
    padding: "0",
    marginTop: "10px",
  },
  categoryItem: {
    background: "white",
    padding: "15px",
    borderRadius: "10px",
    boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
    textAlign: "center",
    width: "250px", // Set a fixed width for consistency
    transition: "transform 0.3s ease-in-out",
  },
  categoryLink: {
    textDecoration: "none",
    fontSize: "18px",
    fontWeight: "bold",
    color: "#D35400",
    display: "block",
    padding: "10px",
  },
};

// Hover effect for category items
styles.categoryItem[':hover'] = {
  transform: "translateY(-5px)",
};

styles.createBtn[':hover'] = {
  backgroundColor: "#0056b3",
};

styles.categoryLink[':hover'] = {
  color: "#007bff",
};

export default HomePage;
