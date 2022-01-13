import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NewsProvider from "./context/newsContext";
import Header from "./components/layout/Header";
import Archive from "./components/views/Archive";
import News from "./components/views/news/News";

function App() {
  return (
    <>
      <NewsProvider>
        <Router>
          <Header />
          <Routes>
            <Route path="/news" element={<News />}></Route>
            <Route path="/archive" element={<Archive />}></Route>
          </Routes>
        </Router>
      </NewsProvider>
    </>
  );
}

export default App;
