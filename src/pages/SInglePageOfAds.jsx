import { useParams } from "react-router-dom";
import { shpalljet } from "../dataPova/shpalljet";
import pdfIcon from "../img/pdf.png"


const SinglePageOfAds = () => {
    const { id } = useParams();
    const ad = shpalljet?.find((ad) => String(ad.id) === String(id));
  
    if (!ad) {
      return <div className='justify-content-center align-items-center text-center'>LAJMI NUK U GJET</div>;
    }

     const { photo, name, date, firstDescription, secondDescription, aplikimiPDF } = ad
    return (
        <>
            <div className="container-fluid py-lg-2">
                <div className="container-fluid px-lg-5 py-5">
                    <div className="row g-5">
                        <div className="col-lg-12">
                            <div className="mb-5 px-lg-5 mx-lg-5">
                                <img
                                    className="img-fluid w-100 rounded mb-5 singleImage"
                                    src={photo}
                                    alt="eventsPhoto"
                                />
                                <h2 className="mb-4 textOn">{name}</h2>
                                <h6 className="text-success textOn">
                                    Data e publikimit:{" "}
                                    <small className="textOn">{date}</small>
                                </h6>
                                <p className="textOn">{firstDescription}</p>
                                <p className="textOn mt-4">{secondDescription}</p>

                                <ul>
                <li>
                  <strong>Përshkrimi:</strong> NPL“Sport Marketing” kërkon partner biznesi për menaxhimin e pishinës së Germisë në
                  tërësi dhe ofrimin e shërbimeve hoteliere dhe të aktiviteteve sportive dhe atyre kulturore
                  gjatë Sezonit Veror 2024 dhe 2025. Shërbimet duhet të jenë të kualitetit të lartë. Çmimet
                  duhet të jenë të pranueshmë për qytetarët, rininë shkollore, universitare dhe për të gjithë
                  vizitorët që frekuentojnë në pishinën e Gërmisë.
                </li>
                <li>
                  <strong>NPL“Sport Marketing” SH.A. ofron:</strong> hapësirat e planifikuara për zhvillimin dhe ofrimin e
                  shërbimeve të hotelierisë dhe aktiviteteve kulturoro-artistike brenda pishinës së Gërmisë,
                  duke mundësuar edhe infrastrukturën e duhur në kyçjen e rrjetin elektrik dhe atë të ujit.
                </li>
                <li>
                  <strong>Kontrata:</strong> NPL Sportmarketing jep me kontratë 2 vjeçare për bashkëmenaxhim pishinën e Gërmisë
                  duke përfshirë edhe shitjen dhe inkasimin e biletave, duke u bazuar në rregulloren e punës
                  dhe çmimeve aktuale.
                </li>
                <li>
                  <strong>Përmasat e dhënies në shfrytëzim:</strong> Si pjesë përbërëse e dhënies në shfrytëzim do të përfshihet poashtu amfiteatri i pishinës dhe
                  pjesëve përcjellëse. Plani i aktiviteteve kulturore, sportive dhe rekreacionale duhet të
                  prezentohet paraprakisht nga fituesi i kontratës.
                </li>
                <li>
                  <strong>Organizimi i eventeve:</strong> Për cdo organizim të përmasave më të mëdha të llojit si, koncerte, manifestime apo turnire
                  sportive dhe mbrëmje kulturo-artistike, kontraktori obligohet që paraprakisht të njoftoj
                  me shkrim menaxhmentin e NPL“Sport Marketing” SH.A. për planin e detajizuar të natyrës
                  së manifestimit dhe mbajtjes së aktivitetit duke pasur parasysh masat organizative dhe ato
                  të sigurisë në përpuethshmeri të plotë me ligjet në fuqi.
                </li>
                <li>
                  <strong>Pikat komerciale:</strong> NPL“Sport Marketing” SH.A. ka përcaktuar gjithsej 6 Pika komerciale për aktivitete
                  të shitjes dhe shërbime të hotelierisë, ato janë: Restauranti kryesor, Mini Restauranti “Kënd i Pizza’ve”,
                  Pikë shitëse – tek amfiteatri aktiviteteve kulturore dhe i sporteve, 3 x Lokacione - pika te shitjes “On the GO” pije dhe produkte të paketuara ushqimore.
                </li>
                <li>
                  <strong>Terrenet sportive të tenisit:</strong> do të mbesin në dispozicion të NPL“Sport Marketing” SH.A. mirëpo në rastin e kërkesës për oganizim të ndonjë aktiviteti apo turniri të
                  tenisit, pagesa do të bëhet në koordinim me çmimorem e përcaktuar në rregulloren
                  e NPL“Sport Marketing dhe me Federatën e Tenisit të Kosovës”
                </li>
                <li>
                  <strong>Pikat reklamuese:</strong> NPL“Sport Marketing” në kontratën e dhënë për bashk-menaxhim operatorit fitues
                  do të përfshijë poashtu dhënien e të gjitha pikave reklamuese të paracaktuara për
                  kohëzgjatjen e kontratës.
                </li>
              </ul>

              <div className="container mx-auto">
        <div className="max-w-3xl mx-auto bg-white p-8 rounded shadow-md mb-8">

          <h2 className="text-xl font-bold mb-4">Kriteret e Përzgjedhjes:</h2>
          <ul className="list-disc pl-6 mb-6">
            <li>Kompania duhet të jetë e regjistruar, minimum 2 vite pranë ARBK’së dhe ta dëshmojë me çertifikat të biznesit.</li>
            <li>Kompania duhet të ketë së paku 2 vjet përvojë në ofrimin e shërbimeve të hotelierisë dhe marketingut duke përfshirë organizimin e aktiviteteve kulturoro-artistike ( të dëshmoje me portfolio të aktiviteteve).</li>
          </ul>

          <h2 className="text-xl font-bold mb-4">Ofertat e prezantuara nga OE duhet të përfshijnë:</h2>
          <ul className="list-disc pl-6 mb-6">
            <li>Planin vizuel-arkitektonik duke përfshirë përshkrimin e instalimeve për shitje dhe planin investiv për lokacionet e përcaktuara nga menaxhmenti i NPL“Sport Marketing” SH.A. në hapësirat e dedikuara për shërbimet hotelierike.</li>
            <li>Planin e detajuar artistiko-kulturor të detajuar të manifestimeve sportive, kulturore dhe rekreacionale.</li>
            <li>Investimi dhe blerja e shezlloneve dhe vendosja e çadrave, sasia 250 copë ( modeli duhet të prezentohet me fotografi).</li>
            <li>Përshkrimin e menus dhe ushqimit prej së paku 10 produkteve ushqimore duke përfshirë edhe pijet freskuese ( të përfshihet edhe çmimorja e menus).</li>
            <li>Planifikimi i numrit të punonjësve dhe menaxhimin e tyre.</li>
            <li>Përshkrimin e sistemit higjenik dhe sistemit për pastrim.</li>
            <li>Numrin e personelit te sigurimit.</li>
          </ul>

        </div>
        </div>

        <div className="container mx-auto">
        <div className="max-w-3xl mx-auto bg-white p-8 rounded shadow-md mb-8">

          <h2 className="text-xl font-bold mb-4">Shuma Bazë e Përcaktuar për Ofertim:</h2>
          <p className="mb-6">Shuma bazë e përcaktuar për ofertim për shfrytëzimin e pishinës dhe hapësirave komerciale gjatë sezonës 2024 - 2025 është 70,000.00€ për vit kalendarik, 140,000.00 Euro për 2 vite (nuk është e përfshirë TVSH’ja).</p>

          <h2 className="text-xl font-bold mb-4">Pagesat:</h2>
          <p className="mb-6">Pagesat parashihet të realizohen në 4 këste të barabarta duke filluar me nënshkrimin e kontratës nga OE fitues. Detajet do të specifikohen në kontratë.</p>

          <h2 className="text-xl font-bold mb-4">Depozitimi i Mjeteve:</h2>
          <p className="mb-6">Për të marrë pjesë në shpallje duhet deponuar mjete në vlerë prej 300 € në llogarinë e NPL “Sport Marketing”, në bankën BPB me nr. të xhirollogarisë 1300-2712-001184.61. Pas përfundimit të procesit vlera 300 € do të mbetet kompanisë.</p>

          <h2 className="text-xl font-bold mb-4">Afatet dhe Termat e Pagesës:</h2>
          <p className="mb-6">Pagesa e mjeteve duhet të bëhet duke u bazuar në afatet dhe termat e përcaktuara menjëherë pas lidhjes së kontratës në afat prej 5 (pesë) ditësh.</p>
          <p className="mb-6">Afati për dërgesën e ofertave është prej 15.05.2024 – 25.05.2024. Ofertat e mbyllura në pliko duhet të dërgohen në zyrën kryesore të “Sportmarketingut” në Prishtinë, më së largu deri më 25.05.2024 deri në ora 12:00 h, ato oferta të cilat arrijnë pas kësaj date do të refuzohen.</p>
          <p className="mb-6">Hapja e ofertave do të jetë publike në prezencë të përfaqësuesëve të kompanive me 25.05.2024 në ora 13:00h në adresën e poshtë shënuar. Ofertën do ta fitoj kompania më e kualifikuar dhe e cila ofron kushte më cilësore dhe çmimin më të lartë se çmimi fillestar.</p>

        </div>
      </div>

      {aplikimiPDF && ( 
            <p className='my-4 flex'> 
           
              <a className='underline text-blue-400' href={aplikimiPDF} download="Application.pdf">
                SHIKO SHPALLJEN NË PDF
              </a>
              <img src={pdfIcon} className="m-3" style={{width:"20px", height:"20px"}} alt=''/>
            </p>
          )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default SinglePageOfAds;


// import { useEffect, useState } from "react";
// import { useParams } from "react-router-dom"
// import { fetchDataFromApi } from "../utils/api";
// import FetchData from "../hooks/FetchData";

// const SinglePageOfAds = () => {
//     const { id } = useParams()
//     const apiUrl = "https://sportmarketing.onrender.com";
//     const { loading, error, data } = FetchData(`${apiUrl}/api/shpalljets/${id}?populate=*`);
//     console.log('test', data)

//     return(
//        <>
//          <div className="container-fluid py-5 wow fadeInUp" data-wow-delay="0.1s">
//                 <div className="container-fluid px-lg-5">
//                     <div className="row g-5">
//                         <div className="col-lg-12">
//                         <div className="mb-5 px-lg-5 mx-lg-5">
//                             <img className="img-fluid w-100 rounded mb-5 singleAdsImage" 
//                                     src={`${apiUrl}${data?.data?.attributes?.image?.data?.attributes?.url}`}
//                                      alt=""
//                                 />
//                                 <h2 className="mb-4 textOn">{data?.data?.attributes?.titulli}</h2>
//                                 <h6 className="text-success textOn">Data e publikimit: <small className="textOn">
//                                     {data?.data?.attributes?.date}</small>
//                                 </h6>
//                                 <p className="textOn">{data?.attributes?.description}</p>
//                             </div>
//                        </div>
//                     </div>

//                     <div className=" px-lg-5 mx-lg-3">
//           <p></p>
//           <ul className="list-disc list-inside text-gray-700">
//             <li><strong><b>Titulli i Pozitës:</b> </strong>{data?.data?.attributes?.titulli}</li>
//             <li><strong><b>Kontrata:</b></strong> {data?.data?.attributes?.kontrata}</li>
//             <li><strong><b>Orari:</b></strong> {data?.data?.attributes?.orari}</li>
//             <li><strong><b>Paga:</b></strong> {data?.data?.attributes?.paga}</li>
//             <li><strong><b>Vendi:</b></strong> {data?.data?.attributes?.vendi}</li>
//           </ul>
//           <section className="py-8">
//             <div className="max-w-4xl">
//               <h6 className="font-semibold text-center uppercase text-gray-800 mb-8">Kualifikimet dhe Përgatitja Profesionale</h6>
//               <ul className="list-disc list-inside text-gray-700 my-4">
//                 <li><b>Diploma e nevojshme:</b> {data?.data?.attributes?.diploma}</li>
//                 <li><b>Përvoja e punës: </b>{data?.data?.attributes?.pervojaPunes}</li>
//                 <li><b>Njohja e gjuhëve të huaja: </b>{data?.data?.attributes?.njohjaGjuhes}</li>
//                 <li><b>Kushtet e kualifikimit: </b>{data?.data?.attributes?.kushtetKualifikimit}</li>
//               </ul>
//             </div>
//           </section>

//           <section className="py-8">
//             <div className="max-w-4xl mx-auto">
//               <h6 className="font-semibold text-center uppercase text-gray-800 my-5">Detyrat dhe Përgjegjësitë Kryesore</h6>
//               <ul className="custom-ordered-list">
//       <li><b>1.</b> {data?.data?.attributes?.detyra1}</li>
//       <li><b>2.</b> {data?.data?.attributes?.detyra2}</li>
//       <li><b>3.</b> {data?.data?.attributes?.detyra3}</li>
//       <li><b>4.</b> {data?.data?.attributes?.detyra4}</li>
//       <li><b>5.</b> {data?.data?.attributes?.detyra5}</li>
//       <li><b>6.</b> {data?.data?.attributes?.detyra6}</li>
//       <li><b>7.</b> {data?.data?.attributes?.detyra7}</li>
//       <li><b>8.</b> {data?.data?.attributes?.detyra8}</li>
//     </ul>
//             </div>
//           </section>

//           <section className="py-8">
//             <div className="max-w-4xl mx-auto">
//               <h6 className="font-semibold text-center uppercase text-gray-800 my-5">Informata për Procedurën e Konkurimit</h6>
//               <ul className="list-disc list-inside text-gray-700 my-4">
//                 <li>Aplikantët e interesuar për këtë vend pune duhet të bashkangjesin këto dokumente:</li>
//                 <ul className="ml-8">
//                   <li>{data?.data?.attributes?.diploma}</li>
//                   <li>CV e aplikantit;</li>
//                   <li></li>
//                   <li>Dëshminë mbi përvojën e punës, referencat si dhe certifikata tjera profesionale;</li>
//                   <li>Deklaratën nën Betim;</li>
//                   <li>Certifikatën që nuk është nën hetime (jo më e vjetër se 6 muaj);</li>
//                   <li>Kopjen e letërnjoftimit.</li>
//                 </ul>
//               </ul>
//               <p className='py-3 text-bg-primary px-3'> {data?.data?.attributes?.proceduraAplikimit}</p>
//             </div>
//           </section>
//           </div>
//                 </div>

                
//            </div>
//        </>
//     )
// }

// export default SinglePageOfAds;