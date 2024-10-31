import React, { useState } from 'react';
import axios from 'axios';

const ApplyForm = () => {
  const [showModal, setShowModal] = useState(false);
  const [loading, setLoading] = useState(false);
  const [companyName, setCompanyName] = useState('');
  const [emailAddress, setEmailAddress] = useState('');
  const [file, setFile] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData();
    formData.append('file', file);
    formData.append('companyName', companyName);
    formData.append('emailAddress', emailAddress);

    try {
      const response = await axios.post('http://localhost:5000/upload', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      if (response.status === 200) {
        setShowModal(true);
      } else {
        console.error('Failed to send email');
      }
    } catch (error) {
      console.error('Error:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container my-5 p-4 border rounded shadow-sm" style={{ maxWidth: '600px', backgroundColor: '#f8f9fa' }}>
      <h2 className="text-center mb-4">Apply Form</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="companyName" className="form-label">Emri i Kompanise</label>
          <input
            type="text"
            className="form-control"
            id="companyName"
            placeholder="Shkruani emrin e kompanise"
            required
            value={companyName}
            onChange={(e) => setCompanyName(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="emailAddress" className="form-label">Email Addresa</label>
          <input
            type="text"
            className="form-control"
            id="emailAddress"
            placeholder="Shkruani emailin"
            required
            value={emailAddress}
            onChange={(e) => setEmailAddress(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="fileUpload" className="form-label">Ngarkoni dokumentin</label>
          <input
            type="file"
            className="form-control"
            id="fileUpload"
            onChange={(e) => setFile(e.target.files[0])}
          />
        </div>
        <button type="submit" className="btn btn-primary w-100" disabled={loading}>
          {loading ? 'Dërgo në proces...' : 'Dërgo'}
        </button>
      </form>

      {showModal && (
        <div className="modal fade show" style={{ display: 'block' }} tabIndex="-1" aria-labelledby="modalLabel" aria-hidden="true">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="modalLabel">Sukses!</h5>
                <button type="button" className="btn-close" onClick={() => setShowModal(false)} aria-label="Close"></button>
              </div>
              <div className="modal-body">
                Emaili u dërgua me sukses!
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" onClick={() => setShowModal(false)}>Mbyll</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ApplyForm;
