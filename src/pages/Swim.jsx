const Swim = () => {
    return(
      <>
        <div className="container-fluid py-5 swimSingle" style={{marginBottom: "90px"}}>
            <div className="row py-5">
                <div className="col-12 text-center">
                    <h1 className="display-4 text-light animated zoomIn">Shkolla e notit</h1>
                </div>
            </div>
        </div>

        <div className="container-fluid">
        <div className="container">
            {/* <div className="section-title text-center position-relative pb-3 mb-5 mx-auto" style={{maxWidth: "600px"}}>
                <h5 className="text-dark text-uppercase">informata për shkollën e notit</h5>
            </div> */}
            <div className="row g-5">
                <div className="col-lg-6 col-md-6">
                    <div className="d-flex p-2 flex-column justify-content-center align-items-center">
                        <h5 className="mb-3 text-center text-uppercase text-dark textPoppins">Hapësira ideale për shkollën e notit!</h5>
                        <p className="m-0 textOn">
                            Pishina e Gërmisë ofron kushte për t’u zhvilluar edhe shkolla e notit. Klube të ndryshme 
                            por edhe shkolla të notit organizojnë aktivitetet e tyre te pishina e Gërmisë.
                        </p>
                    </div>
                </div>
                <div className="col-lg-6 col-md-6">
                    <div className="d-flex p-2 flex-column bg-bluecolor justify-content-center align-items-center">
                        <h5 className=" text-uppercase text-center text-white">çmimorja</h5>
                        <p className="extOn text-white">
                            1. Shkolla e Notit/per person — 12 ditë — 30.00 euro<br /><br />
                            2. Shkolla e Notit/per person — 6 ditë — 20.00 euro
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
      </>
    )
}

export default Swim;