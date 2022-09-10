import { Navigate, Route, Routes } from 'react-router-dom';
import {
  HomePage,
  ProductPage,
  ProductsPage,
  SalePage,
  SalesPage,
  SupplierPage,
  SuppliersPage
} from '../pages';

export const RylyRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={ <HomePage /> } />

      <Route path="/products" element={ <ProductsPage /> } />
      <Route path="/products/:id" element={ <ProductPage /> } />

      <Route path="/suppliers" element={ <SuppliersPage /> } />
      <Route path="/suppliers/:id" element={ <SupplierPage /> } />

      <Route path="/sale" element={ <SalePage /> } />
      <Route path="/sales" element={ <SalesPage /> } />

      <Route path="/*" element={ <Navigate to="/" /> } />
    </Routes>
  )
}
