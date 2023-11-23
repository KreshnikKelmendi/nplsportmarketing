const Camp = () => {
    return(
       <>
        <div className="container-fluid py-5 kampshtepiza" style={{marginBottom: "90px"}}>
            <div className="row py-5">
                <div className="col-12 text-center">
                    <h1 className="display-4 text-light animated zoomIn">Akull n'Verë & Verë n'dimër</h1>
                </div>
            </div>
        </div>    

        <div className="container-fluid">
        <div className="container">
            {/* <div className="section-title text-center position-relative pb-3 mb-5 mx-auto" style={{maxWidth: "600px"}}>
                <h5 className="text-dark text-uppercase">informata për Festivalet</h5>
            </div> */}
            <div className="row g-5">
                <div className="col-lg-6 col-md-6">
                    <div className="h-100 p-2 d-flex flex-column align-items-center textPoppins">
                        <h5 className="mb-3 text-center text-uppercase text-dark">informata për Festivalet</h5>
                        <p className="m-0 textOn">
                            Kampshtëpizat e Qendrës Rekreative në Parkun e Gërmisë janë një mënyrë e shkëlqyeshme për të shpëtuar nga rutina e përditshme dhe për të eksploruar natyrën. Këto kampshtëpiza shërbejnë si bujtina dhe kamp i aventurave për të rinjtë në moshën 14-16 vjeçare. Ata këtu njihen me bukuritë natyrore të Kosovës, ndërkohë që zhvillojnë aftësi 
                            të reja, si krijimi i video, orientimi me hartë dhe kompas. <br /> <br />
                            Drejtoria për Kulturë, Rini dhe Sport e Komunës së Prishtinës ofron shumë mundësi të tjera aktivitetesh, të cilat realizohen nga klube të ndryshme të qytetit dhe më tej.
                        </p>
                    </div>
                </div>
                <div className="col-lg-6 col-md-6">
                    <div className="h-100 bg-bluecolor p-2 d-flex flex-column align-items-center">
                        <h4 className="mb-3 text-uppercase text-center text-white textPoppins">çmimorja</h4>
                        <p className="m-0 textOn text-white">
                            Për momentin s’ka çmimore për shfrytëzim të kampshtëpizave.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
       </>
    )
}

export default Camp;