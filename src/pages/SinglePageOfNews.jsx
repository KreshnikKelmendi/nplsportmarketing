import { useParams } from "react-router-dom";
import { DataNews } from "../dataPova/dataNews";
// import FetchData from "../hooks/FetchData";

const SinglePageOfNews = () => {
    const { id } = useParams()

    // let { loading, error, data} = FetchData(`http://localhost:1337/api/latest-news/${id}?populate=*`)
 
    //  if (loading) return <p>Loading...</p>
    //  if (error) return <p>Error...</p>
    const product = DataNews?.find((item) => item.id == id)
    const {photo, name, date, description, galery1, galery2, galery3, galery4, galery5, galery6} = product;

    return(
         <>
           <div className="container-fluid py-5">
                <div className="container py-5">
                    <div className="row g-5">
                        <div className="col-lg-12">
                            <div className="mb-5">
                                <img className="img-fluid w-100 rounded mb-5 singleImage" 
                                    //  src={`http://localhost:1337${data?.data?.attributes?.image?.data?.attributes?.url}`} 
                                    src={photo} 
                                    alt="eventsPhoto"
                                />
                                {/* <h1 className="mb-4">{data?.data?.attributes?.title}</h1> */}
                                <h1 className="mb-4 textOn">{name}</h1>
                                <h6 className="text-success textOn">Data e publikimit: <small className="text-dark">{date}</small></h6>
                                {/* <h6 className="text-success">Data e publikimit: <small><b className="text-dark">
                                    {data?.data?.attributes?.date}</b></small>
                                </h6>
                                <p>{data?.data?.attributes?.description}</p> */}
                                <p>{description}</p>
                            </div>
                       </div>
                    </div>
                    <div className="col-12 text-center textOn text-uppercase">
                    <div className="section-title text-center position-relative pb-3 mb-5 mx-auto" style={{maxWidth: "600px"}}>
                <h5 className="fw-bold text-primary text-uppercase">galeria e eventit</h5>
            </div>
                        <div className="row g-4 justify-content-center">
                        <div className="col-lg-4">
                            <img className="col-12 object-fit-cover rounded-5" src={galery1} alt="" />
                        </div>
                        <div className="col-lg-4">
                            <img className="col-12 object-fit-cover rounded-5" src={galery5} alt="" />
                        </div>
                        <div className="col-lg-4">
                            <img className="col-12 object-fit-cover rounded-5" src={galery2} alt="" />
                        </div>
                        <div className="col-lg-4">
                            <img className="col-12 object-fit-cover rounded-5" src={galery3} alt="" />
                        </div>
                        <div className="col-lg-4">
                            <img className="col-12 object-fit-cover rounded-5" src={galery6} alt="" />
                        </div>
                        <div className="col-lg-4">
                            <img className="col-12 object-fit-cover rounded-5" src={galery4} alt="" />
                        </div>
                       
                        </div>
                    </div>
                </div>
           </div>
         </>
    )
}

export default SinglePageOfNews;