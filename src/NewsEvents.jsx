import { Link } from "react-router-dom";
import FetchData from "./hooks/FetchData";
import 'animate.css';
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { DataNews } from "./dataPova/dataNews";

const NewsEvents = () => {

    useEffect(() => {
        AOS.init({ duration: 3000})
      }, [])

    // // const baseUrl = process.env.REACT_APP_API_URL
    // const { loading, error, data } = FetchData('http://localhost:1337/api/latest-news?populate=*')

    // if (loading) return <p>Loading...</p>
    // if (error) return <p>Error...</p>
   
    // console.log("test", data)

    return(
       <>
        <div className="container-fluid py-5 newsBg" style={{marginBottom: "90px"}}>
            <div className="row py-5">
                <div className="col-12 pt-lg-5 mt-lg-5 text-center">
                    <h1 className="display-5 text-white">Lajme & Ngjarje</h1>
                </div>
            </div>
        </div>

        <div className="container-fluid">
            <div className="container">
                <div className="section-title text-center position-relative pb-3 mb-5 mx-auto" style={{maxWidth: "600px"}}>
                    <h5 className="textOn text-primary text-uppercase">
                        Të fundit
                    </h5>
                </div>
                <div className="row g-5">
                    {DataNews?.map((item) => (
                            <div className="col-lg-4" key={item.id}>
                                <div className="blog-item bg-light rounded overflow-hidden h-100" data-aos="fade-down">
                                    <div className="blog-img position-relative overflow-hidden">
                                        <img className="blogImage" 
                                            src={item?.photo} 
                                            alt="" 
                                        />
                                    </div>
                                        <div className="p-4 ">
                                            <div className="d-flex mb-3">
                                                <small><i className="far fa-calendar-alt text-primary me-2"></i>
                                                    {item?.date}
                                                </small>
                                            </div>
                                                <h5 className="mb-3 textOn text-uppercase">
                                                    {item?.name}
                                                </h5>
                                                <Link onClick={() => window.scrollTo({
                                                        top: 0,
                                                        left: 0,
                                                    })} to={`/news/${item.id}`} 
                                                    className="text-uppercase text-primary textOn text-decoration-none">
                                                        Lexo më shumë<i className="mx-2 bi bi-arrow-right"></i>
                                                </Link>
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

export default NewsEvents;