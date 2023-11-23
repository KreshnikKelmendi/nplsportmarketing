import firstStaff from "../img/Untitled-2.png";
import medina from "../img/MK.png";
import artina from "../img/artina.png";
import albulena from "../img/albulena.png";
import gentiana from "../img/gentiana.png";
import arlinda from "../img/arlinda.jpg";


const NplStaff = () => {
    return (
<>
        {/* <div className="container-fluid py-5 bg-dark" style={{marginBottom: "90px"}}>
        <div className="row py-5">
            <div className="col-12 pt-lg-5 mt-lg-5 text-center">
                <h1 className="display-4 text-white animate__animated animate__slideInUp animate__slow">Stafi</h1>
            </div>
        </div>
    </div> */}


      <div className="container-xxl py-5 ">
          <div className="container-fluid px-lg-5">
              <div className="row g-5 justify-content-center align-items-center">
              <h3 className="text-center text-uppercase">Stafi</h3>
                  <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.7s">
                      <div className="team-item">
                          <div className="overflow-hidden position-relative">
                              <img className="img-fluid" src={medina} alt="" />
                          </div>
                          <div className="text-center border border-5 border-light border-top-0 p-4">
                              <h5 className="mb-0 textOn">Medina Krasniqi</h5>
                              <small className="textOn">Asistente Ekzekutive</small>
                          </div>
                      </div>
                  </div>

                  <div className="col-lg-4 col-md-6">
                      <div className="team-item">
                          <div className="overflow-hidden position-relative">
                              <img className="img-fluid" src={arlinda} alt="" />
                          </div>
                          <div className="text-center border border-5 border-light border-top-0 p-4">
                              <h5 className="mb-0 textOn">Arlinda Uka</h5>
                              <small className="textOn">Koordinatore e eventeve rekreativo-sportive</small>
                          </div>
                      </div>
                  </div>

                  <div className="col-lg-4 col-md-6">
                      <div className="team-item">
                          <div className="overflow-hidden position-relative">
                              <img className="img-fluid" src={firstStaff} alt="" />
                          </div>
                          <div className="text-center border border-5 border-light border-top-0 p-4">
                              <h5 className="mb-0 textOn">Teuta Berisha</h5>
                              <small className="textOn">Zyrtare Ligjore</small>
                          </div>
                      </div>
                  </div>

                  <div className="col-lg-4 col-md-6">
                      <div className="team-item">
                          <div className="overflow-hidden position-relative">
                              <img className="img-fluid" src={artina} alt="" />
                          </div>
                          <div className="text-center border border-5 border-light border-top-0 p-4">
                              <h5 className="mb-0 textOn">Artina Canolli</h5>
                              <small className="textOn">Zyrtare e Marketingut</small>
                          </div>
                      </div>
                  </div>

                  <div className="col-lg-4 col-md-6">
                      <div className="team-item">
                          <div className="overflow-hidden position-relative">
                              <img className="img-fluid" src={albulena} alt="" />
                          </div>
                          <div className="text-center border border-5 border-light border-top-0 p-4">
                              <h5 className="mb-0 textOn">Albulena Statovci</h5>
                              <small className="textOn">Zyrtare e Protokollit</small>
                          </div>
                      </div>
                  </div>

                  <div className="col-lg-4 col-md-6 wow fadeInUp " data-wow-delay="0.7s">
                      <div className="team-item">
                          <div className="overflow-hidden position-relative">
                              <img className="img-fluid" src={gentiana} alt="" />
                          </div>
                          <div className="text-center border border-5 border-light border-top-0 p-4">
                              <h5 className="mb-0 textOn">Gentiana Daci</h5>
                              <small className="textOn">Zyrtare e Burimeve Njerzore</small>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </div>
    </>
    )
}


export default NplStaff;