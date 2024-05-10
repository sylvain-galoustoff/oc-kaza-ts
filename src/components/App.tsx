import Footer from "./common/Footer/Footer";
import Header from "./common/Header/Header";
import { Route, Routes } from "react-router-dom";
import NotFound from "./routes/NotFound/NotFound";
import Home from "./routes/Home/Home";

function App() {
  return (
    <div id="app">
      <Header />
      <Routes>
        <Route path="*" element={<NotFound />} />
        <Route path="/" element={<Home />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
