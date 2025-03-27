// import statusi from "../img/STATUTI-I-NPL-SPORT-MARKETING.pdf";
// import statusi2 from "../img/LIGJI__NR._04_L-006_PER_NDRYSHIMIN_DHE_PLOTESIMIN_E_LIGJIT_NR.02_L-123_PER_SHOQERITE_TREGTARE.pdf";
// import statusi3 from "../img/LIGJI_NR._05_L_-009_PER_NDRYSHIMIN_DHE_PLOTESIMIN_E_LIGJIT_NR._03_L-087_PER_NDERMARRJET_PUBLIKE_I_NDRYSHUAR_DHE_I_PLOTESUAR_ME_LIGJIN_NR._04_L-111.pdf";
// import statusi4 from "../img/RREGULLORET-PER-MARREDHENIET-NE-PUNE.pdf";
// import statusi5 from "../img/RREGULLORE-PER-PERGJEGJESINE-DISIPLINORE-DHE-MATERIALE.pdf";
// import statusi6 from "../img/RREGULLORE-PER-SISTEMATIZIMIN-E-PUNEVE-DHE-DETYRAVE-TE-PUNES.pdf";
// import 'animate.css';

// const Law = () => {
//     return(
//       <>
//         <div className="container-fluid py-5 lawBg" style={{marginBottom: "50px"}}>
//             <div className="row py-5">
//                 <div className="col-12 text-center">
//                     <h1 className="display-4 text-white animate__animated animate__slideInUp animate__slow">Korniza ligjore</h1>
//                 </div>
//             </div>
//         </div>


//         <div className="col-lg-12 py-3 slideInUp" data-wow-delay="0.3s">
//             <div className="blog-item bg-light overflow-hidden">
//                 <div className="p-4">
//                     <h5 className="mb-3 text-uppercase">
//                         Statuti i Ndërmarrjes Publike Lokale ”Sport Marketing” SH.A. Prishtinë
//                     </h5>
//                     <a className="text-uppercase text-decoration-none" href={statusi} alt="" target="_blank" rel="noopener noreferrer">SHKARKO</a>
//                 </div>
//             </div>
//         </div>


//         <div className="col-lg-12 py-3 slideInUp" data-wow-delay="0.3s">
//             <div className="blog-item bg-light overflow-hidden">
//                 <div className="p-4">
//                     <h5 className="mb-3 text-uppercase">
//                         LIGJI NR. 04 L-006 PËR NDRYSHIMIN DHE PLOTËSIMIN E 
//                         LIGJIT NR.02 L-123 PËR SHOQËRITË TREGTARE
//                     </h5>
//                     <a className="text-uppercase text-decoration-none" href={statusi2} alt="" target="_blank" rel="noopener noreferrer">SHKARKO</a>
//                 </div>
//             </div>
//         </div>


//         <div className="col-lg-12 py-3 slideInUp">
//             <div className="blog-item bg-light overflow-hidden">
//                 <div className="p-4">
//                     <h5 className="mb-3 text-uppercase">
//                         LIGJI NR.05/L-009 PËR NDRYSHIMIN DHE PLOTËSIMIN E LIGJIT NR.03/L-087 PËR NDËRMARRJET PUBLIKE I NDRYSHUAR DHE I PLOTËSUAR ME LIGJIN NR.04/L-111</h5>
//                     <a className="text-uppercase text-decoration-none" href={statusi3} alt="" target="_blank" rel="noopener noreferrer">SHKARKO</a>
//                 </div>
//             </div>
//         </div>


//         <div className="col-lg-12 py-3 slideInUp">
//             <div className="blog-item bg-light overflow-hidden">
//                 <div className="p-4">
//                     <h5 className="mb-3 text-uppercase">
//                         Rregullore për marrëdhënien në punë
//                     </h5>
//                     <a className="text-uppercase text-decoration-none" href={statusi4} alt="" target="_blank" rel="noopener noreferrer">SHKARKO</a>
//                 </div>
//             </div>
//         </div>


//         <div className="col-lg-12 py-3 slideInUp">
//             <div className="blog-item bg-light overflow-hidden">
//                 <div className="p-4">
//                     <h5 className="mb-3 text-uppercase">
//                         RREGULLORE PËR PËRGJEGJËSINË DISIPLINORE DHE MATERIALE
//                     </h5>
//                     <a className="text-uppercase text-decoration-none" href={statusi5} alt="" target="_blank" rel="noopener noreferrer">SHKARKO</a>
//                 </div>
//             </div>
//         </div>


