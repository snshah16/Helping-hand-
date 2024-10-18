// src/components/DonationForm.js
import React, { useState } from 'react';

function DonationForm() {
  const [formData, setFormData] = useState({
    type: '',
    description: '',
    location: '',
    image: null
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleImageChange = (e) => {
    setFormData({ ...formData, image: e.target.files[0] });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Donation submitted:', formData);
  };

  return (
    <form onSubmit={handleSubmit} className="donation-form">
      <div>
        <label>Item Type:</label>
        <select name="type" value={formData.type} onChange={handleChange}>
          <option value="">Select Type</option>
          <option value="Food">Food</option>
          <option value="Clothes">Clothes</option>
          <option value="Books">Books</option>
        </select>
      </div>

      <div>
        <label>Description:</label>
        <textarea name="description" value={formData.description} onChange={handleChange} />
      </div>

      <div>
        <label>Image:</label>
        <input type="file" onChange={handleImageChange} />
      </div>

      <div>
        <label>Location:</label>
        <input type="text" name="location" value={formData.location} onChange={handleChange} />
      </div>

      <button type="submit">Submit Donation</button>
    </form>
  );
}

export default DonationForm;
