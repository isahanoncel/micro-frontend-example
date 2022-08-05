import { lazy, Suspense } from "react";
const App1 = lazy(() => import("app1/App"));
const Heading = lazy(() => import("headingApp/App"));

function App() {
  return (
    <>
    <Suspense fallback={ <h1>Heading is loading</h1> }>
        <Heading />
      </Suspense>  
     <Suspense fallback={ <h1>App 1 is loading</h1> }>
        <App1 />
      </Suspense>  
    </>
  );
}

export default App;
