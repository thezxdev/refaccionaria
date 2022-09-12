import { Route, Routes } from 'react-router-dom';
import { AuthRoutes } from '../auth/routes/AuthRoutes';
import { RylyRoutes } from '../ryly/routes/RylyRoutes';

export const AppRouter = () => {
  return (
    <Routes>

      {/* Rutas privadas */}
      <Route path="/auth/*" element={ <AuthRoutes /> } />

      {/* Rutas públicas */}
      <Route path="/*" element={ <RylyRoutes /> } />



    </Routes>
  )
}
