import Navbar from "./components/Nav/Navbar.jsx";
import {
  Route,
  Outlet,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import HomePage from "./pages/home/HomePage.jsx";
import AboutPage from "./pages/about/AboutPage.jsx";
import ContactPage from "./pages/contact/ContactPage.jsx";
import ErrorPage from "./pages/ErrorPage.jsx";
import { useState } from "react";
import PopupLogin from "./components/popup/PopupLogin.jsx";
// import { AOS } from "aos";
// import "aos/dist/aos.css";

export default function App() {
  const [showPopup, setShowPopup] = useState(false);

  const handlePopup = () => {
    setShowPopup(true);
  };

 

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route
        path="/"
        element={
          <Root
            showPopup={showPopup}
            setShowPopup={setShowPopup}
            handlePopup={handlePopup}
          />
        }
      >
        <Route index element={<HomePage handlePopup={handlePopup} />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="*" element={<ErrorPage />} />
      </Route>
    )
  );

   // useEffect(() => {
  //   AOS.init({
  //     offset: 100,
  //     duration: 800,
  //     easing: "ease-in-sine",
  //     delay: 100,
  //   });
  //   AOS.refresh();
  // },[])

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

const Root = ({ showPopup, setShowPopup, handlePopup }) => {
  return (
    <>
      <div className="overflow-x-hidden">
        <Navbar handlePopup={handlePopup} />
        <PopupLogin showPopup={showPopup} setShowPopup={setShowPopup} />
        <Outlet />
      </div>
    </>
  );
};
