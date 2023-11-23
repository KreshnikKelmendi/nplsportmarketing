const Ski = () => {
    return(
       <>
          <div className="container-fluid py-5 skiSingle" style={{marginBottom: "90px"}}>
            <div className="row py-5">
                <div className="col-12 text-center">
                    <h5 className="display-6 text-light animated zoomIn">SHKOLLA E SKIJIMIT DHE SHTËPIA E GURIT NË BREZOVICË</h5>
                </div>
            </div>
          </div>

        <div className="container-fluid">
        <div className="container-fluid px-lg-5">
            {/* <div className="section-title text-center position-relative pb-3 mb-5 mx-auto" style={{maxWidth: "600px"}}>
                <h5 className="text-dark text-uppercase">informata për shkollën E SKIJIMIT DHE SHTËPInë E GURIT NË BREZOVICË</h5>
            </div> */}
            <div className="row g-5">
                <div className="col-lg-6 col-md-6">
                    <div className="h-100 d-flex p-2 flex-column align-items-center">
                        <h5 className="mb-3 text-center text-uppercase text-dark textPoppins">informata për shkollën E SKIJIMIT DHE SHTËPInë E GURIT NË BREZOVICË</h5>
                        <p className="lh-md text-darkBlack textOn">
                            Shtëpia e Gurit në Brezovicë shërben si një qendër e rëndësishme për edukimin e skijimit për nxënësit e shkollave fillore dhe të mesme të Komunës së Prishtinës. Ky ambient i veçantë është përdorur me sukses për të ofruar kursin e skijimit dhe për të lejuar nxënësit të eksplorojnë dhe zhvillojnë aftësitë e tyre në këtë sport të emocionueshëm. Në Shtëpinë e Gurit të Brezovicës, 
                            nxënësit marrin mësimin e skijimit nga instruktorë të kualifikuar dhe të përvojshëm.
                        </p>
                    </div>
                </div>
                <div className="col-lg-6 col-md-6">
                    <div className="h-100 bg-bluecolor p-2 d-flex flex-column align-items-center">
                        <h4 className="mb-3 text-uppercase text-center text-white textPoppins">çmimorja</h4>
                        <p className="textOn text-white">
                            Shkolla e skijimit/për nxënës (7 ditë)  — 165.00 euro.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
       </>
    )
}

export default Ski;