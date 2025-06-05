import React, { useState, useEffect } from 'react';
import { shpalljet } from '../dataPova/shpalljet';
import { FaCalendarAlt, FaSearch, FaFilter, FaChevronDown, FaChevronUp, FaTimes } from 'react-icons/fa';

const AdsPage = () => {
  const [data] = useState(shpalljet);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [visibleCount, setVisibleCount] = useState(12);
  
  // Filter states
  const [searchTerm, setSearchTerm] = useState('');
  const [yearFilter, setYearFilter] = useState('all');
  const [showFilters, setShowFilters] = useState(false);
  const [filteredData, setFilteredData] = useState(shpalljet);
  
  // Extract years exactly as they appear in the date strings
  const extractVisibleYear = (dateString) => {
    const yearMatch = dateString.match(/\b(20\d{2})\b/);
    return yearMatch ? yearMatch[0] : null;
  };

  const allYears = [...new Set(
    shpalljet
      .map(item => extractVisibleYear(item.date))
      .filter(Boolean)
  )].sort((a, b) => b - a);

  const yearOptions = ['all', ...allYears];

  // Apply filters with loading delay
  useEffect(() => {
    let timer;
    
    setLoading(true);
    
    timer = setTimeout(() => {
      try {
        let results = [...data];
        
        // Apply search filter
        if (searchTerm) {
          const term = searchTerm.toLowerCase();
          results = results.filter(item => 
            item.title.toLowerCase().includes(term) ||
            (item.name && item.name.toLowerCase().includes(term))
          );
        }
        
        // Apply year filter
        if (yearFilter !== 'all') {
          results = results.filter(item => {
            const itemYear = extractVisibleYear(item.date);
            return itemYear === yearFilter.toString();
          });
        }
        
        setFilteredData(results);
        setVisibleCount(12);
      } catch (err) {
        setError('Error applying filters');
        console.error(err);
      } finally {
        setLoading(false);
      }
    }, 1500); // 1500ms loading delay
    
    return () => clearTimeout(timer);
  }, [searchTerm, yearFilter, data]);

  const toggleShowMore = () => {
    setVisibleCount(prev => prev === 12 ? filteredData.length : 12);
  };

  const clearFilters = () => {
    setSearchTerm('');
    setYearFilter('all');
  };

  return (
    <div className="ads-page-container">
      {/* Hero Section */}
      <div className=" py-5 mb-5" style={{backgroundColor:"#1555A2"}}>
        <div className="container text-center text-white">
          <h1 className="display-5 fw-bold mb-3">SHPALLJET</h1>
          <p className="lead opacity-75">Informohu për shpalljet më të fundit</p>
        </div>
      </div>

      {/* Main Content */}
      <div className="container">
        {/* Filter Controls */}
        <div className="filter-controls mb-5">
          <div className="card shadow-sm border-0 rounded-lg overflow-hidden">
            <div className="card-header bg-white border-0 py-3">
              <div className="d-flex justify-content-between align-items-center">
                <h3 className="h5 mb-0 text-dark fw-semibold textOn3">
                  <FaFilter className="me-2 text-primary textOn3" />
                  Kërko shpallje
                </h3>
                <button 
                  className="btn btn-sm btn-link text-decoration-none"
                  onClick={() => setShowFilters(!showFilters)}
                >
                  {showFilters ? (
                    <>
                      <FaChevronUp className="me-1" />
                      Fshih
                    </>
                  ) : (
                    <>
                      <FaChevronDown className="me-1" />
                      Shfaq
                    </>
                  )}
                </button>
              </div>
            </div>
            
            {showFilters && (
              <div className="card-body bg-light pt-0">
                <div className="row g-3">
                  {/* Search Field */}
                  <div className="col-md-8">
                    <div className="search-box">
                      <label htmlFor="searchInput" className="form-label textOn3 small text-muted mb-1">
                        Kërko sipas titullit ose emrit
                      </label>
                      <div className="input-group">
                        <span className="input-group-text bg-white border-end-0">
                          <FaSearch className="text-muted" />
                        </span>
                        <input
                          id="searchInput"
                          type="text"
                          className="form-control border-start-0 py-2"
                          placeholder="Shkruaj për të kërkuar..."
                          value={searchTerm}
                          onChange={(e) => setSearchTerm(e.target.value)}
                        />
                        {searchTerm && (
                          <button
                            className="btn btn-outline-secondary border-start-0"
                            onClick={() => setSearchTerm('')}
                          >
                            <FaTimes />
                          </button>
                        )}
                      </div>
                    </div>
                  </div>
                  
                  {/* Year Filter */}
                  <div className="col-md-4">
                    <div className="year-filter">
                      <label htmlFor="yearSelect" className="form-label textOn3 small text-muted mb-1">
                        Filtro sipas vitit
                      </label>
                      <select
                        id="yearSelect"
                        className="form-select py-2"
                        value={yearFilter}
                        onChange={(e) => setYearFilter(e.target.value)}
                      >
                        {yearOptions.map(year => (
                          <option key={year} value={year}>
                            {year === 'all' ? 'Të gjitha vitet' : year}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>
                  
                  {/* Clear Filters */}
                  {(searchTerm || yearFilter !== 'all') && (
                    <div className="col-12">
                      <button
                        className="btn btn-sm btn-outline-secondary textOn3"
                        onClick={clearFilters}
                      >
                        <FaTimes className="me-1" />
                        Pastro filtrat
                      </button>
                    </div>
                  )}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Results Header */}
        <div className="d-flex justify-content-between align-items-center mb-4 px-2">
          <div>
            <span className="badge bg-primary rounded-pill me-2">
              {filteredData.length}
            </span>
            <span className="text-muted">
              {filteredData.length === 1 ? 'rezultat' : 'rezultate'} të gjetura
            </span>
          </div>
          {loading && (
            <div className="spinner-border spinner-border-sm text-primary" role="status">
              <span className="visually-hidden">Duke u ngarkuar...</span>
            </div>
          )}
        </div>

        {/* Loading State */}
        {loading && (
          <div className="text-center py-5 my-5">
            <div className="spinner-border text-primary mb-4" style={{width: '3rem', height: '3rem'}} role="status">
              <span className="visually-hidden">Duke u ngarkuar...</span>
            </div>
            <h4 className="text-primary mb-3">Duke u ngarkuar...</h4>
            <p className="text-muted">Ju lutem prisni . . .</p>
          </div>
        )}

        {/* Ads Grid */}
        {!loading && (error ? (
          <div className="alert alert-danger">{error}</div>
        ) : filteredData.length === 0 ? (
          <div className="text-center py-5 my-5">
            <div className="empty-state-icon mb-4">
              <FaSearch size={48} className="text-muted opacity-25" />
            </div>
            <h4 className="text-muted mb-3">Nuk u gjet asnjë shpallje</h4>
            <p className="text-muted mb-4">Provoni të modifikoni kriteret e kërkimit</p>
            <button 
              className="btn btn-primary px-4"
              onClick={clearFilters}
            >
              Pastro të gjitha filtrat
            </button>
          </div>
        ) : (
          <>
            <div className="row g-4 px-2">
              {filteredData.slice(0, visibleCount).map((item) => (
                <div className="col-lg-4 col-xl-3" key={item.id}>
                  <div className="card h-100 border-0 shadow-sm transition-all hover-shadow">
                    <div className="card-img-top overflow-hidden position-relative" style={{ height: '220px' }}>
                      <img 
                        src={item.photo} 
                        alt={item.title} 
                        className="img-fluid w-100 h-100 object-fit-cover"
                      />
                      <div className="date-badge textOn3 bg-primary text-white position-absolute top-0 end-0 m-3 px-2 py-1 rounded small fw-medium">
                        <FaCalendarAlt className="me-1" />
                        {item.date}
                      </div>
                    </div>
                    <div className="card-body d-flex flex-column">
                      <h5 className="card-title text-dark mb-2 textOn3">{item.title}</h5>
                      {item.name && (
                        <h6 className="card-subtitle mb-3 text-muted small textOn3">{item.name}</h6>
                      )}
                      
                      <div className="mt-auto d-grid gap-2">
                        <a
                          href={item.pdfFile}
                          className="btn btn-outline-primary btn-sm"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Shiko më shumë
                        </a>

                        {item.deklarata && (
                          <a
                            href={item.deklarata}
                            className="btn btn-outline-secondary btn-sm"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            Deklarata nën betim
                          </a>
                        )}

                        {item.aplikacioni && (
                          <a
                            href={item.aplikacioni}
                            className="btn btn-outline-success btn-sm"
                            target="_blank"
                            rel="noopener noreferrer"
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

            {/* Show More/Less Button */}
            {filteredData.length > 12 && (
              <div className="text-center mt-5">
                <button
                  className="btn btn-primary px-4 py-2 rounded-pill d-inline-flex align-items-center"
                  onClick={toggleShowMore}
                >
                  {visibleCount === 12 ? (
                    <>
                      Shfaq të gjitha ({filteredData.length})
                      <FaChevronDown className="ms-2" />
                    </>
                  ) : (
                    <>
                      Shfaq më pak
                      <FaChevronUp className="ms-2" />
                    </>
                  )}
                </button>
              </div>
            )}
          </>
        ))}
      </div>

      {/* Custom Styles */}
      <style jsx>{`
        .hero-section {
          background: linear-gradient(135deg, #0d6efd 0%, #0b5ed7 100%);
          border-radius: 0 0 1rem 1rem;
        }
        
        .filter-controls .card {
          border-radius: 0.5rem;
          overflow: hidden;
        }
        
        .card {
          transition: all 0.25s ease;
          border-radius: 0.5rem;
        }
        
        .card:hover {
          transform: translateY(-0.25rem);
          box-shadow: 0 0.5rem 1.5rem rgba(0, 0, 0, 0.1);
        }
        
        .date-badge {
          font-size: 0.75rem;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
        }
        
        .empty-state-icon {
          opacity: 0.5;
        }
        
        .hover-shadow {
          box-shadow: 0 0.125rem 0.25rem rgba(0, 0, 0, 0.075);
        }
        
        .bg-gradient-primary {
          background: linear-gradient(to right, #0d6efd, #0b5ed7);
        }
      `}</style>
    </div>
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