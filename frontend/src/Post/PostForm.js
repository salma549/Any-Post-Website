


import { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import "./styles.css"; // Import the CSS file

const PostForm = ({ onPostAdded }) => {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    image: null,
  });

  const [showModal, setShowModal] = useState(false);

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
    data.append("image", formData.image);

    try {
      const response = await axios.post("http://localhost:5000/posts", data);
      toast.success("Post added successfully!");
      onPostAdded(response.data);
      setShowModal(true); // Show the success modal
      setFormData({ title: "", description: "", image: null });
    } catch (error) {
      console.error(error);
      toast.error("Failed to add post");
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="post-form">
        <h2>Create a Post</h2>
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
        <input type="file" onChange={handleFileChange} required />
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
    </>
  );
};

export default PostForm;

