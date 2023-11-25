import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import { fetchDataFromApi } from "../utils/api";

const SinglePageOfAds = () => {
    const { id } = useParams()
    const [data, setData] = useState(null);

    useEffect(() => {
         singleProducts()
    }, [])
 
    const singleProducts = async () => {
        const { data } = await fetchDataFromApi(`/api/shpalljets/${id}?populate=*`)
        setData(data)
    }
    // console.log("id", data)

    return(
       <>
         <div className="container-fluid py-5 wow fadeInUp" data-wow-delay="0.1s">
                <div className="container-fluid px-lg-5">
                    <div className="row g-5">
                        <div className="col-lg-12">
                        <div className="mb-5 px-lg-5 mx-lg-5">
                            <img className="img-fluid w-100 rounded mb-5 singleAdsImage" 
                                     src={data?.attributes?.image?.data[0]?.attributes?.url} 
                                     alt=""
                                />
                                <h2 className="mb-4 textOn">{data?.attributes?.title}</h2>
                                <h6 className="text-success textOn">Data e publikimit: <small className="textOn">
                                    {data?.attributes?.date}</small>
                                </h6>
                                <p className="textOn">{data?.attributes?.description}</p>
                            </div>
                       </div>
                    </div>
                </div>
           </div>
       </>
    )
}

export default SinglePageOfAds;