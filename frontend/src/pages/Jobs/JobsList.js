



import { useState, useEffect } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import "./styles.css"; // Import CSS for styling

const VechilesList = () => {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    price: "",
    category: "ALL",
    image: null,
  });

  const [posts, setPosts] = useState([]); // State to store posts
  const [showModal, setShowModal] = useState(false);

  // Fetch posts from backend based on selected category
  const fetchPosts = async () => {
    try {
      const response = await axios.get(`http://localhost:5000/vehicles/${formData.category}`);
      setPosts(response.data);
    } catch (error) {
      console.error("Error fetching posts:", error);
    }
  };

  // Fetch posts whenever category changes
  useEffect(() => {
    fetchPosts();
  }, [formData.category]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e) => {
    setFormData({ ...formData, image: e.target.files[0] });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData();
    data.append("title", formData.title);
    data.append("description", formData.description);
    data.append("price", formData.price);
    data.append("category", formData.category);
    data.append("image", formData.image);

    try {
      const response = await axios.post(`http://localhost:5000/jobs/${formData.category}`, data);
      toast.success("Post added successfully!");
      setShowModal(true);
      setFormData({ title: "", description: "", price: "", category: "ALL", image: null });
      
      // Add the new post to the UI instantly
      setPosts([...posts, response.data]);  
    } catch (error) {
      console.error(error);
      toast.error("Failed to add post");
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="post-form">
        <h2>Create ALL Post</h2>
        <input
          type="text"
          name="title"
          placeholder="Title"
          value={formData.title}
          onChange={handleChange}
          required
        />
        <textarea
          name="description"
          placeholder="Description"
          value={formData.description}
          onChange={handleChange}
          required
        />
        <input
          type="number"
          name="price"
          placeholder="Price"
          value={formData.price}
          onChange={handleChange}
          required
        />
        <input type="file" onChange={handleFileChange} required />

        <select name="category" value={formData.category} onChange={handleChange}>
        <option value="create2">All</option>

          <option value="full-time-jobs">Full-Time Jobs</option>
          <option value="part-time-jobs">Part-Time Jobs</option>
          <option value="freelance-gigs">Freelance/Gigs</option>
          <option value="internships">Internships</option>
          <option value="work-from-home">Work-from-Home Opportunities</option>
        </select>

        <button type="submit">Add Post</button>
      </form>

      {/* Success Modal */}
      {showModal && (
        <div className="modal">
          <div className="modal-content">
            <h3>Post Added Successfully!</h3>
            <button onClick={() => setShowModal(false)}>Close</button>
          </div>
        </div>
      )}

      {/* Display Posts */}
      <div className="post-list">
        <h2>Posts in {formData.category.replace("-", " ")}</h2>
        {posts.length === 0 ? (
          <p>No posts available.</p>
        ) : (
          <div className="post-grid">
            {posts.map((post) => (
              <div key={post._id} className="post-card">
                <img src={`http://localhost:5000/uploads/${post.image}`} alt={post.title} className="post-image" />
                <div className="post-details">
                  <h3>{post.title}</h3>
                  <p className="post-date">{new Date(post.createdAt).toLocaleDateString()}</p>
                  <p>{post.description}</p>
                  <p><strong>Price:</strong> ${post.price}</p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default VechilesList;
