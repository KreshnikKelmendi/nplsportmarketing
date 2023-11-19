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

const fadeImages = [
    {url: germia1,},
    {url: germia2,},
    {url: germia3}
   ];


const MainPage = () => {
    return(
    <>
        <div id="header-carousel" className="carousel slide carousel-fade" data-bs-ride="carousel">
            <Fade arrows={false}>
                {fadeImages.map((fadeImages, index) => (
                    <div className="carousel-inner" key={index}>
                        <div className="carousel-item active">
                            <img className="col-12" src={fadeImages?.url} alt="" />
                            <div className="carousel-caption d-flex flex-column justify-content-center align-items-center py-5">
                                <div className="p-3 py-lg-5" style={{maxWidth: "900px"}}>
                                    <h1 className="display-4 textNpl  mb-5">NPL - Sport Marketing Prishtinë</h1>
                                </div>
                            </div>
                        </div>
                    </div>
                ))} 
            </Fade>

         <div className="three_box">
            <div className="container">
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