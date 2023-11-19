import { Link } from "react-router-dom";

const ErrorPage = () => {
    return(
       <>
         <div className="container py-5 text-center">
            <div className="container my-5 py-5">
                <h2 className="not-found">404</h2>
                <p className="loading-text"><b className="oops">Oooops!</b> Faqja nuk u gjet.</p>
           
               <Link className="btn btn-outline-dark rounded-3 text-decoration-none textPoppins" 
                     to="/">Kthehu tek Ballina
               </Link>
               </div>
         </div>
       </>
    )
}

export default ErrorPage;