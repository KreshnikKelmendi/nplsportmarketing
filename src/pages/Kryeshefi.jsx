import Bardhi from "../img/59b.jpg";
import 'animate.css';


const Kryeshefi = () => {
    return(
       <>
       <div className="container-fluid py-5 bg-info" style={{marginBottom: "30px"}}>
        <div className="row py-5">
            <div className="col-12 pt-lg-5 mt-lg-5 text-center">
                <h1 className="display-5 text-white animate__animated animate__slideInUp animate__slow">Kryeshefi Ekzekutiv</h1>
            </div>
        </div>
      </div>

    <div className="container-fluid py-lg-5">
        <div className="py-1 ">
            <div className="d-flex kryeshefi">
                <div className="col-lg-7">
                    <div className="section-title position-relative pb-5">
                        <h5 className="text-primary text-uppercase">kryeshefi ekzekutiv</h5>
                        <h4 className="mb-0 textOn">BARDH KRASNIQI</h4>
                    </div>
                    <p className="mb-4 textOn col-lg-11">
                        Bardh Krasniqi është i lindur në Prishtinë në vitin 1990, dhe është rritur në lagjen Taslixhe.
                        Shkollën Fillore e ka përfunduar në "Gjergj Fishta", kurse të Mesmen në "Kolegjin Ciragan" të Stamboll-it.
                        Ka të përfunduar Administrimin e Biznesit në "Univesitetin Fatih" të Stambollit,"2007-2010", poashtu ka të përfunduar shkollën profesionale në AUK, atë të Akademisë Cisco's, ku u certifikua me titullin Inxhinier i Rrjetave Telekomunikuese.
                        Bardhi ka punuar në kompaninë 3CIS për 9 vite, duke qenë pjesë e implementimit të rrjetave 3G dhe 4G për disa prej telefonive më të mëdha në botë, sic është VODAFONE UK, TELLABS, AT&T USA, etj.
                        Është themelues i njërës prej kompanive më kreative në vend, "TREKUARTISTA" për tash e 10 vite, dhe ka menaxhuar shumë projekte brenda dhe jashtë shtetit.
                    </p>
                    <p className="mb-4 textOn col-lg-11">
                        Në dhjetor të 2022 është përzgjedhur dhe mban pozitën e Kryeshefit në Ndërmarrjen Publike Lokale "Sport Marketing"
                        Është pasionant i gjuhëve të huaja, dhe flet rrjedhshëm 5 gjuhë.
                        Në Prishtinë dhe në Kosovë, njihej si njëri ndër talentët më të mëdhenjë të gjeneratës së tij në sportin e Basketbollit, ku për shumë vite djersiti fanelat e shumë klubeve vendore dhe ndërkombëtare duke qenë edhe pjesë e Përfaqësueses së Kosovës në Basketboll.
                        <br /> <br />
                        Bardhi është i martuar dhe babë i dy vajzave.
                    </p>
                    </div>
                    <div className="col-lg-5" style={{minHeight: "400px"}}>
                        <div className="position-relative h-100">
                            <img className="w-100 h-75 staffPhoto1 rounded-2" alt="" src={Bardhi} style={{objectFit: "cover"}} />
                        </div>
                    </div>
            </div>
        </div>
        </div>
       </>
    )
}

export default Kryeshefi;