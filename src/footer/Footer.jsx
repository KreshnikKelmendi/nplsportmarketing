import { Link } from "react-router-dom";
import logoNpl from "../img/12logo.png";

const Footer = () => {
    return(
       <>
        <div className="container-fluid bg-footerBackground text-light mt-5">
        <div className="container">
            <div className="row gx-5">
                <div className="col-lg-6 col-md-6 footer-about">
                    <div className="d-flex flex-column align-items-center justify-content-center text-center h-100 p-4">
                        <Link to="/" onClick={() => window.scrollTo({
                                        top: 0,
                                        left: 0,
                                        behavior: "smooth",
                                    })}><img className="col-5" src={logoNpl} alt="" /></Link>
                     
                    </div>
                </div>
                <div className="col-lg-6 col-md-6">
                    <div className="row gx-5">
                        <div className="col-lg-12 col-md-12 py-3 ">
                            <div className="section-title1 section-title-sm position-relative pb-3 mb-2">
                                <h4 className="text-light mb-0 textOn">Kontakti</h4>
                            </div>
                            <div className="d-flex mb-1 ">
                                <i className="bi bi-geo-alt text-white me-2"></i>
                                <p className="mb-0 textOn text-light">Pallati i Rinisë dhe Sporteve "Adem Jashari"</p>
                            </div>
                            <div className="d-flex mb-1">
                                <i className="bi bi-envelope-open text-white me-2"></i>
                                <p className="mb-0 textOn text-light">info@nplsportmarketing.com</p>
                            </div>
                            <div className=" ">
                                <i className="bi bi-telephone text-white me-2"></i>
                                <p className="mb-0 mx-3 textOn text-light">049 506 260 - Marketing</p>
                                <p className="mb-0 mx-3 textOn text-light">038 704 779 - Administrata</p>
                                <p className="mb-0 mx-3 textOn text-light">049 442 203 - Zyra ligjore</p>
                            </div>
                            <div className="d-flex mt-4">
                                <a className="btn btn-outline-light btn-square me-2" href="https://www.facebook.com/nplsportmarketing" title="Na ndiqni në Facebook" target="_blank" rel="noreferrer"><i className="fab fa-facebook-f fw-normal"></i></a>
                                <a className="btn btn-outline-light btn-square" href="https://www.instagram.com/sportmarketing.sh.a/" title="Na ndiqni në Instagram" target="_blank" rel="noreferrer"><i className="fab fa-instagram fw-normal"></i></a>
                            </div>
                        </div>
                        {/* <div className="col-lg-4 col-md-12 pt-0 pt-lg-5 mb-5 mx-lg-5">
                            <div className="section-title1 section-title-sm position-relative pb-3 mb-4">
                                <h4 className="text-light mb-0 textOn">Menu</h4>
                            </div>
                            <div className="link-animated d-flex flex-column justify-content-start textOn">
                                <Link onClick={() => window.scrollTo({
                                        top: 0,
                                        left: 0,
                                        behavior: "smooth",
                                    })} className="text-decoration-none text-light mb-2" to="/"><i className="bi bi-arrow-right text-white me-2"></i>Ballina</Link>
                                <Link onClick={() => window.scrollTo({
                                        top: 0,
                                        left: 0,
                                        behavior: "smooth",
                                    })} className="text-decoration-none text-light mb-2" to="/news"><i className="bi bi-arrow-right text-white me-2"></i>Lajme</Link>
                                <Link onClick={() => window.scrollTo({
                                        top: 0,
                                        left: 0,
                                        behavior: "smooth",
                                    })} className="text-decoration-none text-light mb-2" to="/ads"><i className="bi bi-arrow-right text-white me-2"></i>Shpalljet</Link>
                                <Link onClick={() => window.scrollTo({
                                        top: 0,
                                        left: 0,
                                        behavior: "smooth",
                                    })} className="text-decoration-none text-light mb-2" to="/staff"><i className="bi bi-arrow-right text-white me-2"></i>Menaxhmenti</Link>
                                <Link onClick={() => window.scrollTo({
                                        top: 0,
                                        left: 0,
                                        behavior: "smooth",
                                    })} className="text-decoration-none text-light mb-2" to="/about-us"><i className="bi bi-arrow-right text-white me-2"></i>Rreth Nesh</Link>
                                <Link onClick={() => window.scrollTo({
                                        top: 0,
                                        left: 0,
                                        behavior: "smooth",
                                    })} className="text-decoration-none text-light" to="/contact"><i className="bi bi-arrow-right text-white me-2"></i>Kontakti</Link>
                            </div>
                        </div> */}
                       
                    </div>
                </div>
            </div>
        </div>
    </div>
 
       </>
    )
}

export default Footer;