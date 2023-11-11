import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import ProductsPage from "./pages/ProductsPage";
import { ThemeProvider } from '@mui/material/styles';
import { theme } from './styles/theme';
import HomePage from "./pages/HomePage";

const App = () => {

  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path='/' element={<HomePage/>}/>
          <Route path='/men' element={<ProductsPage/>}/>
          <Route path='/women' element={<ProductsPage/>}/>
          <Route path='/onsale' element={<ProductsPage/>}/>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;