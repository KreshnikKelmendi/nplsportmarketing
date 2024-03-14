import { useParams } from "react-router-dom";
import { DataNews } from "../dataPova/dataNews";

const SinglePageOfNews = () => {
    const { id } = useParams();
    const ad = DataNews?.find((ad) => ad.id == id);
  
    if (!ad) {
      return <div className='justify-content-center align-items-center text-center'>LAJMI NUK U GJET</div>;
    }

     const { photo, name, date, description, galery1, galery2, galery3, galery4, galery5, galery6 } = ad
    return (
        <>
            <div className="container-fluid py-lg-2">
                <div className="container-fluid px-lg-5 py-5">
                    <div className="row g-5">
                        <div className="col-lg-12">
                            <div className="mb-5 px-lg-5 mx-lg-5">
                                <img
                                    className="img-fluid w-100 rounded mb-5 singleImage"
                                    src={photo}
                                    alt="eventsPhoto"
                                />
                                <h2 className="mb-4 textOn">{name}</h2>
                                <h6 className="text-success textOn">
                                    Data e publikimit:{" "}
                                    <small className="textOn">{date}</small>
                                </h6>
                                <p className="textOn">{description}</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 text-center textOn text-uppercase">
                        <div
                            className="section-title text-center position-relative pb-3 mb-5 mx-auto"
                            style={{ maxWidth: "600px" }}
                        >
                            <h5 className="fw-bold text-primary text-uppercase">galeria e eventit</h5>
                        </div>
                        <div className="row px-lg-5 mx-lg-5 gap-1 gap-lg-0">
                       <div className="col-lg-4">
                        <img className="col-12 h-100 object-fit-cover" src={galery1} alt="" />
                       </div>
                       <div className="col-lg-4">
                        <img className="col-12 h-100 object-fit-cover" src={galery2} alt="" />
                       </div>
                       <div className="col-lg-4">
                        <img className="col-12 h-100 object-fit-cover" src={galery3} alt="" />
                       </div>
                       <div className="col-lg-4">
                        <img className="col-12 h-100 object-fit-cover" src={galery4} alt="" />
                       </div>
                       <div className="col-lg-4">
                        <img className="col-12 h-100 object-fit-cover" src={galery5} alt="" />
                       </div>
                       <div className="col-lg-4">
                        <img className="col-12 h-100 object-fit-cover" src={galery6} alt="" />
                       </div>
                       </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default SinglePageOfNews;
