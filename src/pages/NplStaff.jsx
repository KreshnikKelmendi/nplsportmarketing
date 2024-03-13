import FetchData from "../hooks/FetchData";


const NplStaff = () => {
    const apiUrl = "https://sportmarketing.onrender.com";
  const { loading, error, data } = FetchData(`${apiUrl}/api/stafis?populate=*`);
 console.log("dd", data)
    return (
     <>
      <div className="container-xxl py-5 ">
          <div className="container-fluid px-lg-5">
              <div className="row g-5 justify-content-center align-items-center">
              <h3 className="text-center text-uppercase">Stafi</h3>
              {data?.data?.map((staf) => (
                  <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.7s">
                      <div className="team-item">
                          <div className="overflow-hidden position-relative">
                              <img className="img-fluid" src={`${apiUrl}${staf?.attributes?.image?.data[0]?.attributes?.url}`} alt="" />
                          </div>
                          <div className="text-center border border-5 border-light border-top-0 p-4">
                              <h5 className="mb-0 textOn">{staf?.attributes?.emriMbiemri}</h5>
                              <small className="textOn">{staf?.attributes?.pozita}</small>
                          </div>
                      </div>      
                  </div>
            ))}
              </div>
          </div>
      </div>
    </>
    )
}


export default NplStaff;