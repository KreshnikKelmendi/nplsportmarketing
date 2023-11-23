const Amfiteatri = () => {
    return(
          <>
            <div className="container-fluid py-5 amfiteatriSingle" style={{marginBottom: '90px'}}>
            <div className="row py-5">
                <div className="col-12 text-center">
                    <h1 className="display-4 text-light animated zoomIn">Amfiteatri</h1>
                </div>
            </div>
        </div>

        <div className="container-fluid">
        <div className="container">
            {/* <div className="section-title text-center position-relative pb-3 mb-5 mx-auto" style={{maxWidth: "600px"}}>
                <h5 className="text-dark text-uppercase">informata për amfiteatrin e gërmisë</h5>
            </div> */}
            <div className="row g-5">
                <div className="col-lg-6 col-md-6">
                    <div className="h-100 p-2 d-flex flex-column justify-content-center align-items-center">
                        <h5 className="text-center text-uppercase text-dark textPoppins">nformata për amfiteatrin e gërmisë</h5>
                        <p className="lh-md textOn col-lg-11">
                            Amfiteatri i Gërmisë është një hapësirë multifunksionale që plotëson kriteret për 
                            realizimin e premierave teatrale e shfaqje të ndryshme kulturore. Ky amfiteater 
                            gëzohet me një vendndodhje të privilegjuar, në hyrje të Pishinës së Gërmisë, dhe 
                            është i hapur, duke e bërë atë një ambient të mrekullueshëm për evente të ndryshme. 
                            Me një kapacitet rreth 900 ulëse, ky vend shërben si një platformë e shkëlqyeshme për 
                            artin dhe sportin. <br /><br />
                            Amfiteatri i Gërmisë është një hapësirë e përshtatshme për lojërat sportive të vogla 
                            si basketbolli dhe futbolli. Kjo e bën atë një burim të çmuar për komunitetin lokal 
                            dhe një destinacion tërheqës për ngjarje kulturore dhe sportive.
                        </p>
                    </div>
                </div>
                <div className="col-lg-6 col-md-6">
                    <div className="bg-bluecolor p-2 h-100 d-flex flex-column align-items-center">
                        <h5 className="text-uppercase text-center text-white">çmimorja</h5>
                        <p className="lh-md textOn text-white">
                            1. Shfrytëzimi i amfiteatrit — 01 Shtator – 31 maj — 300.00 euro<br /><br />
                            2. Shfrytëzimi i amfiteatrit — 01 Qershor – 31 gusht — 450.00 euro<br /><br />
                            3. Shfrytëzimi i amfiteatrit — Nëse hapësira kontraktohet për 3 e më shumë ditë radhazi — 20 %(nga pika 8 dhe 9).<br /><br />
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
          </>
    )
}

export default Amfiteatri;