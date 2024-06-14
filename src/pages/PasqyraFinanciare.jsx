import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import document1 from "../img/raportFinanciarTM1.docx";
import document2 from "../img/raportiFinanciarTM2.docx";
import document3 from "../img/raportFinanciarTM3.docx";
import document4 from "../img/raportFinanciarTM4.docx";
import document5 from "../img/RAPORT_FINANCIAR_TM_1_2024_.docx"; // Assuming this is for 2024 Q1

const PasqyraFinanciare = () => {
  const dataSets = [
    { id: 1, year: 2023, data: 'Pasqyra financiare për tremujorin e parë periudha JANAR - MARS/2023 ', downloadLink: document1 },
    { id: 2, year: 2023, data: 'Pasqyra financiare për tremujorin e dytë periudha PRILL - QERSHOR/2023 ', downloadLink: document2 },
    { id: 3, year: 2023, data: 'Pasqyra financiare për tremujorin e tretë periudha KORRIK - SHTATOR/2023', downloadLink: document3 },
    { id: 4, year: 2023, data: 'Pasqyra financiare për tremujorin e katërt periudha TETOR - DHJETOR/2023', downloadLink: document4 },
    { id: 5, year: 2024, data: 'Pasqyra financiare për tremujorin e parë periudha JANAR - MARS/2024', downloadLink: document5 }, // Example for 2024
  ];

  const handleDownload = (downloadLink) => {
    window.location.href = downloadLink;
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
                onClick={() => handleDownload(item.downloadLink)}
              >
                Shkarko dokumentin
              </button>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default PasqyraFinanciare;
