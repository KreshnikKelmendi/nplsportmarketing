import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import document1 from "../img/raportFinanciarTM1.docx";
import document2 from "../img/raportiFinanciarTM2.docx";
import document3 from "../img/raportFinanciarTM3.docx";
import document4 from "../img/raportFinanciarTM4.docx";
import document5 from "../img/RAPORT_FINANCIAR_TM_1_2024_.docx";
import document6 from "../img/RAPORT_FINANCIAR_TM_2_2024.pdf";
import document7 from "../img/RAPORT_FINANCIAR_TM_3_2024.pdf";
import document8 from "../img/RAPORT_FINANCIAR_TM_4_2024.pdf";
import RaportiAuditoreve from "../img/Raporti i Auditoreve te Pavarur dhe Pasqyrat Financare NPL Sportmarketing_FINAL.pdf";

const PasqyraFinanciare = () => {
  const dataSets = [
    { id: 1, year: 2023, data: 'Pasqyra financiare për tremujorin e parë periudha JANAR - MARS/2023', downloadLink: document1, fileType: 'docx' },
    { id: 2, year: 2023, data: 'Pasqyra financiare për tremujorin e dytë periudha PRILL - QERSHOR/2023', downloadLink: document2, fileType: 'docx' },
    { id: 3, year: 2023, data: 'Pasqyra financiare për tremujorin e tretë periudha KORRIK - SHTATOR/2023', downloadLink: document3, fileType: 'docx' },
    { id: 4, year: 2023, data: 'Pasqyra financiare për tremujorin e katërt periudha TETOR - DHJETOR/2023', downloadLink: document4, fileType: 'docx' },
    { id: 5, year: 2024, data: 'Pasqyra financiare për tremujorin e parë periudha JANAR - MARS/2024', downloadLink: document5, fileType: 'docx' },
    { id: 6, year: 2024, data: 'Pasqyra financiare për tremujorin e dytë periudha PRILL - QERSHOR/2024', downloadLink: document6, fileType: 'pdf' },
    { id: 7, year: 2024, data: 'Pasqyra financiare për tremujorin e tretë periudha KORRIK - SHTATOR/2024', downloadLink: document7, fileType: 'pdf' },
    { id: 8, year: 2024, data: 'Pasqyra financiare për tremujorin e katërt periudha TETOR - DHJETOR/2024', downloadLink: document8, fileType: 'pdf' },
  ];

  const handleDownload = (item) => {
    // For all file types, open in new tab
    window.open(item.downloadLink, '_blank', 'noopener,noreferrer');
  };

  // Group data by year
  const groupedData = dataSets.reduce((acc, item) => {
    if (!acc[item.year]) {
      acc[item.year] = [];
    }
    acc[item.year].push(item);
    return acc;
  }, {});

  // Get sorted years in descending order
  const sortedYears = Object.keys(groupedData).sort((a, b) => b - a);

  return (
    <div className="container mt-4">
      {/* Minimal Feature Banner for Raporti i Auditoreve te Pavarur dhe Pasqyrat Financiare NPL Sportmarketing_FINAL */}
      <div className="mb-4 p-0" style={{background: 'linear-gradient(90deg, #43cea2 0%, #185a9d 100%)', border: '1.5px solid #43cea2', boxShadow: '0 2px 12px rgba(24,90,157,0.10)'}}>
        <div className="p-3 text-start">
          <h2 className="fw-bold mb-1 text-white" style={{fontSize: '1.15rem', letterSpacing: '0.2px'}}>Raporti i Auditorëve të Pavarur dhe Pasqyrat Financiare</h2>
          <p className="mb-3 text-white" style={{fontSize: '0.95rem'}}>Shikoni raportin e plotë të auditimit të pavarur dhe pasqyrat financiare të NPL Sport Marketing për vitin që përfundoi deri më <b>31 Dhjetor 2024.</b></p>
          <a href={RaportiAuditoreve} target="_blank" rel="noopener noreferrer" className="btn btn-primary px-3 py-2 shadow-sm" style={{fontSize: '1rem', borderRadius: '0.25rem'}}>
            Shiko Raportin (PDF)
          </a>
        </div>
      </div>
      {/* Existing financial reports by year */}
      {sortedYears.map((year) => (
        <div className='p-3 bg-amfiteatriIcon mb-4' key={year}>
          <h2 className="mb-4 bg-bluecolor p-2 text-white">Pasqyra Financiare për vitin {year}</h2>
          {groupedData[year].map((item) => (
            <div key={item.id} className="mb-3">
              <h5 className="mb-2">{item.data}</h5>
              <button
                className="btn btn-primary"
                onClick={() => handleDownload(item)}
              >
                {item.fileType === 'pdf' ? 'Shiko dokumentin' : 'Shiko dokumentin'}
              </button>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default PasqyraFinanciare;