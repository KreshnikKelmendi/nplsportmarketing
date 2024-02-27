import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import document1 from "../img/raportFinanciarTM1.docx"
import document2 from "../img/raportiFinanciarTM2.docx"
import document3 from "../img/raportFinanciarTM3.docx"
import document4 from "../img/raportFinanciarTM4.docx"

const PasqyraFinanciare = () => {
  const dataSets = [
    { id: 1, data: 'Pasqyra financiare për tremujorin e parë periudha JANAR - MARS/2023 ', downloadLink: document1 },
    { id: 2, data: 'Pasqyra financiare për tremujorin e dytë periudha PRILL - QERSHOR/2023 ', downloadLink: document2 },
    { id: 3, data: 'Pasqyra financiare për tremujorin e tretë periudha KORRIK - SHTATOR/2023', downloadLink: document3},
    { id: 4, data: 'Pasqyra financiare për tremujorin e katërt periudha TETOR -  DHJETOR/2023', downloadLink: document4 },
  ];

  const handleDownload = (downloadLink) => {
    // Replace this with your logic to handle the download link
    window.location.href = downloadLink;
  };

  return (
    <div className="container mt-4">
      <h1 className="mb-4">Pasqyra Financiare për vitin 2023</h1>
      {dataSets.map((item) => (
        <div key={item.id} className="mb-3">
          <button
            className="btn btn-primary"
            onClick={() => handleDownload(item.downloadLink)}
          >
            Shkarko dokumentin {item.data}
          </button>
        </div>
      ))}
    </div>
  );
};

export default PasqyraFinanciare;
