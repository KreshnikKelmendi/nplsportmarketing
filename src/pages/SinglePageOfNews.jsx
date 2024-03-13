import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { fetchDataFromApi } from "../utils/api";
import FetchData from "../hooks/FetchData";

const SinglePageOfNews = () => {
    const { id } = useParams();
    // const [data, setData] = useState(null);

    // useEffect(() => {
    //     singleProducts();
    // }, []);

    // const singleProducts = async () => {
    //     try {
    //         const { data } = await fetchDataFromApi(`/api/lajmets/${id}?populate=*`);
    //         setData(data);
    //     } catch (error) {
    //         console.error("Error fetching data:", error);
    //     }
    // };

    const apiUrl = "https://sportmarketing.onrender.com";
    const { loading, error, data } = FetchData(`${apiUrl}/api/lajmets/${id}?populate=*`);
    console.log('test', data)

    return (
        <>
            <div className="container-fluid py-lg-2">
                <div className="container-fluid px-lg-5 py-5">
                    <div className="row g-5">
                        <div className="col-lg-12">
                            <div className="mb-5 px-lg-5 mx-lg-5">
                                <img
                                    className="img-fluid w-100 rounded mb-5 singleImage"
                                    src={`${apiUrl}${data?.data?.attributes?.img?.data[0]?.attributes?.url}`}
                                    alt="eventsPhoto"
                                />
                                <h2 className="mb-4 textOn">{data?.data.attributes?.title}</h2>
                                <h6 className="text-success textOn">
                                    Data e publikimit:{" "}
                                    <small className="textOn">{data?.data.attributes?.date}</small>
                                </h6>
                                <p className="textOn">{data?.data?.attributes?.description}</p>
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
                        <img className="col-12 h-100 object-fit-cover" src={`${apiUrl}${data?.data?.attributes?.galery1?.data?.attributes?.url}`} alt="" />
                       </div>
                       <div className="col-lg-4">
                        <img className="col-12 h-100 object-fit-cover" src={`${apiUrl}${data?.data?.attributes?.galery2?.data?.attributes?.url}`} alt="" />
                       </div>
                       <div className="col-lg-4">
                        <img className="col-12 h-100 object-fit-cover" src={`${apiUrl}${data?.data?.attributes?.galery3?.data?.attributes?.url}`} alt="" />
                       </div>
                       </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default SinglePageOfNews;
