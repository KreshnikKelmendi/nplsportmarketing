import React, { useState } from 'react';
import { shpalljet } from '../dataPova/shpalljet';

const AdsPage = () => {
  const [data] = useState(shpalljet);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  return (
    <>
      <div className="container-fluid py-5">
        <div className="container px-lg-5">
          <div className="text-center pb-4 mb-5">
            <h5 className="text-primary text-uppercase">SHPALLJET</h5>
            <p className="lead text-muted mt-2">Explore our latest announcements and updates</p>
          </div>
          <div className="row g-4">
            {data?.map((item) => (
              <div className="col-md-6 col-lg-4" key={item.id}>
                <div className="card border-0 shadow-sm h-100 d-flex flex-column">
                  <div className="card-img-top position-relative overflow-hidden" style={{ height: '200px' }}>
                    <img 
                      className="w-100 h-100 object-fit-cover"
                      src={item.photo} 
                      alt={item.title} 
                      style={{ transition: 'transform 0.3s ease' }}
                    />
                  </div>
                  <div className="card-body d-flex flex-column">
                    <div className="d-flex align-items-center mb-2">
                      <small className="text-muted">
                        <i className="far fa-calendar-alt text-primary me-2"></i>
                        {item.date}
                      </small>
                    </div>
                    <h6 className="card-title text-uppercase">{item.title}</h6>
                    <h6 className="text-muted">{item.name}</h6>
                    {/* Adding a spacer div to push the buttons to the bottom */}
                    <div className="flex-grow-1"></div>
                    <div className="mt-3">
                      <a
                        href={item.pdfFile}
                        className="btn btn-outline-primary btn-sm d-block mb-2"
                        target="_blank"
                        rel="noreferrer"
                      >
                        Shiko më shumë
                      </a>
                      {item.deklarata && (
                        <a
                          href={item.deklarata}
                          className="btn btn-outline-secondary btn-sm d-block mb-2"
                          target="_blank"
                          rel="noreferrer"
                        >
                          Deklarata nën betim
                        </a>
                      )}
                      {item.aplikacioni && (
                        <a
                          href={item.aplikacioni}
                          className="btn btn-outline-success btn-sm d-block"
                          target="_blank"
                          rel="noreferrer"
                        >
                          Aplikacioni
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {error && <p className="text-center text-danger mt-4">{error}</p>}
    </>
  );
};

export default AdsPage;







// import React from 'react';
// import { Link } from "react-router-dom";
// import { RingLoader } from 'react-spinners';
// import FetchData from '../hooks/FetchData';

// const AdsPage = () => {
//   const apiUrl = "https://sportmarketing.onrender.com";
//   const { loading, error, data } = FetchData(`${apiUrl}/api/shpalljets?populate=*`);

//   console.log("datas", data);

//   return (
//     <div className="container-fluid py-5 wow fadeInUp">
//       <div className="container">
//         <div className="section-title text-center position-relative pb-3 mb-5 mx-auto" style={{maxWidth: '600px'}}>
//           <h5 className="fw-bold text-primary text-uppercase">Të fundit</h5>
//         </div>
//         <div className="row g-5">
//           {loading ? (
//             <div className="text-center justify-content-center align-items-center">
//               <RingLoader color="#007BFF" loading={loading} size={100} />
//             </div>
//           ) : (
//             data?.data
//               .sort((a, b) => new Date(b?.attributes?.date) - new Date(a?.attributes?.date)) 
//               .map((item) => (
//                 <div className="col-lg-4" key={item.id}>
//                   <div className="blog-item bg-light rounded overflow-hidden h-100">
//                     <div className="blog-img position-relative overflow-hidden">
//                       <img
//                         className="blogImage"
//                         src={`${apiUrl}${item?.attributes?.image?.data?.attributes?.url}`}
//                         alt={item?.attributes?.title || 'Image'}
//                       />
//                        {console.log('Image URL:', item?.attributes?.img?.data[0]?.attributes?.url)}
//                     </div>
//                     <div className="p-4">
//                       <div className="d-flex mb-3">
//                         <small className="text-success textOn">
//                           <i className="far fa-calendar-alt text-primary me-2"></i>
//                           {item?.attributes?.date}
//                         </small>
//                       </div>
//                       <h5 className="mb-3 textOn text-uppercase">{item?.attributes?.titulli}</h5>
//                       <Link
//                         onClick={() =>
//                           window.scrollTo({
//                             top: 0,
//                             left: 0,
//                           })
//                         }
//                         to={`/ads/${item.id}`}
//                         className="linkHover textOn text-decoration-none"
//                       >
//                         Shiko konkursin<i className="mx-2 bi bi-arrow-right"></i>
//                       </Link>
//                     </div>
//                   </div>
//                 </div>
//               ))
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AdsPage;




// import { Link } from "react-router-dom";
// import 'animate.css';
// import { useEffect, useState } from "react";
// import { fetchDataFromApi } from "../utils/api";

// const AdsPage = () => {
//     const [data, setData] = useState(null);

//     useEffect(() => {
//          fetchProducts()
//     }, [])
 
//     const fetchProducts = async () => {
//         try {
//             const { data } = await fetchDataFromApi("/api/shpalljets?populate=*");
//             const sortedData = data.sort((a, b) => new Date(b.attributes.date) - new Date(a.attributes.date));
//             setData(sortedData);
//         } catch (error) {
//             console.error("Error fetching data:", error);
//         }
//     }

//     console.log("gg", data)

//     return(
//        <>
//         <div className="container-fluid py-5 adsBg" style={{marginBottom: '90px'}}>
//             <div className="row py-5">
//                 <div className="col-12 text-center">
//                     <h1 className="display-2 text-white animate__animated animate__slideInUp animate__slow">Shpalljet</h1>
//                 </div>
//             </div>
//         </div>
  

//         <div className="container-fluid py-5 wow fadeInUp">
//             <div className="container">
//                 <div className="section-title text-center position-relative pb-3 mb-5 mx-auto" style={{maxWidth: '600px'}}>
//                     <h5 className="fw-bold text-primary text-uppercase">Të fundit</h5>
//                 </div>
//                     <div className="row g-5">
//                         {data?.map((element) => (
//                             <div className="col-lg-4 wow slideInUp" key={element.id}>
//                                 <div className="blog-item bg-light overflow-hidden h-100">
//                                     <div className="blog-img position-relative overflow-hidden">
//                                         <img className="blogImage" src={element?.attributes.image.data[0].attributes.url} alt=""/>
//                                     </div>
//                                     <div className="p-4">
//                                         <div className="d-flex mb-3">
//                                             <small><i className="far fa-calendar-alt text-primary me-2"></i>{element?.attributes?.date}</small>
//                                         </div>
//                                         <h5 className="mb-3 text-uppercase">{element?.attributes?.title}</h5>
//                                         <Link onClick={() => window.scrollTo({
//                                                 top: 0,
//                                                 left: 0,
//                                             })} to={`/ads/${element.id}`} className="text-uppercase text-decoration-none">shiko konkursin<i className="bi bi-arrow-right"></i></Link>
//                                     </div>
//                                 </div>
//                             </div>
//                         ))}
//                     </div>
//             </div>
//         </div>
//        </>
//     )
// }

// export default AdsPage;