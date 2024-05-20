import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import 'animate.css';
import { RingLoader } from 'react-spinners';
import { shpalljet } from '../dataPova/shpalljet';


const AdsPage = React.memo(() => {
  const [data, setData] = useState(shpalljet);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  return (
    <>
      

      <div className="container-fluid">
        <div className="container-fluid px-lg-5">
          <div className="section-title text-center position-relative pb-3 mb-5 mx-auto" style={{ maxWidth: '600px' }}>
            <h5 className="textOn text-primary text-uppercase mt-4">SHPALLJET</h5>
          </div>
          <div className="row g-5">
            {
              shpalljet?.map((item) => (
                <div className="col-lg-4" key={item.id}>
                  <div className="blog-item bg-light rounded overflow-hidden h-100">
                    <div className="blog-img position-relative overflow-hidden">
                      <img
                        className="blogImage"
                        src={item?.photo}
                        alt=""
                      />
                    </div>
                    <div className="p-4">
                      <div className="d-flex mb-3">
                        <small className="text-success textOn">
                          <i className="far fa-calendar-alt text-primary me-2"></i>
                          {item?.date}
                        </small>
                      </div>
                      <h5 className="mb-3 text-uppercase">{item?.title}</h5>
                      <h5 className="mb-3 textOn text-uppercase">{item?.name}</h5>
                      <a
                        href={item.pdfFile}
                        className="btn btn-secondary mt-2"
                        target='_blank'
                        rel='noreferrer'
                      >
                        Shiko më shumë
                      </a>
                    </div>
                  </div>
                </div>
              ))
            }
          </div>
        </div>
      </div>

      {error && <p style={{ color: 'red' }}>{error}</p>}
    </>
  );
});

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