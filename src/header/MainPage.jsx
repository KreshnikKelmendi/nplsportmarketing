import germia1 from "../img/sunset.png";
import germia2 from "../img/slide2Npl.png";
import germia3 from "../img/66.png";
import 'animate.css';
import { Fade } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import sport from "../img/Sport.png";
import kultura from "../img/Kultura.png";
import natyra from "../img/Natyre.png";
import marketing from "../img/rrethiMarketing-01.png";
import { useNavigate } from 'react-router-dom';

const fadeImages = [
    {url: germia1,},
    {url: germia2,},
    {url: germia3}
   ];


const MainPage = () => {
    const navigate = useNavigate();
    
    const handleShpalljetClick = () => {
        navigate('/shpalljet');
    };
    
    const handleKontaktiClick = () => {
        navigate('/contact');
    };

    return(
    <>
        <style>
            {`
                @media (min-width: 768px) {
                    .btn-md-lg {
                        padding: 12px 30px !important;
                        font-size: 1.1rem !important;
                        min-width: 180px !important;
                    }
                }
                
                .carousel-indicators {
                    position: absolute;
                    bottom: 20px;
                    left: 50%;
                    transform: translateX(-50%);
                    display: flex;
                    gap: 8px;
                    z-index: 10;
                }
                
                .carousel-indicator {
                    width: 12px;
                    height: 12px;
                    border-radius: 50%;
                    background: rgba(255, 255, 255, 0.5);
                    border: 2px solid rgba(255, 255, 255, 0.8);
                    cursor: pointer;
                    transition: all 0.3s ease;
                }
                
                .carousel-indicator.active {
                    background: rgba(0, 123, 255, 0.9);
                    border-color: white;
                    transform: scale(1.2);
                }
                
                .carousel-indicator:hover {
                    background: rgba(255, 255, 255, 0.8);
                    transform: scale(1.1);
                }
                
                @media (max-width: 768px) {
                    .carousel-indicators {
                        bottom: 15px;
                    }
                    
                    .carousel-indicator {
                        width: 10px;
                        height: 10px;
                    }
                }
            `}
        </style>
        <div id="header-carousel" className="carousel slide carousel-fade" data-bs-ride="carousel">
            <Fade arrows={false}>
                {fadeImages.map((fadeImages, index) => (
                    <div className="carousel-inner" key={index}>
                        <div className="carousel-item active">
                            <img className="col-12" src={fadeImages?.url} alt="" />
                            <div className="carousel-caption d-flex flex-column justify-content-center align-items-center py-5">
                                <div className="p-3 py-lg-5" style={{maxWidth: "900px"}}>
                                    <h1 className="display-4 textNpl  mb-5">NPL - Sport Marketing Prishtinë</h1>
                                    <div className="d-flex gap-2 gap-md-3 justify-content-center flex-wrap mt-3">
                                        <button 
                                            className="btn btn-primary btn-sm btn-md-lg" 
                                            onClick={handleShpalljetClick}
                                            style={{
                                                backgroundColor: '#007bff',
                                                border: 'none',
                                                borderRadius: '8px',
                                                padding: '8px 20px',
                                                fontSize: '0.9rem',
                                                fontWeight: 'bold',
                                                boxShadow: '0 4px 8px rgba(0,0,0,0.2)',
                                                transition: 'all 0.3s ease',
                                                minWidth: '140px'
                                            }}
                                            onMouseOver={(e) => {
                                                e.target.style.backgroundColor = '#0056b3';
                                                e.target.style.transform = 'translateY(-2px)';
                                                e.target.style.boxShadow = '0 6px 12px rgba(0,0,0,0.3)';
                                            }}
                                            onMouseOut={(e) => {
                                                e.target.style.backgroundColor = '#007bff';
                                                e.target.style.transform = 'translateY(0)';
                                                e.target.style.boxShadow = '0 4px 8px rgba(0,0,0,0.2)';
                                            }}
                                        >
                                            Shiko Shpalljet
                                        </button>
                                        <button 
                                            className="btn btn-sm btn-md-lg" 
                                            onClick={handleKontaktiClick}
                                            style={{
                                                backgroundColor: 'white',
                                                border: '2px solid #007bff',
                                                borderRadius: '8px',
                                                padding: '8px 20px',
                                                fontSize: '0.9rem',
                                                fontWeight: 'bold',
                                                boxShadow: '0 4px 8px rgba(0,0,0,0.2)',
                                                transition: 'all 0.3s ease',
                                                minWidth: '140px',
                                                color: '#007bff'
                                            }}
                                            onMouseOver={(e) => {
                                                e.target.style.backgroundColor = '#f8f9fa';
                                                e.target.style.transform = 'translateY(-2px)';
                                                e.target.style.boxShadow = '0 6px 12px rgba(0,0,0,0.3)';
                                            }}
                                            onMouseOut={(e) => {
                                                e.target.style.backgroundColor = 'white';
                                                e.target.style.transform = 'translateY(0)';
                                                e.target.style.boxShadow = '0 4px 8px rgba(0,0,0,0.2)';
                                            }}
                                        >
                                            Kontakti
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))} 
            </Fade>
            
            <div className="carousel-indicators">
                {fadeImages.map((_, index) => (
                    <div 
                        key={index} 
                        className={`carousel-indicator ${index === 0 ? 'active' : ''}`}
                        onClick={() => {
                            // This would need to be connected to the slide functionality
                            // For now, it's just visual
                        }}
                    />
                ))}
            </div>

         <div className="three_box">
            <div className="container-fluid px-lg-5">
               <div className="row justify-content-center align-items-center">
                  <div className="px-1 col-md-3 col-lg-2 col-xl-3">
                     <div id="text_hover1" className="const text_align_center custom-div">
                        <i><img className="img-fluid w-25" src={sport} alt=""/></i>
                        <span>SPORT</span>
                     </div>
                  </div>
                  <div className="px-1 col-md-3 col-lg-2 col-xl-3">
                     <div id=" text_hover2" className="const text_align_center custom-div">
                        <i><img className="img-fluid w-25" src={natyra} alt=""/></i>
                        <span>NATYRË</span>
                     </div>
                  </div>
                  <div className="px-1 col-md-3 col-lg-2 col-xl-3">
                     <div id="text_hover3" className="const text_align_center custom-div">
                        <i><img className="img-fluid w-25" src={kultura} alt="" /></i>
                        <span>KULTURË</span>
                     </div>
                  </div>
                  <div className="px-1 col-md-3 col-lg-2 col-xl-3">
                     <div id="text_hover4" className="const text_align_center custom-div">
                        <i><img className="img-fluid w-25" src={marketing} alt="" /></i>
                        <span>MARKETING</span>
                     </div>
                  </div>
               </div>
            </div>
         </div>
        </div>
    </>
    )
}

export default MainPage;