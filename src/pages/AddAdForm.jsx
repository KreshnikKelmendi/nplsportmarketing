import React, { useState } from 'react';

const AddAdForm = () => {
  const [ad, setAd] = useState({ name: '', date: '', photo: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    const ads = JSON.parse(localStorage.getItem('ads')) || [];
    const newAd = { ...ad, id: Date.now() };
    ads.push(newAd);
    localStorage.setItem('ads', JSON.stringify(ads));
    setAd({ name: '', date: '', photo: '' });
    alert('Ad added successfully!');
  };

  const handleChange = (e) => {
    setAd({ ...ad, [e.target.name]: e.target.value });
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card shadow">
            <div className="card-body p-4">
              <h2 className="text-center mb-4">Add Ad</h2>
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label htmlFor="name" className="form-label">Ad Name:</label>
                  <input
                    type="text"
                    name="name"
                    value={ad.name}
                    onChange={handleChange}
                    className="form-control"
                    placeholder="Enter Ad Name"
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="date" className="form-label">Date:</label>
                  <input
                    type="text"
                    name="date"
                    value={ad.date}
                    onChange={handleChange}
                    className="form-control"
                    placeholder="Enter Date"
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="photo" className="form-label">Photo URL:</label>
                  <input
                    type="text"
                    name="photo"
                    value={ad.photo}
                    onChange={handleChange}
                    className="form-control"
                    placeholder="Enter Photo URL"
                    required
                  />
                </div>
                <button type="submit" className="btn btn-primary w-100">Add Ad</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddAdForm;
