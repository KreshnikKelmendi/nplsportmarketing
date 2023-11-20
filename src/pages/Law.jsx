import statusi from "../img/STATUTI-I-NPL-SPORT-MARKETING.pdf";
import statusi2 from "../img/LIGJI__NR._04_L-006_PER_NDRYSHIMIN_DHE_PLOTESIMIN_E_LIGJIT_NR.02_L-123_PER_SHOQERITE_TREGTARE.pdf";
import statusi3 from "../img/LIGJI_NR._05_L_-009_PER_NDRYSHIMIN_DHE_PLOTESIMIN_E_LIGJIT_NR._03_L-087_PER_NDERMARRJET_PUBLIKE_I_NDRYSHUAR_DHE_I_PLOTESUAR_ME_LIGJIN_NR._04_L-111.pdf";
import statusi4 from "../img/RREGULLORET-PER-MARREDHENIET-NE-PUNE.pdf";
import statusi5 from "../img/RREGULLORE-PER-PERGJEGJESINE-DISIPLINORE-DHE-MATERIALE.pdf";
import statusi6 from "../img/RREGULLORE-PER-SISTEMATIZIMIN-E-PUNEVE-DHE-DETYRAVE-TE-PUNES.pdf";
import 'animate.css';

const Law = () => {
    return(
      <>
        <div className="container-fluid py-5 lawBg" style={{marginBottom: "90px"}}>
            <div className="row py-5">
                <div className="col-12 pt-lg-5 mt-lg-5 text-center">
                    <h1 className="display-4 text-white animate__animated animate__slideInUp animate__slow">Korniza ligjore</h1>
                </div>
            </div>
        </div>


        <div className="col-lg-12 py-3 slideInUp" data-wow-delay="0.3s">
            <div className="blog-item bg-light overflow-hidden">
                <div className="p-4">
                    <h5 className="mb-3 text-uppercase">
                        Statuti i Ndërmarrjes Publike Lokale ”Sport Marketing” SH.A. Prishtinë
                    </h5>
                    <a className="text-uppercase text-decoration-none" href={statusi} alt="" target="_blank" rel="noopener noreferrer">SHKARKO</a>
                </div>
            </div>
        </div>


        <div className="col-lg-12 py-3 slideInUp" data-wow-delay="0.3s">
            <div className="blog-item bg-light overflow-hidden">
                <div className="p-4">
                    <h5 className="mb-3 text-uppercase">
                        LIGJI NR. 04 L-006 PËR NDRYSHIMIN DHE PLOTËSIMIN E 
                        LIGJIT NR.02 L-123 PËR SHOQËRITË TREGTARE
                    </h5>
                    <a className="text-uppercase text-decoration-none" href={statusi2} alt="" target="_blank" rel="noopener noreferrer">SHKARKO</a>
                </div>
            </div>
        </div>


        <div className="col-lg-12 py-3 slideInUp">
            <div className="blog-item bg-light overflow-hidden">
                <div className="p-4">
                    <h5 className="mb-3 text-uppercase">
                        LIGJI NR.05/L-009 PËR NDRYSHIMIN DHE PLOTËSIMIN E LIGJIT NR.03/L-087 PËR NDËRMARRJET PUBLIKE I NDRYSHUAR DHE I PLOTËSUAR ME LIGJIN NR.04/L-111</h5>
                    <a className="text-uppercase text-decoration-none" href={statusi3} alt="" target="_blank" rel="noopener noreferrer">SHKARKO</a>
                </div>
            </div>
        </div>


        <div className="col-lg-12 py-3 slideInUp">
            <div className="blog-item bg-light overflow-hidden">
                <div className="p-4">
                    <h5 className="mb-3 text-uppercase">
                        Rregullore për marrëdhënien në punë
                    </h5>
                    <a className="text-uppercase text-decoration-none" href={statusi4} alt="" target="_blank" rel="noopener noreferrer">SHKARKO</a>
                </div>
            </div>
        </div>


        <div className="col-lg-12 py-3 slideInUp">
            <div className="blog-item bg-light overflow-hidden">
                <div className="p-4">
                    <h5 className="mb-3 text-uppercase">
                        RREGULLORE PËR PËRGJEGJËSINË DISIPLINORE DHE MATERIALE
                    </h5>
                    <a className="text-uppercase text-decoration-none" href={statusi5} alt="" target="_blank" rel="noopener noreferrer">SHKARKO</a>
                </div>
            </div>
        </div>


        <div className="col-lg-12 py-3 slideInUp" data-wow-delay="0.3s">
            <div className="blog-item bg-light overflow-hidden">
                <div className="p-4">
                    <h5 className="mb-3 text-uppercase">
                        RREGULLORE PËR SISTEMATIZIMIN E PUNËVE DHE DETYRAVE TË PUNËS
                    </h5>
                    <a className="text-uppercase text-decoration-none" href={statusi6} alt="" target="_blank" rel="noopener noreferrer">SHKARKO</a>
                </div>
            </div>
        </div>
      </>
    )
}

export default Law;