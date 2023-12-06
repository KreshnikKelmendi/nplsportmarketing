import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import 'animate.css';
import { fetchDataFromApi } from './utils/api';
import { RingLoader } from 'react-spinners';

// Import the component using React.lazy


const NewsEvents = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const response = await fetchDataFromApi('/api/lajmets?populate=*');
      const { data: responseData } = response;

      const sortedData = responseData.sort((a, b) => new Date(b.attributes.date) - new Date(a.attributes.date));
      setData(sortedData);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching data:', error);
      setError('An error occurred while fetching data.');
      setLoading(false);
    }
  };

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
            {loading ? (
              <div className="text-center justify-content-center align-items-center">
                <RingLoader color="#007BFF" loading={loading} size={100} />
              </div>
            ) : (
              data?.map((item) => (
                <div className="col-lg-4" key={item.id}>
                  <div className="blog-item bg-light rounded overflow-hidden h-100">
                    <div className="blog-img position-relative overflow-hidden">
                      <img
                        className="blogImage"
                        src={item?.attributes?.img?.data[0]?.attributes?.url}
                        alt={item?.attributes?.title || 'Image'}
                      />
                    </div>
                    <div className="p-4">
                      <div className="d-flex mb-3">
                        <small className="text-success textOn">
                          <i className="far fa-calendar-alt text-primary me-2"></i>
                          {item?.attributes?.date}
                        </small>
                      </div>
                      <h5 className="mb-3 textOn text-uppercase">{item?.attributes?.title}</h5>
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
            )}
          </div>
        </div>
      </div>

      {error && <p style={{ color: 'red' }}>{error}</p>}
    </>
  );
};

export default NewsEvents;
