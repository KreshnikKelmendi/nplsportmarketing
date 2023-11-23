import 'animate.css';

const Aksionaret = () => {
    return(
       <>
         {/* <div className="container-fluid py-5 staffBg bg-info" style={{marginBottom: "90px"}}>
            <div className="row py-5">
                <div className="col-12 pt-lg-5 mt-lg-5 text-center">
                    <h1 className="display-4 text-white animate__animated animate__slideInUp animate__slow">Bordi i Aksionarëve</h1>
                </div>
            </div>
         </div> */}

        <div class="container-xxl py-5 ">
            <div class="container">
                <div class="row g-5 justify-content-center align-items-center">
                    <h3 className="text-center text-uppercase">Bordi i Aksionarëve</h3>
                    <div class="col-lg-12 col-md-6 wow fadeInUp" data-wow-delay="0.7s">
                        <div class="team-item">
                            <div class="overflow-hidden position-relative">
                                {/* <img class="img-fluid" src={Bardhi} alt="" /> */}
                            </div>
                            <div class="text-center p-4">
                                <h5 class="mb-0">Elmire Nikçi Rexha</h5>
                                <small>Kryesuese e Bordit të Aksionarëve</small>
                            </div>
                        </div>
                    </div>

                    <div class="col-lg-12 col-md-6 wow fadeInUp" data-wow-delay="0.7s">
                        <div class="team-item">
                            <div class="overflow-hidden position-relative">
                                {/* <img class="img-fluid" src={Bardhi} alt="" /> */}
                            </div>
                            <div class="text-center p-4">
                                <h5 class="mb-0">Pellumb Bajcinovci</h5>
                                <small>Anëtar i Bordit të Aksionarëve</small>
                            </div>
                        </div>
                    </div>

                    <div class="col-lg-12 col-md-6 wow fadeInUp " data-wow-delay="0.7s">
                        <div class="team-item">
                            <div class="overflow-hidden position-relative">
                                {/* <img class="img-fluid" src={Bardhi} alt="" /> */}
                            </div>
                            <div class="text-center p-4">
                                <h5 class="mb-0">Endrit Zabërgja</h5>
                                <small>Anëtar i Bordit të Aksionarëve</small>
                            </div>
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
       </>
    )
}

export default Aksionaret;