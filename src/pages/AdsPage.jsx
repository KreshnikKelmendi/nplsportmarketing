import { Link } from "react-router-dom";

import 'animate.css';
import { useEffect, useState } from "react";
import { fetchDataFromApi } from "../utils/api";


const AdsPage = () => {
    const [data, setData] = useState(null);

    useEffect(() => {
         fetchProducts()
    }, [])
 
    const fetchProducts = async () => {
        const { data } = await fetchDataFromApi("/api/lajmets")
        setData(data)
    }
    console.log("gg", data)

    return(
       <>
        <div className="container-fluid py-5 adsBg" style={{marginBottom: '90px'}}>
            <div className="row py-5">
                <div className="col-12 text-center">
                    <h1 className="display-2 text-white animate__animated animate__slideInUp animate__slow">Shpalljet</h1>
                </div>
            </div>
        </div>
  

        <div className="container-fluid py-5 wow fadeInUp">
            <div className="container">
                <div className="section-title text-center position-relative pb-3 mb-5 mx-auto" style={{maxWidth: '600px'}}>
                    <h5 className="fw-bold text-primary text-uppercase">Të fundit</h5>
                </div>
                    <div className="row g-5">
                        {data?.map((element) => (
                            <div className="col-lg-4 wow slideInUp" key={element.id}>
                                <div className="blog-item bg-light overflow-hidden h-100">
                                    <div className="blog-img position-relative overflow-hidden">
                                        <img className="blogImage" src={`http://localhost:1337${element?.attributes?.Image?.data?.attributes?.url}`} alt=""/>
                                    </div>
                                    <div className="p-4">
                                        <div className="d-flex mb-3">
                                            <small><i className="far fa-calendar-alt text-primary me-2"></i>{element?.attributes?.Date}</small>
                                        </div>
                                        <h5 className="mb-3 text-uppercase">{element?.attributes?.title}</h5>
                                        <Link onClick={() => window.scrollTo({
                                                top: 0,
                                                left: 0,
                                            })}  to={`/ads/${element.id}`} className="text-uppercase text-decoration-none">shiko konkursin<i className="bi bi-arrow-right"></i></Link>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
            </div>
        </div>
       </>
    )
}

export default AdsPage;