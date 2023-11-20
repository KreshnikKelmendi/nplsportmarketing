import React, {useEffect} from "react";
import "../App.css"
import staff from "../img/staff.jpg"
import 'animate.css';
import { Link } from "react-router-dom";
import video1 from "../img/3x3.mp4";
import Video from "react-background-video-player";
import AOS from "aos";
import "aos/dist/aos.css";

const Mision = () => {
    useEffect(() => {
        AOS.init({ duration: 3000})
      }, [])

    return(
        <>
          <div className="container-fluid py-5 testat" data-aos="fade-down">
             <div className="container py-5">
                 <div className="row g-5">
                     <div className="col-lg-7 sectionText">
                        <div className="section-title position-relative pb-3 mb-2">
                            <h5 className="text-primary text-uppercase textPoppins">Misioni & Vizioni  </h5>
                        </div>
                            <p className="mb-4 col-lg-11 textOn">
                                 NPL "Sport Marketing" është ndërmarrje publike dhe mision i saj është zhvillimi dhe ofrimi i 
                                 shërbimeve, sic jane aktivitetet sportive, kulturore, komerciale të mirefillta me fokus në 
                                 qytetarin, të rinjët dhe të rejat e kryeqytetit tonë. Ne jemi ndërmarrja publike e vetme, 
                                 kujdestare për zhvillimin dhe përkrahjen e ideve dhe projekteve për qytetin tonë dhe më gjerë!
                            </p>
                            <p className="mb-4 col-lg-11 textOn3">
                                Vizioni i NPL “Sport Marketing” sh.a. Prishtinë, është të jetë lider në ofrimin e 
                                shërbimeve cilësore rekreativo-sportive. . .
                            </p>
                            <Link onClick={() => window.scrollTo({
                                top: 0,
                                left: 0,
                                })} to="/about-us" 
                                className="btn btn-sm py-2 px-4 rounded-2 misionBtn textOn3">
                                    Lexo më shumë
                            </Link>
                      </div>
                        <div className="col-lg-5">
                            <div className="position-relative h-100">
                                <img className="w-100 h-100 " 
                                    src={staff} 
                                    alt="" 
                                    style={{objectFit:"cover",borderRadius:"8px"}} />
                            </div>
                        </div>
                  </div>
              </div>
          </div>

    {/* VIDEO CONTENT */}

    <div className="container-fluid " data-aos="fade-up">
        <div className="container py-5">
            <div className="section-title text-center position-relative pb-3 mb-5 mx-auto" style={{maxWidth: "600px"}}>
                <h5 className="text-primary text-uppercase textPoppins">Promovim i sportit</h5>
                <p className="mb-0 textOn">
                    Menaxhmenti i NPL Sport Marketing
                    e ka për synim dhe strategji që të promovoj sportin si asnjëherë më parë, 
                    dhe në çfarëdo forme.
                </p>
            </div>
                <div className="row g-5">
                    <div className="col-lg-12 zoomIn" style={{minHeight: "350px"}}>
                        <div className="position-relative h-100">
                            <Video src={video1} muted autoPlay />
                        </div>
                    </div>
                </div>
        </div>
    </div>
  
        </>
    )
}

export default Mision;