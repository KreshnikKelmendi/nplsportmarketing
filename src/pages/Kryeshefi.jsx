import FetchData from "../hooks/FetchData";
import Bardhi from "../img/59b.jpg";
import 'animate.css';

const Kryeshefi = () => {
    const apiUrl = "https://sportmarketing.onrender.com";
    const { loading, error, data } = FetchData(`${apiUrl}/api/kryeshefi-ekzekutivs?populate=*`);
  
    console.log("kryeshefi", data)
    return(
       <>
        <div className="container-fluid py-lg-5 min-vh-100">
        <div className="container-fluid px-lg-3">
            <div className="d-flex kryeshefi justify-content-center align-items-center">
            <div className="col-lg-6">
                    <div className="section-title position-relative py-3 py-lg-0 mb-lg-3">
                        <h5 className="text-primary text-uppercase historyHeading">KRYESHEFI EKZEKUTIV</h5>
                        <h6>{data?.data[0]?.attributes?.emri}</h6>
                    </div>
                    <p className="mb-4 col-lg-11 textOn3">
                    {data?.data[0]?.attributes?.biografia}
                    </p>
                </div>
                <div className="col-lg-6 h-auto mt-3 mt-lg-0"  >
                        <img className="col-12 staffPhoto p-xxl-5" alt=""  src={`${apiUrl}${data?.data[0].attributes?.image?.data?.attributes?.url}`} style={{objectFit: "cover"}} />
                </div>
                
            </div>
        </div>
    </div>
       </>
    )
}

export default Kryeshefi;