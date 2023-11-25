import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { fetchDataFromApi } from "../utils/api";

const SinglePageOfNews = () => {
    const { id } = useParams();
    const [data, setData] = useState(null);

    useEffect(() => {
        singleProducts();
    }, []);

    const singleProducts = async () => {
        try {
            const { data } = await fetchDataFromApi(`/api/lajmets/${id}?populate=*`);
            setData(data);
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    };

    const renderGalleryImages = () => {
        const galleryImages = [
            data?.attributes?.image1,
            data?.attributes?.image2,
            data?.attributes?.image3,
            data?.attributes?.image4,
            data?.attributes?.image5,
            data?.attributes?.image6,
        ];

        return (
            galleryImages &&
            galleryImages
                .filter((image) => image) // Filter out null or undefined values
                .map((image, index) => (
                    <div className="col-lg-4" key={index}>
                        {image?.data?.[0]?.attributes?.url && (
                            <img
                                className="col-12 galerySingle object-fit-cover rounded-5"
                                src={image.data[0].attributes.url}
                                alt={`galleryImage-${index}`}
                            />
                        )}
                    </div>
                ))
        );
    };

    return (
        <>
            <div className="container-fluid py-lg-2">
                <div className="container-fluid px-lg-5 py-5">
                    <div className="row g-5">
                        <div className="col-lg-12">
                            <div className="mb-5 px-lg-5 mx-lg-5">
                                <img
                                    className="img-fluid w-100 rounded mb-5 singleImage"
                                    src={data?.attributes?.img?.data[0]?.attributes?.url}
                                    alt="eventsPhoto"
                                />
                                <h2 className="mb-4 textOn">{data?.attributes?.title}</h2>
                                <h6 className="text-success textOn">
                                    Data e publikimit:{" "}
                                    <small className="textOn">{data?.attributes?.date}</small>
                                </h6>
                                <p className="textOn">{data?.attributes?.description}</p>
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
                        <div className="row g-4 justify-content-center px-lg-5 mx-lg-5">
                            {renderGalleryImages()}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default SinglePageOfNews;
