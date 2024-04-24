import "./App.css";
import Nav from "./component/nav";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./component/footer";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/" element={<h1>Product Listing Page</h1>} />
          <Route path="/profile" element={<h1>Profile Page</h1>} />
          <Route path="/productAdd" element={<h1>Product Add Page</h1>} />
          <Route path="/ProductUpdate" element={<h1>Product Update Page</h1>} />
          <Route path="/logout" element={<h1>Logout</h1>} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
