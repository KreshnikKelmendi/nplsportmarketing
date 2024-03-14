import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import 'animate.css';
import { RingLoader } from 'react-spinners';
import { DataNews } from './dataPova/dataNews';

const NewsEvents = React.memo(() => {
  const [data, setData] = useState(DataNews);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  return (
    <>
      <div className="container-fluid py-5 newsBg" style={{ marginBottom: '50px' }}>
        <div className="row py-5">
          <div className="col-12 text-center">
            <h1 className="display-4 text-white">Lajme & Ngjarje</h1>
          </div>
        </div>
      </div>

      <div className="container-fluid">
        <div className="container-fluid px-lg-5">
          <div className="section-title text-center position-relative pb-3 mb-5 mx-auto" style={{ maxWidth: '600px' }}>
            <h5 className="textOn text-primary text-uppercase">Të fundit</h5>
          </div>
          <div className="row g-5">
            {
              DataNews?.map((item) => (
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
                      <h5 className="mb-3 textOn text-uppercase">{item?.name}</h5>
                      <Link
                        onClick={() =>
                          window.scrollTo({
                            top: 0,
                            left: 0,
                          })
                        }
                        to={`/news/${item.id}`}
                        className="linkHover textOn text-decoration-none"
                      >
                        Lexo më shumë<i className="mx-2 bi bi-arrow-right"></i>
                      </Link>
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

export default NewsEvents;
