// src/components/PickupDeliveryForm.js
import React, { useState } from 'react';

function PickupDeliveryForm() {
  const [formData, setFormData] = useState({ name: '', address: '', time: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Pickup Scheduled for ${formData.name} at ${formData.address} at ${formData.time}`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input type="text" name="name" value={formData.name} onChange={handleChange} />
      </label>
      <label>
        Address:
        <input type="text" name="address" value={formData.address} onChange={handleChange} />
      </label>
      <label>
        Preferred Time:
        <input type="text" name="time" value={formData.time} onChange={handleChange} />
      </label>
      <button type="submit">Schedule Pickup</button>
    </form>
  );
}

export default PickupDeliveryForm;
