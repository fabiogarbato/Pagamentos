import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from './Login'
import PrivateRoute from './PrivateRoute';
import { AuthProvider } from './AuthProvider';

function RoutesApp() {
    return (
      <AuthProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Login />} />
            {/* <Route path="/mapeador" element={<PrivateRoute><Mapeador /></PrivateRoute>} /> */}
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    );
  }

export default RoutesApp;
