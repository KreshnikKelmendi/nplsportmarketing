import { member } from "../dataPova/members";

const NplStaff = () => {

    return (
     <>
      <div className="container-xxl py-5 ">
          <div className="container-fluid px-lg-5">
              <div className="row g-5 justify-content-center align-items-center">
              <h3 className="text-center text-uppercase">Stafi</h3>
              {member?.map((staf) => (
                  <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.7s">
                      <div className="team-item">
                          <div className="overflow-hidden position-relative">
                              <img className="img-fluid stafImage" src={staf?.photo} alt="" />
                          </div>
                          <div className="text-center border border-5 border-light border-top-0 p-4">
                              <h5 className="mb-0 textOn">{staf?.name}</h5>
                              <small className="textOn">{staf?.role}</small>
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