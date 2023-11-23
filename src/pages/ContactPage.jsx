import 'animate.css';

const ContactPage = () => {
    return(
      <>
        <div className="container-fluid py-5 bg-contact" style={{marginBottom: "90px"}}>
            <div className="row py-5">
                <div className="col-12 text-center">
                    <h1 className="display-4 text-white">Kontakti</h1>
                </div>
            </div>
        </div>

        <div className="container-fluid py-5">
        <div className="container-fluid px-lg-5">
            <div className="section-title text-center position-relative pb-3 mb-5 mx-auto" style={{maxWidth: "600px"}}>
                <h6 className="mb-0 textOn">Ju lutemi të mos ngurroni të na kontaktoni për çdo pyetje, kërkesë ose informacion shtesë. Ne jemi këtu për t'ju ndihmuar.</h6>
            </div>
            <div className="row g-5 mb-5">
                <div className="col-lg-4">
                    <div className="d-flex align-items-center">
                        <div className="serviceContact d-flex align-items-center justify-content-center" style={{width: "60px", height: "60px"}}>
                            <i className="contactIcon fa fa-phone-alt text-white"></i>
                        </div>
                        <div className="ps-4">
                            <p className="mb-2">Na kontaktoni</p>
                            <h6 className="text-primary mb-0">049 506 260 - Marketing</h6>
                            <h6 className="text-primary mb-0"> 038 704 779 - Administrata</h6>
                            <h6 className="text-primary mb-0">049 442 203 - Zyra ligjore</h6>
                        </div>
                        
                    </div>
                </div>
                <div className="col-lg-4">
                    <div className="d-flex align-items-center">
                        <div className="serviceContact d-flex align-items-center justify-content-center" style={{width: '60px', height: "60px"}}>
                            <i className="contactIcon fa fa-envelope-open text-white"></i>
                        </div>
                        <div className="ps-4">
                            <p className="mb-2">E-mail adresa</p>
                            <h6 className="text-primary mb-0">info@nplsportmarketing.com</h6>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4">
                    <div className="d-flex align-items-center">
                        <div className="serviceContact d-flex align-items-center justify-content-center" style={{width: "70px", height: "60px"}}>
                            <i className="contactIcon fa fa-map-marker-alt text-white"></i>
                        </div>
                        <div className="ps-4">
                            <p className="mb-2">Vizitoni zyrën tonë</p>
                            <h6 className="text-primary mb-0">Pallati i Rinisë dhe Sporteve "Adem Jashari"</h6>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row g-5">
                
                <div className="col-lg-12">
                    <iframe className="position-relative rounded w-100 h-100"
                        title="mapTitle"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2934.0118718376607!2d21.15412617509016!3d42.661103816030824!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x13549ee4f18ba3fb%3A0x189f57f3727e8636!2sYouth%20and%20Sports%20Center!5e0!3m2!1sen!2s!4v1696041789604!5m2!1sen!2s" 
                        style={{minHeight: "350px", border:"0"}} allowFullScreen="" aria-hidden="false"
                        tabIndex="0"></iframe>
                </div>
            </div>
        </div>
    </div>
      </>
    )
}

export default ContactPage;