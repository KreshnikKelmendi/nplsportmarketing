import 'animate.css';
import artina from "../img/artina.png"

const Kryeshefi = () => {
  
    return(
       <>
        <div className="container-fluid py-lg-5 min-vh-100">
        <div className="container-fluid px-lg-3">
            <div className="d-flex kryeshefi justify-content-center align-items-center">
            <div className="col-lg-6">
                    <div className="section-title position-relative py-3 py-lg-0 mb-lg-3">
                        <h5 className="text-primary text-uppercase historyHeading">KRYESHEFI EKZEKUTIV</h5>
                        <h6>u.d ARTINA CANOLLI</h6>
                    </div>
                    <p className="mb-4 col-lg-11 textOn3">
                    
                    </p>
                </div>
                <div className="col-lg-6 h-auto mt-3 mt-lg-0"  >
                        <img className="col-12 staffPhoto p-xxl-5" alt="" src={artina} />
                </div>
                
            </div>
        </div>
    </div>
       </>
    )
}

export default Kryeshefi;