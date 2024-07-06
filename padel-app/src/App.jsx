import {QueryClient, QueryClientProvider} from 'react-query';
import {BrowserRouter, Route, Routes, useLocation} from 'react-router-dom';
import './App.css'
import LandingPage from "./containers/LandingPage/LandingPage";
import VoucherPage from "./containers/VoucherPage/VoucherPage";
import VoucherReader from "./containers/VoucherReader/VoucherReader";
import {useEffect} from "react";
import ReactPixel from "react-facebook-pixel";
import ClientsPage from "./containers/ClientsPage/ClientsPage";

const queryClient = new QueryClient();

function App() {

  return (
      <QueryClientProvider client={queryClient}>
          <BrowserRouter basename={import.meta.env.VITE_BASE_URL}>
              <RouteChangeTracker />
              <Routes>
                  <Route path="/voucher/:voucherCode" element={<VoucherPage />} />
                  <Route path="/voucher/reader" element={<VoucherReader />} />
                  <Route path="/clients" element={<ClientsPage />} />
                  <Route path="*" element={<LandingPage />} />
              </Routes>
          </BrowserRouter>
      </QueryClientProvider>
      )
}

function RouteChangeTracker() {
    const location = useLocation();

    useEffect(() => {
        ReactPixel.pageView();
    }, [location]);

    return null;
}

export default App
