import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import { DataNews } from '../dataPova/dataNews';

const AdsPage = () => {
  const [ads, setAds] = useState([]);

  useEffect(() => {
    const loadAds = () => {
      const storedAdsJSON = localStorage.getItem('ads');
      const storedAds = storedAdsJSON ? JSON.parse(storedAdsJSON) : [];
      // Combine the static DataNews with the stored ads
      const combinedAds = [...DataNews, ...storedAds];
      setAds(combinedAds);
    };

    loadAds();

    // Optional: Listen for local storage changes
    // This is helpful if you have multiple tabs adding ads and want to keep them in sync
    window.addEventListener('storage', loadAds);

    // Cleanup the event listener
    return () => window.removeEventListener('storage', loadAds);
  }, []);

  return (
    <div className="container-fluid py-5 wow fadeInUp">
      <div className="container">
        <div className="section-title text-center position-relative pb-3 mb-5 mx-auto" style={{maxWidth: '600px'}}>
          <h5 className="fw-bold text-primary text-uppercase">Të fundit</h5>
        </div>
        <div className="row g-5">
          {ads.map((element) => (
            <div className="col-lg-4 wow slideInUp" key={element.id}>
              <div className="blog-item bg-light overflow-hidden h-100">
                <div className="blog-img position-relative overflow-hidden">
                  <img className="img-fluid" src={element.photo} alt=""/>
                </div>
                <div className="p-4">
                  <div className="d-flex mb-3">
                    <small><i className="far fa-calendar-alt text-primary me-2"></i>{element.date}</small>
                  </div>
                  <h5 className="mb-3 text-uppercase">{element.name}</h5>
                  <Link onClick={() => window.scrollTo({
                          top: 0,
                          left: 0,
                      })} to={`/ads/${element.id}`} className="text-uppercase text-decoration-none">shiko konkursin<i className="bi bi-arrow-right"></i></Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AdsPage;



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