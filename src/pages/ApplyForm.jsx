import React, { useState } from 'react';

const ApplyForm = () => {
  const [showModal, setShowModal] = useState(false);
  const [loading, setLoading] = useState(false);
  const [companyName, setCompanyName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    // Set the modal to show after 1500ms of loading
    setTimeout(() => {
      setLoading(false);
      setShowModal(true);
    }, 1500);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <div className="container my-5 p-4 border rounded shadow-sm" style={{ maxWidth: '600px', backgroundColor: '#f8f9fa' }}>
      <h2 className="text-center mb-4">Apply Form</h2>
      <form onSubmit={handleSubmit}>
        
        <div className="mb-3">
          <label htmlFor="companyName" className="form-label">Emri i Kompanisë</label>
          <input
            type="text"
            className="form-control"
            id="companyName"
            placeholder="Shkruani emrin e kompanisë"
            required
            value={companyName}
            onChange={(e) => setCompanyName(e.target.value)}
          />
        </div>
        
        <div className="mb-3">
          <label htmlFor="email" className="form-label">Email Adresa</label>
          <input type="email" className="form-control" id="email" placeholder="Shkruani email adresën" required />
        </div>
        
        <div className="mb-3">
          <label htmlFor="fileUpload" className="form-label">Ngarkoni dokumentin</label>
          <input type="file" className="form-control" id="fileUpload" />
        </div>
        
        <button type="submit" className="btn btn-primary w-100">Dërgo</button>
      </form>

      {/* Modal Popup */}
      {showModal && (
        <div className="modal-overlay">
          <div className="modal-content">
            <h5 className="modal-title mb-4">Faleminderit për aplikimin tuaj!</h5>
            <p>Faleminderit për aplikimin tuaj, {companyName}. Për detaje të tjera do të njoftoheni me kohë përmes email adresës.</p>
            <button onClick={handleCloseModal} className="btn btn-secondary mt-3">Mbyll</button>
          </div>
        </div>
      )}

      {/* Loading Spinner */}
      {loading && (
        <div className="modal-overlay">
          <div className="modal-content text-center">
            <div className="spinner-border text-primary" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
          </div>
        </div>
      )}

      {/* Modal and Spinner Styling */}
      <style jsx>{`
        .modal-overlay {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: rgba(0, 0, 0, 0.5);
          display: flex;
          justify-content: center;
          align-items: center;
          z-index: 1050;
        }
        .modal-content {
          background: #fff;
          padding: 20px;
          border-radius: 8px;
          max-width: 400px;
          text-align: center;
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
        }
      `}</style>
    </div>
  );
};

export default ApplyForm;
