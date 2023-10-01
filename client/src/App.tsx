import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import HomePage from "./pages/HomePage";
import { ThemeProvider } from '@mui/material/styles';
import { theme } from './styles/theme';

const App = () => {

  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path='/' element={<HomePage/>}/>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