//         <div className="col-lg-12 py-3 slideInUp" data-wow-delay="0.3s">
//             <div className="blog-item bg-light overflow-hidden">
//                 <div className="p-4">
//                     <h5 className="mb-3 text-uppercase">
//                         RREGULLORE PËR SISTEMATIZIMIN E PUNËVE DHE DETYRAVE TË PUNËS
//                     </h5>
//                     <a className="text-uppercase text-decoration-none" href={statusi6} alt="" target="_blank" rel="noopener noreferrer">SHKARKO</a>
//                 </div>
//             </div>
//         </div>
//       </>
//     )
// }

// export default Law;

import React from 'react';
import 'animate.css';
import korniza1 from "../img/NR.35-RREGULLORE MBI PAGAT DHE KOMPENSIMET TJERA  (1).pdf";
import korniza2 from "../img/NR.86- RREGULLORE E MIRESJELLJES DHE ETIKES.pdf";
// import korniza3 from "../img/NR.36-UDHEZIMI MBI PERSHKRIMIN E DETYRAVE TE PUNES.pdf";
import korniza4 from "../img/NR.87- RREGULLORE E MARDHENJES SE PUNES DHE PROCEDURES DISIPLINORE.pdf";
import korniza5 from "../img/NR.36-1-ORGANOGRAMI.pdf";
import korniza6 from "../img/NR.34- STATUTI 26.02.2025.pdf"

const Law = () => {
  const documents = [
    {
      title: `STATUTI I NDËRMARRJES PUBLIKE LOKALE "SPORT MARKETING" SH.A. PRISHTINË`,
      file: korniza6
    },
    {
      title: "RREGULLORE MBI PAGAT DHE KOMPENSIMET TJERA",
      file: korniza1
    },
    {
      title: "RREGULLORE E MIRËSJELLJES DHE ETIKES",
      file: korniza2
    },
    // {
    //   title: "UDHËZIMI MBI PËRSHKRIMIN E DETYRAVE TË PUNËS",
    //   file: korniza3
    // },
    {
      title: "RREGULLORE E MARRËDHËNIES SË PUNËS DHE PROCEDURËS DISIPLINORE",
      file: korniza4
    },
    {
      title: "ORGANOGRAMI",
      file: korniza5
    }
  ];

  return (
    <div className="law-container">
      {/* Elegant Hero Section - Made responsive */}
      <div className="text-white position-relative overflow-hidden" style={{minHeight: "300px", height: "40vh"}}>
        <div className="position-absolute top-0 end-0 bottom-0 start-0 lawBg"></div>
        <div className="position-absolute top-0 end-0 bottom-0 start-0 bg-gradient opacity-10"></div>
        
        <div className="container h-100 position-relative z-index-1">
          <div className="row h-100 justify-content-center align-items-center">
            <div className="col-12 col-md-10 text-center px-3">
              <h1 className="display-4 fw-bold mb-3 animate__animated animate__fadeInDown" style={{fontSize: "clamp(1.5rem, 5vw, 2.5rem)"}}>
                Korniza Ligjore
              </h1>
              <p className="lead mb-4 animate__animated animate__fadeIn animate__delay-1s" style={{fontSize: "clamp(1rem, 2vw, 1.25rem)"}}>
                Dokumentet zyrtare të <b>NPL Sport Marketing Prishtina</b>
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Documents Section with Elegant Cards - Made responsive */}
      <div className="container my-4 my-md-5 py-2 py-md-4">
        <div className="row justify-content-center">
          <div className="col-12 col-lg-11 px-3 px-md-0">
            

            <div className="row g-3 g-md-4 g-lg-5 overflow-hidden">
              {documents.map((doc, index) => (
                <div key={index} className="col-12 col-sm-6">
                  <div className="card h-100 border-0 shadow-sm hover-shadow transition-all">
                    <div className="card-body p-3 p-md-4">
                      <div className="d-flex flex-column h-100">
                        <h5 className="fw-semibold mb-2 mb-md-3" style={{fontSize: "clamp(1rem, 1.5vw, 1.25rem)"}}>
                          {doc.title}
                        </h5>
                        <div className="mt-auto">
                          <a 
                            href={doc.file} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="btn btn-outline-primary w-100 py-2"
                            style={{fontSize: "0.9rem"}}
                          >
                            Shkarko Dokumentin
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Law;