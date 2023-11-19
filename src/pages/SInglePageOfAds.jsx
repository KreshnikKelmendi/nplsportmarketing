import { useParams } from "react-router-dom"
import FetchData from "../hooks/FetchData"

const SinglePageOfAds = () => {
    const { id } = useParams()

    let { loading, error, data} = FetchData(`http://localhost:1337/api/shpalljets/${id}?populate=*`)
 
     if (loading) return <p>Loading...</p>
     if (error) return <p>Error...</p>
    return(
       <>
         <div className="container-fluid py-5 wow fadeInUp" data-wow-delay="0.1s">
                <div className="container py-5">
                    <div className="row g-5">
                        <div className="col-lg-12">
                            <div className="mb-5">
                                <img className="img-fluid w-100 rounded mb-5 object-fit-cover singleImage" 
                                     src={`http://localhost:1337${data?.data?.attributes?.Image?.data?.attributes?.url}`} 
                                     alt=""
                                />
                                <h1 className="mb-4">{data?.data?.attributes?.Title}</h1>
                                <h6 className="text-success">Data e publikimit: <small><b className="text-dark">
                                    {data?.data?.attributes?.Date}</b></small>
                                </h6>
                                <p>{data?.data?.attributes?.Description}</p>
                            </div>
                       </div>
                    </div>
                </div>
           </div>
       </>
    )
}

export default SinglePageOfAds;