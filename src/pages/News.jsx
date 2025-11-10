import { Suspense, lazy } from "react";

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