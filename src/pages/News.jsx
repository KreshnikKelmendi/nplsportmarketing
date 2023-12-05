import { Suspense, lazy } from "react";
import NewsEvents from "../NewsEvents";

const LazyNewsEvents  = lazy(() => import('../NewsEvents'));

const News = () =>{

    return(
        <>
          <Suspense fallback={<div>Loading...</div>}>
            <LazyNewsEvents />
          </Suspense>
        </>
    )
}

export default News;