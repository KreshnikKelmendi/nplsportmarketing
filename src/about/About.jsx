import objekti from "../img/building.png";
import staff2 from "../img/STAF2NPL.jpg";
import firstPhoto from "../img/galery3.jpg";
import secondPhoto from "../img/galery2.jpg";
import thirdPhoto from "../img/galery1.jpg";
import fourthPhoto from "../img/galery4.jpg";
import fifthPhoto from "../img/tennis6.jpg";
import sixthPhoto from "../img/tennis7.jpg";
import seventhPhoto from "../img/horti1.jpg";
import eightPhoto from "../img/horti2.jpg";
import 'animate.css';
import sport from "../img/sporti01.png";
import natyra from "../img/natyra01.png";
import kultura from "../img/kultura01.png"
import marketing from "../img/marketingu01.png"
import Accordion from "./Accordion";


const galery = [{
    photoGalery: firstPhoto
},{
    photoGalery: secondPhoto
},{
    photoGalery: thirdPhoto
},{
    photoGalery: fourthPhoto
},{
    photoGalery: fifthPhoto
},{
    photoGalery: sixthPhoto
},{
    photoGalery: seventhPhoto
},{
    photoGalery: eightPhoto
}]

const About = () => {
    return(
       <>
        <div className="container-fluid py-5 aboutBg" style={{marginBottom: "50px"}}>
            <div className="row py-5">
                <div className="col-12 text-center">
                    <h1 className="display-4 headingH1">Rreth Nesh</h1>
                </div>
            </div>
        </div>


        <div className="container-fluid py-lg-5">
        <div className="container-fluid px-lg-5">
            <div className="row g-5">
                <div className="col-lg-5" style={{minHeight: "190px"}}>
                    <div className="position-relative h-100">
                        <img className="position-absolute w-100 h-100 object-fit-contain staffPhoto rounded-4" alt="" src={objekti} style={{objectFit: "cover"}} />
                    </div>
                </div>
                <div className="col-lg-7">
                    <div className="section-title position-relative mb-lg-5">
                        <h5 className="text-primary text-uppercase historyHeading">Historiku i ndërmarrjes</h5>
                    </div>
                    <p className="mb-4 textOn3">
                        Kompania Publike Komunale “Sport Marketing” sh.a, Prishtinë është themeluar me vendimin
                        e Pleqësisë së Fondit të Kulturës Fizike dhe Sportit të Komunës së Prishtinës, nr. 499 të 
                        datës: 23.12.1991, viti i regjistrimit në regjistrin e Gjyqit Ekonomik të Prishtinës nën nr FI-2642/2091. 
                        Pas luftës NPK”Sportmarketing”- Prishtinë është regjistruar në administratën e UNMIK-ut me nr. 80283741.
                        Sipas Ligjit për  ndërmarrjet publike  (ligji nr.03/L-087) dhe Ligji për  ndyshimin dhe plotësimin e Ligjit 
                        nr.03/L-087 në Ligjin nr. 04/L-11. Ndërrmarrja ka Statusin e Shoqërisë Aksionare me 100% aksione të Komunës 
                        së Prishtinës dhe është e regjistruar si NPK “Sportmarketing” sh.a. e cila, përmes  Bordit  të Drejtorëve, i 
                        përgjigjet Komunës së Prishtinës si aksionar i vetëm.
                        Aksionarët kanë rregulluar statutin sipas ligjit të plotësuar së fundi dhe ka ndryshuar emrin dhe logon e ndërmarrjes. <br/> <br/>
                        Nga Kompania Publike Komunale “Sportmarketing” sh.a në Ndërrmarrja Publike Lokale “Sport Marketing” sh.a. Prishtinë. 
                        NPL “Sport Marketing” sh.a. menaxhon, shfrytëzon, mirëmbanë dhe ndërton objekte sportive-rekreative. Selia e ndërmarrjes është 
                        në rrugën Sylejman Vokshi 5/A në Prishtinë.
                    </p>
                </div>
            </div>
        </div>
    </div>


    {/* <div className="container-fluid bg-mission py-5">
        <div className="container py-5">
            <div className="row g-5">
                <div className="col-lg-12">
                    <div className="section-title position-relative mb-5">
                        <h5 className="text-primary text-uppercase">Misioni & Vizioni</h5>
                    </div>
                    <p className="mb-4 textOn3">
                    NPL "Sport Marketing" është ndërmarrje publike dhe mision i saj është zhvillimi dhe 
                    ofrimi i shërbimeve, sic jane aktivitetet sportive, kulturore, komerciale të mirefillta 
                    me fokus në qytetarin, të rinjët dhe të rejat e kryeqytetit tonë, Ne jemi ndërmarrja 
                    publike e vetme, kujdestare për zhvillimin dhe përkrahjen e ideve dhe projekteve për 
                    qytetin tonë dhe më gjerë! <br /> <br/>
                    Janë tri shtylla të cilat e karakterizojnë dhe ndërlidhin në mënyrë perfekte veprimtarinë e ndërmarrjes:
                       <ul>
                        <li>
                         - sporti dhe natyra, forca e cila bashkon komunitetin,
                        </li>
                        <li>
                         - kultura, thelbi i identitetit tonë dhe trashëgimisë,
                        </li>
                        <li>
                         - marketingu, promovimi dhe krijimi i imazhit të një kryeqyteti modern dhe reprezentues.
                        </li>
                       </ul>
                    </p>
                    <p className="mb-4 textOn3"> 
                         Misioni ynë është të rrisim vlerën e qytetit, dhe ta bëjmë atë më të njohur, 
                         duke qenë transparent dhe duke respektuar ligjet në fuqi. Instalimi i kulturës së re
                        menaxheriale, koordinimi i aktiviteteve të përbashkëta ndër-institucionale dhe me sektorin 
                        privat për të ofruar shërbime cilësore në pajtim me standartet ndërkombëtare të edukimit 
                        sportivo-shëndetësor dhe komercial. <br /> <br/>
                        Një qytet më i fuqishëm, më i kulturuar, dhe më i dashur, ky është misioni ynë.
                    </p>
        </div>
            </div>
        </div>
    </div> */}

    <div className="choose">
         <div className="container-fluid px-lg-5">
            <div className="d-lg-flex justify-content-center align-items-center">
               <div className="col-lg-6 col-md-7 px-3 px-lg-5">
                  <div className="titlepage textOn3 px-xxl-4">
                  <div className="section-title position-relative">
                        <h5 className="text-primary text-uppercase">Misioni & Vizioni</h5>
                    </div>
                    <div className="mt-4">
                    NPL "Sport Marketing" është ndërmarrje publike dhe mision i saj është zhvillimi dhe 
                    ofrimi i shërbimeve, sic jane aktivitetet sportive, kulturore, komerciale të mirefillta 
                    me fokus në qytetarin, të rinjët dhe të rejat e kryeqytetit tonë. Ne jemi ndërmarrja 
                    publike e vetme, kujdestare për zhvillimin dhe përkrahjen e ideve dhe projekteve për 
                    qytetin tonë dhe më gjerë! <br /> <br/>
                    Janë katër shtylla të cilat e karakterizojnë dhe ndërlidhin në mënyrë perfekte veprimtarinë e ndërmarrjes, ato janë:
                    </div>
                     <div class="award">
                        <div id="awa_ho" className="award_icon text_align_center">
                           <i><img className="img-fluid w-75" src={sport} alt="#"/>
                           </i>
                           <strong>Sporti</strong>
                        </div>
                        <div id="awa_ho" className="award_icon text_align_center">
                           <i><img className="img-fluid w-75" src={natyra} alt="#"/></i>
                           <strong>Natyra</strong>
                        </div>
                        <div id="awa_ho" className="award_icon text_align_center">
                           <i><img className="img-fluid w-75" src={kultura} alt="#"/></i>
                           <strong>Kultura</strong>
                        </div>
                        <div id="awa_ho" className="award_icon text_align_center">
                           <i><img className="img-fluid w-75" src={marketing} alt="#"/></i>
                           <strong>Marketingu</strong>
                        </div>
                     </div>
                  </div>
               </div>
               <div className="col-lg-6 px-xxl-5 mx-lg-4 my-5 position-relative">
                        <img className="img-fluid p-lg-4 rounded-5" alt="" src={staff2} style={{objectFit: "cover"}}/>
                    </div>
            </div>
         </div>
      </div>

    <div className="container-fluid my-5">
        <div className="container-fluid px-lg-5">
            <div className="section-title text-center position-relative pb-2 mb-lg-5 mx-auto" style={{maxWidth: "600px"}}>
                <h5 className="text-primary text-uppercase">galeria</h5>
            </div>
                    <div className="row g-4">
                        {galery?.map((gal, index) => ( 
                            <div className="col-lg-3 wow zoomIn" key={index} style={{minHeight: "350px"}}>
                                <div className="position-relative h-100">
                                    <img className="position-absolute w-100 h-100 wow zoomIn rounded-5 galeryMap" alt="" src={gal.photoGalery} style={{objectFit: "cover"}} />
                                </div>
                            </div>
                        ))}
            </div>
        </div>
    </div>
    <div className="my-5 py-5 section-title text-center position-relative pb-3 mb-3 mx-auto" style={{maxWidth: "600px"}}>
                <h5 className="textOn text-primary text-uppercase">Pyetje të shpeshta</h5>
        </div>
    <Accordion title="Kur është themeluar Ndërmarrja Publike Lokale Sport Marketing" content="Është themeluar me vendimin e Pleqësisë së Fondit të Kulturës Fizike dhe Sportit të Komunës së Prishtinës, nr. 499 të datës: 23.12.2091, viti i regjistrimit në regjistrin e Gjyqit Ekonomik të Prishtinës nën nr FI-2642/2091." />
    <Accordion title="Cilat janë asetet që menaxhon NPL - Sport Marketing" content="Asetet që menaxhohen nga NPL - Sport Marketing janë: Gërmia, Akull n'Verë etj." />
       </>
    )
}

export default About;