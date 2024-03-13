import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import { fetchDataFromApi } from "../utils/api";
import FetchData from "../hooks/FetchData";

const SinglePageOfAds = () => {
    const { id } = useParams()
    const apiUrl = "https://sportmarketing.onrender.com";
    const { loading, error, data } = FetchData(`${apiUrl}/api/shpalljets/${id}?populate=*`);
    console.log('test', data)

    return(
       <>
         <div className="container-fluid py-5 wow fadeInUp" data-wow-delay="0.1s">
                <div className="container-fluid px-lg-5">
                    <div className="row g-5">
                        <div className="col-lg-12">
                        <div className="mb-5 px-lg-5 mx-lg-5">
                            <img className="img-fluid w-100 rounded mb-5 singleAdsImage" 
                                    src={`${apiUrl}${data?.data?.attributes?.image?.data?.attributes?.url}`}
                                     alt=""
                                />
                                <h2 className="mb-4 textOn">{data?.data?.attributes?.titulli}</h2>
                                <h6 className="text-success textOn">Data e publikimit: <small className="textOn">
                                    {data?.data?.attributes?.date}</small>
                                </h6>
                                <p className="textOn">{data?.attributes?.description}</p>
                            </div>
                       </div>
                    </div>

                    <div className=" px-lg-5 mx-lg-3">
          <p></p>
          <ul className="list-disc list-inside text-gray-700">
            <li><strong><b>Titulli i Pozitës:</b> </strong>{data?.data?.attributes?.titulli}</li>
            <li><strong><b>Kontrata:</b></strong> {data?.data?.attributes?.kontrata}</li>
            <li><strong><b>Orari:</b></strong> {data?.data?.attributes?.orari}</li>
            <li><strong><b>Paga:</b></strong> {data?.data?.attributes?.paga}</li>
            <li><strong><b>Vendi:</b></strong> {data?.data?.attributes?.vendi}</li>
          </ul>
          <section className="py-8">
            <div className="max-w-4xl">
              <h6 className="font-semibold text-center uppercase text-gray-800 mb-8">Kualifikimet dhe Përgatitja Profesionale</h6>
              <ul className="list-disc list-inside text-gray-700 my-4">
                <li><b>Diploma e nevojshme:</b> {data?.data?.attributes?.diploma}</li>
                <li><b>Përvoja e punës: </b>{data?.data?.attributes?.pervojaPunes}</li>
                <li><b>Njohja e gjuhëve të huaja: </b>{data?.data?.attributes?.njohjaGjuhes}</li>
                <li><b>Kushtet e kualifikimit: </b>{data?.data?.attributes?.kushtetKualifikimit}</li>
              </ul>
            </div>
          </section>

          <section className="py-8">
            <div className="max-w-4xl mx-auto">
              <h6 className="font-semibold text-center uppercase text-gray-800 my-5">Detyrat dhe Përgjegjësitë Kryesore</h6>
              <ul className="custom-ordered-list">
      <li><b>1.</b> {data?.data?.attributes?.detyra1}</li>
      <li><b>2.</b> {data?.data?.attributes?.detyra2}</li>
      <li><b>3.</b> {data?.data?.attributes?.detyra3}</li>
      <li><b>4.</b> {data?.data?.attributes?.detyra4}</li>
      <li><b>5.</b> {data?.data?.attributes?.detyra5}</li>
      <li><b>6.</b> {data?.data?.attributes?.detyra6}</li>
      <li><b>7.</b> {data?.data?.attributes?.detyra7}</li>
      <li><b>8.</b> {data?.data?.attributes?.detyra8}</li>
    </ul>
            </div>
          </section>

          <section className="py-8">
            <div className="max-w-4xl mx-auto">
              <h6 className="font-semibold text-center uppercase text-gray-800 my-5">Informata për Procedurën e Konkurimit</h6>
              <ul className="list-disc list-inside text-gray-700 my-4">
                <li>Aplikantët e interesuar për këtë vend pune duhet të bashkangjesin këto dokumente:</li>
                <ul className="ml-8">
                  <li>{data?.data?.attributes?.diploma}</li>
                  <li>CV e aplikantit;</li>
                  <li></li>
                  <li>Dëshminë mbi përvojën e punës, referencat si dhe certifikata tjera profesionale;</li>
                  <li>Deklaratën nën Betim;</li>
                  <li>Certifikatën që nuk është nën hetime (jo më e vjetër se 6 muaj);</li>
                  <li>Kopjen e letërnjoftimit.</li>
                </ul>
              </ul>
              <p className='py-3 text-bg-primary px-3'> {data?.data?.attributes?.proceduraAplikimit}</p>
            </div>
          </section>
          </div>
                </div>

                
           </div>
       </>
    )
}

export default SinglePageOfAds;