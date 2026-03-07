import Navbar from "./Navbar";
import Footer from "./Footer";
import CustomCursor from "../components/CustomCursor";
import useSmoothScroll from "../hooks/useSmoothScroll";
import useCursor from "../hooks/useCursor";
import "./Mainlayout.scss";

const MainLayout = ({ children }) => {
  useSmoothScroll();
  useCursor();

  return (
    <>
      <CustomCursor />
      <Navbar />
      <main className="layout__main">{children}</main>
      <Footer />
    </>
  );
};

export default MainLayout;
