import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

const useActiveNav = () => {
  const location = useLocation();
  const [activeLink, setActiveLink] = useState("/");

  useEffect(() => {
    setActiveLink(location.pathname);
  }, [location.pathname]);

  const isActive = (path) => activeLink === path;

  return { activeLink, isActive };
};

export default useActiveNav;
