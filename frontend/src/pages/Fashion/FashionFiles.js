



import { Link } from "react-router-dom";
import Navbar8 from "../../components/Navbar8";

function FashionFiles() {
  return (
    <>
      {/* Navbar should be full width and visible clearly */}
      <div style={styles.navbarWrapper}>
        <Navbar8 />
      </div>

      {/* Page Content */}
      <div style={styles.container}>
        <h1 style={styles.heading}>Fashion Listings</h1>
        <Link to="/create5" style={styles.createBtn}>Create New Post</Link>

        <h2 style={styles.subheading}>Categories</h2>
        <ul style={styles.categoryList}>
        <li style={styles.categoryItem}><Link to="/ALL" style={styles.categoryLink}>ALL</Link></li>

          <li style={styles.categoryItem}><Link to="/fashion/clothing" style={styles.categoryLink}>Clothing (Men, Women, Kids)</Link></li>
          <li style={styles.categoryItem}><Link to="/fashion/shoes" style={styles.categoryLink}>hoes & Footwear</Link></li>
          <li style={styles.categoryItem}><Link to="/fashion/jewelry" style={styles.categoryLink}>Jewelry & Watches</Link></li>
          <li style={styles.categoryItem}><Link to="/fashion/handbags" style={styles.categoryLink}>Handbags & Wallets</Link></li>
          <li style={styles.categoryItem}><Link to="/fashion/sunglasses" style={styles.categoryLink}>Sunglasses & Eyewear</Link></li>
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

export default FashionFiles;

