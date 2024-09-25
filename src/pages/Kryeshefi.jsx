import 'animate.css';
import artina from "../img/BardhKrasniqi-.jpg"

const Kryeshefi = () => {
  
    return(
       <>
        <div className="container-fluid py-lg-5 min-vh-100">
        <div className="container-fluid px-lg-3">
            <div className="d-flex kryeshefi justify-content-center align-items-center">
            <div className="col-lg-6">
                    <div className="section-title position-relative py-3 py-lg-0 mb-lg-3">
                        <h5 className="text-primary text-uppercase historyHeading">KRYESHEFI EKZEKUTIV</h5>
                        <h6>BARDH KRASNIQI</h6>
                    </div>
                    {/* <p className="mb-4 col-lg-11 textOn3">
                    Bardh Krasniqi, është i lindur në Prishtinë në vitin 1990, dhe është rritur në lagjen Taslixhe.<br /><br/>
                    Shkollën Fillore e ka përfunduar në “Gjergj Fishta”, kurse të Mesmen në “Kolegjin Ciragan” të Stamboll-it.
                    Ka të përfunduar Administrimin e Biznesit në "Univesitetin Fatih" të Stambollit,‘’2007-2010’’, poashtu ka të përfunduar shkollën profesionale në AUK, atë të Akademisë Cisco's, ku u certifikua me titullin Inxhinier i Rrjetave Telekomunikuese.
                    Bardhi ka punuar në kompaninë 3CIS për 9 vite, duke qenë pjesë e implementimit të rrjetave 3G dhe 4G për disa prej telefonive më të mëdha në botë, sic është VODAFONE UK, TELLABS, AT&T USA, etj.
                    Është themelues i njërës prej kompanive më kreative në vend, "TREKUARTISTA" për tash e 10 vite, dhe ka menaxhuar shumë projekte brenda dhe jashtë shtetit. <br /> <br />
                    Në dhjetor të 2022 është përzgjedhur dhe mban pozitën e Kryeshefit në Ndërmarrjen Publike Lokale ‘’Sport Marketing’’
                    Eshte pasionant i gjuheve te huaja, dhe flet rrjedhshem 5 gjuhë.
                    Në Prishtinë dhe në Kosovë, njihej si njëri ndër talentët më të mëdhenjë të gjeneratës së tij në sportin e Basketbollit, ku për shumë vite djersiti fanelat e shumë klubeve vendore dhe ndërkombëtare duke qenë edhe pjesë e Përfaqësueses së Kosovës në Basketboll.
                    Bardhi është i martuar dhe babë i dy vajzave.
                    </p> */}
                </div>
                <div className="col-lg-6 h-auto mt-3 mt-lg-0"  >
                    <img className="col-12 staffPhoto p-xxl-5" alt="" src={artina} />
                </div>
                
            </div>
        </div>
    </div>
       </>
    )
}

export default Kryeshefi;