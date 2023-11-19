import { Link } from "react-router-dom";
import "../App.css";

const OurServices = () => {
    return(
         <>
        <div className="container-fluid py-5">
            <div className="container py-5">
                <div className="section-title text-center position-relative pb-3 mb-5 mx-auto" style={{maxWidth: "600px"}}>
                    <h5 className="text-primary text-uppercase textPoppins">Shërbimet tona</h5>
                </div>
                <div className="row g-5">
                    <div className="col-lg-4 col-md-6" data-aos="fade-up">
                        <div className="service-item bg-germia rounded d-flex flex-column align-items-center justify-content-center text-center">
                            <div className="service-icon">
                                <i className="material-symbols-outlined text-white">waves</i>
                            </div>
                            
                            <Link onClick={() => window.scrollTo({
                            top: 0,
                            left: 0,
                            behavior: "smooth",
                        })} className="text-decoration-none text-dark" to="/pishina-germise">
                            <h5 className="text-darkBlack textPoppins linkHover">PISHINA E GËRMISË</h5>
                            </Link>
                            
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6">
                        <div className="service-item bg-tennisIcon rounded d-flex flex-column align-items-center justify-content-center text-center">
                            <div className="service-icon">
                                <i className="material-symbols-outlined text-white">sports_tennis</i>
                            </div>
                            
                            <Link onClick={() => window.scrollTo({
                        top: 0,
                        left: 0,
                        behavior: "smooth",
                    })} className="text-decoration-none text-dark" to="/fusha-tenisit">
                            <h5 className=" mb-3 text-darkBlack textPoppins linkHover">FUSHA E TENISIT</h5>
                            </Link>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 wow zoomIn" data-aos="fade-up">
                        <div className="service-item bg-amfiteatriIcon rounded d-flex flex-column align-items-center justify-content-center text-center">
                            <div className="service-icon">
                                <i className="material-symbols-outlined text-white">stadium</i>
                            </div>
                            
                            <Link onClick={() => window.scrollTo({
                        top: 0,
                        left: 0,
                        behavior: "smooth",
                    })} className="text-decoration-none text-dark" to="/amfiteatri">
                            <h5 className="mb-3 text-darkBlack textPoppins linkHover">AMFITEATRI</h5>
                            </Link>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 wow zoomIn" data-aos="fade-up">
                        <div className="service-item bg-notiIcon rounded d-flex flex-column align-items-center justify-content-center text-center">
                            <div className="service-icon">
                                <i className="material-symbols-outlined text-white">pool</i>
                            </div>
                            <Link onClick={() => window.scrollTo({
                        top: 0,
                        left: 0,
                        behavior: "smooth",
                    })} className="text-decoration-none text-dark " to="/shkolla-notit">
                            <h5 className="mb-3 text-darkBlack linkHover textPoppins">SHKOLLA E NOTIT</h5>

                            </Link>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 wow zoomIn" data-aos="fade-up">
                        <div className="service-item bg-skiIcon rounded d-flex flex-column align-items-center justify-content-center text-center">
                            <div className="service-icon">
                                <i className="material-symbols-outlined text-white"><span className="material-symbols-outlined">
                                    downhill_skiing
                                    </span></i>
                            </div>
                            <Link onClick={() => window.scrollTo({
                        top: 0,
                        left: 0,
                        behavior: "smooth",
                    })} className="text-decoration-none text-dark" to="/skijimi">
                                    <h5 className="mb-3 text-darkBlack textPoppins linkHover">SHKOLLA E SKIJIMIT DHE SHTËPIA E GURIT NË BREZOVICË</h5>
                            </Link>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 wow zoomIn" data-aos="fade-up">
                        <div className="service-item bg-campNpl rounded d-flex flex-column align-items-center justify-content-center text-center">
                            <div className="service-icon">
                                <i className="material-symbols-outlined text-white"><span className="material-symbols-outlined">
                                    camping
                                    </span></i>
                            </div>
                            <Link onClick={() => window.scrollTo({
                        top: 0,
                        left: 0,
                        behavior: "smooth",
                    })} className="text-decoration-none text-dark" to="/kampshtepiza">
                            <h5 className="mb-3 text-darkBlack textPoppins linkHover">FESTIVALET</h5>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
   
         </>
    )
}

export default OurServices;