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