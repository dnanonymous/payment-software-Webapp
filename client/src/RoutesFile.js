import { BrowserRouter , Routes, Route} from 'react-router-dom'
import HomePage from './pages/home'
import DashboardPage from './pages/dashboard'

export const RoutesFileD = () => {

    return (
        <BrowserRouter>
          <Routes>
            <Route path="/home" element={<HomePage />} />
            <Route path="/dashboard" element={<DashboardPage />} />
          </Routes>
        </BrowserRouter>
      );
    };