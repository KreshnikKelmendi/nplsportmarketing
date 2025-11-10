import { member } from "../dataPova/members";

const NplStaff = () => {
  return (
    <div className="py-5 px-4 px-lg-5">
      <h3 className="text-center text-uppercase mb-5">Stafi</h3>
      <div className="row g-4 justify-content-center">
        {member?.map((staf, index) => (
          <div className="col-12 col-md-6 col-lg-4" key={index}>
            <div className="card h-100 shadow-sm border-0">
              <div
                className="overflow-hidden"
                style={{
                  minHeight: "300px",
                  height: "clamp(300px, 40vw, 30vw)", // adjusts based on screen size
                }}
              >
                <img
                  src={staf?.photo}
                  alt={staf?.name}
                  className="card-img-top"
                  style={{
                    height: "100%",
                    width: "100%",
                    objectFit: "cover",
                    objectPosition: "center",
                  }}
                />
              </div>
              <div className="card-body text-center">
                <h5 className="card-title mb-1 textOn3" style={{color: "black"}}>{staf?.name}</h5>
                <p className="card-text text-muted textOn3">{staf?.role}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NplStaff;
