import React, { useEffect, useState, lazy, Suspense, startTransition } from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
// routing
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';

// components
import Loading from './hooks/loading/Loading';
import Layout from './components/Layout/Layout';
import AdminAuths from './AdminAuth';

const Home = lazy(() => import('./components/Home/Home'));
const Privacy = lazy(() => import('./components/Privacy/Privacy'));
const About = lazy(() => import('./components/About/About'));
const Covid19 = lazy(() => import('./components/Covid19/Covid19'));
const Apply = lazy(() => import('./components/Apply/Apply'));
const Impact = lazy(() => import('./components/Impact/Impact'));
const Nourishing = lazy(() => import('./components/Articles/Nourishing'));
const Others = lazy(() => import('./components/Articles/Others'));
const Education = lazy(() => import('./components/Articles/Education'));
const TreePlanting = lazy(() => import('./components/Articles/TreePlanting'));
const Contact = lazy(() => import('./components/Contact/Contact'));
const Donate = lazy(() => import('./components/Donate/Donate'));
const ApplyForm = lazy(() => import('./components/Form/ApplyForm'));


function App() {
  const imageVersion = '123';
  const queryClient = new QueryClient();

  const [isLoading, setIsLoading] = useState(true);

  // Custom ScrollToTop component
  const ScrollToTop = () => {
    const { pathname } = useLocation();

    useEffect(() => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
    }, [pathname]);

    return null;
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false); // Hide loading screen after 5 seconds
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  const handleRoutes = () => {
    // Place any state updates or heavy computations inside startTransition
    startTransition(() => {
      // State updates and heavy computations go here

      // Example: Updating state variables
      // setStateValue(newValue);

      // Example: Heavy computations
      // const result = performHeavyComputation();
      // console.log(result);
    });

    // Return the routes JSX
    return (
      <Routes>
        <Route
          index
          element={(
            <React.Suspense fallback={<Loading />}>
              <Home />
            </React.Suspense>
          )}
        />
        <Route
          path='/about-us'
          element={(
            <React.Suspense fallback={<Loading />}>
              <About />
            </React.Suspense>
          )}
        />
        <Route
          path='/privacy-policy'
          element={(
            <React.Suspense fallback={<Loading />}>
              <Privacy />
            </React.Suspense>
          )}
        />
        <Route
          path='/contact'
          element={(
            <React.Suspense fallback={<Loading />}>
              <Contact />
            </React.Suspense>
          )}
        />
        <Route
          path='/covid-19'
          element={(
            <React.Suspense fallback={<Loading />}>
              <Covid19 />
            </React.Suspense>
          )}
        />
        <Route
          path='/donate'
          element={(
            <React.Suspense fallback={<Loading />}>
              <Donate />
            </React.Suspense>
          )}
        />
        <Route
          path='/apply-now'
          element={(
            <React.Suspense fallback={<Loading />}>
              <Apply />
            </React.Suspense>
          )}
        />
        <Route path="/xyzadmin123" element={<AdminAuths />} />
        <Route
          path="/application-form"
          element={(
            <React.Suspense fallback={<Loading />}>
              <ApplyForm />
            </React.Suspense>
          )}
        />
        <Route
          path="/our-impact"
          element={(
            <React.Suspense fallback={<Loading />}>
              <Impact />
            </React.Suspense>
          )}
        />
        <Route
          path="/our-impact/nourishing-live"
          element={(
            <React.Suspense fallback={<Loading />}>
              <Nourishing />
            </React.Suspense>
          )}
        />
        <Route
          path="/our-impact/empowering-change"
          element={(
            <React.Suspense fallback={<Loading />}>
              <Others />
            </React.Suspense>
          )}
        />
        <Route
          path="/our-impact/afforestation"
          element={(
            <React.Suspense fallback={<Loading />}>
              <TreePlanting />
            </React.Suspense>
          )}
        />
        <Route
          path="/our-impact/power-of-education"
          element={(
            <React.Suspense fallback={<Loading />}>
              <Education />
            </React.Suspense>
          )}
        />
      </Routes>
    );
  };

  return (
    <>
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <ScrollToTop />
          {isLoading ? ( // Display loading screen while isLoading is true
            <Loading />
          ) : (
            <Layout>
              <Suspense fallback={<Loading />}>
                {handleRoutes()}
              </Suspense>
            </Layout>
          )}
        </BrowserRouter>
      </QueryClientProvider>
    </>
  );
}

export default App;
