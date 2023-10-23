import { Route, Routes } from "react-router-dom";
import Footer from "./Footer/Footer";
import Header from "./Header/Header";
import Main from "./Main/Main";
import PageNotFound from "./PageNotFound/PageNotFound";
import PastEvents from "./PastEvents/PastEvents";
import AboutUs from "./AboutUs/AboutUs";

function App() {
  return (
    <div className="page">
      <Header />
      <main className="content">
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Main />
              </>
            }
          />
          <Route
            path="/past-events"
            element={
              <>
                <PastEvents />
              </>
            }
          />
          <Route
            path="/aboutUs"
            element={
              <>
                <AboutUs />
              </>
            }
          />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
