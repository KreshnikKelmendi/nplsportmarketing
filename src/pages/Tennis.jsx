const Tennis = () => {
    return(
        <>
          <div className="container-fluid py-5 tennisSingle" style={{marginBottom: "90px"}}>
            <div className="row py-5">
                <div className="col-12 text-center">
                    <h1 className="display-4 text-light animated zoomIn">Fushat e tenisit</h1>
                </div>
            </div>
        </div>

        <div className="container-fluid">
        <div className="container">
            {/* <div className="section-title text-center position-relative pb-3 mb-5 mx-auto" style={{maxWidth: "600px"}}>
                <h5 className="text-dark text-uppercase">informata për fushat e tenisit</h5>
            </div> */}
            <div className="row g-5">
                <div className="col-lg-6 col-md-6">
                    <div className="d-flex flex-column align-items-center">
                        <h5 className="p-2 text-center text-uppercase text-dark textPoppins">Klubet dhe shkollat e tenisit</h5>
                        <p className="lh-md textOn col-lg-11">
                            Fusha e tenisit në Gërmi është një aset i çmuar për komunën e Prishtinës. 
                            Klubet dhe shkollat e tenisit mund ta shfrytëzojnë rregullisht fushat tona të tenisit, 
                            ku ofrohen kushte të shkëlqyera për zhvillimin e këtij sporti. 
                        </p>                       
                    </div>
                </div>
                <div className="col-lg-6 col-md-6">
                    <div className="p-2 d-flex flex-column bg-bluecolor align-items-center">
                        <h5 className="text-uppercase text-center text-white">çmimorja</h5>
                        <p className="lh-md textOn text-white">
                            1. Shfrytëzimi i fushave të tenisit (për person) — 2.00 euro/orë<br /><br />
                            2. Shfrytëzimi i dy fushave të tenisit (prej ores 10:00 – 18:00) — 50.00 euro/ditë<br /><br />
                            3. Shfrytëzimi i dy fushave të tenisit (për një muaj) — 50×30=1500-20%=1200 euro — 20% (nga pika 13).<br /><br />
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
        </>
    )
}

export default Tennis;