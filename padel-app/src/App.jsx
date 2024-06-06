import {QueryClient, QueryClientProvider} from 'react-query';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import './App.css'
import LandingPage from "./containers/LandingPage/LandingPage";

const queryClient = new QueryClient();

function App() {

  return (
      <QueryClientProvider client={queryClient}>
          <BrowserRouter basename={import.meta.env.BASE_URL}>
              <Routes>
                  <Route path="*" element={<LandingPage />} />
              </Routes>
          </BrowserRouter>
      </QueryClientProvider>
      )
}

export default App
