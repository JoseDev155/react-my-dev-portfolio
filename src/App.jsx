import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { HomePage } from './pages/HomePage';
import { NotFoundPage } from './pages/NotFoundPage';

export const App = () => {
  return (
    <>
      <BrowserRouter>
        
        <Routes>
          <Route index element={<HomePage />} />
          <Route path='*' element={<NotFoundPage />} />
        </Routes>

      </BrowserRouter>
    </>
  );
};