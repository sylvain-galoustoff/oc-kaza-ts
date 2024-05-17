import Footer from "./common/Footer/Footer";
import Header from "./common/Header/Header";
import { Route, Routes } from "react-router-dom";
import NotFound from "./routes/NotFound/NotFound";
import Home from "./routes/Home/Home";
import Logement from "./routes/Logement/Logement";
import About from "./routes/About/About";

function App() {
  return (
    <div id="app">
      <Header />
      <Routes>
        <Route path="*" element={<NotFound />} />
        <Route path="/" element={<Home />} />
        <Route path="/logement/:id" element={<Logement />} />
        <Route path="/a-propos" element={<About />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
