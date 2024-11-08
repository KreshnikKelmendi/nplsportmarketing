import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ApplyForm = () => {
  const [showModal, setShowModal] = useState(false);
  const [loading, setLoading] = useState(false);
  const [companyName, setCompanyName] = useState('');
  const [emailAddress, setEmailAddress] = useState('');
  const [file, setFile] = useState(null);

  useEffect(() => {
    if (showModal) {
      const timer = setTimeout(() => {
        setShowModal(false);
      }, 10000); 

      return () => clearTimeout(timer); // clear timeout if modal is closed earlier
    }
  }, [showModal]);

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
          {loading ? 'Në proces...' : 'Dërgo'}
        </button>
      </form>

      {showModal && (
        <div className="modal fade show d-flex align-items-center justify-content-center" style={{ display: 'block', backgroundColor: 'rgba(0, 0, 0, 0.5)' }} tabIndex="-1" aria-labelledby="modalLabel" aria-hidden="true">
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
              <div className="modal-header" style={{ backgroundColor: '#4CAF50', color: '#fff' }}>
                <h5 className="modal-title" id="modalLabel">Sukses!</h5>
                <button type="button" className="btn-close" onClick={() => setShowModal(false)} aria-label="Close"></button>
              </div>
              <div className="modal-body">
                <h3>Emaili u dërgua me sukses!</h3>
                <p>Faleminderit për aplikim {companyName}. Për detaje tjera do të njoftoheni me kohë përmes e-mailit zyrtar të NPL Sport Marketing!</p>
              </div>
              <div className="modal-footer justify-content-center">
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
