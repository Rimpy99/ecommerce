import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import ExplorePage from "./pages/ExplorePage";
import { ThemeProvider } from '@mui/material/styles';
import { theme } from './styles/theme';
import HomePage from "./pages/HomePage";
import AuthPage from "./pages/AuthPage";
import ProductDetailsPage from "./pages/ProductDetailsPage";

const App = () => {

  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path='/' element={<HomePage/>}/>
          <Route path='/men' element={<ExplorePage/>}/>
          <Route path='/women' element={<ExplorePage/>}/>
          <Route path='/onsale' element={<ExplorePage/>}/>
          <Route path='/auth' element={<AuthPage />}/>
          <Route path='/products/:productId' element={<ProductDetailsPage/>}/>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;