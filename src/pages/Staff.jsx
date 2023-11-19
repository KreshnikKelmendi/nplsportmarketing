import Bardhi from "../img/bardhi.png";
import 'animate.css';

const Staff = () => {
    return(
       <>
        <div className="container-fluid py-5 staffBg bg-info" style={{marginBottom: "90px"}}>
            <div className="row py-5">
                <div className="col-12 pt-lg-5 mt-lg-5 text-center">
                    <h1 className="display-4 text-white animate__animated animate__slideInUp animate__slow">Bordi i Drejtorëve</h1>
                </div>
            </div>
        </div>

        <div class="container-xxl py-5 ">
            <div class="container">
                <div class="row g-4 justify-content-center align-items-center">
                    <div class="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                        <div class="team-item">
                            <div class="overflow-hidden position-relative">
                                <img class="img-fluid" src={Bardhi} alt=""/>
                            </div>
                            <div class="text-center border border-5 border-light border-top-0 p-4">
                                <h5 class="mb-0">Flamur Beqiri</h5>
                                <small>Kryesues i Bordit të Drejtorëve</small>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
                        <div class="team-item">
                            <div class="overflow-hidden position-relative">
                                <img class="img-fluid" src={Bardhi} alt=""/>
                            </div>
                            <div class="text-center border border-5 border-light border-top-0 p-4">
                                <h5 class="mb-0">Dardane Sadiku</h5>
                                <small>Anëtare e Bordit të Drejtorëve</small>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
                        <div class="team-item">
                            <div class="overflow-hidden position-relative">
                                <img class="img-fluid" src={Bardhi} alt=""/>
                            </div>
                            <div class="text-center border border-5 border-light border-top-0 p-4">
                                <h5 class="mb-0">Ganimete Ismajli</h5>
                                <small>Anëtare e Bordit të Drejtorëve</small>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
       </>
    )
}

export default Staff;