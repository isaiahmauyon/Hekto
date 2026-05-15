import { useEffect, useState } from "react";

const validRoutes = ["home", "product", "cart", "blog"];

export function useHashRoute() {
  const getRoute = () => {
    const hash = window.location.hash.replace("#", "");
    return validRoutes.includes(hash) ? hash : "home";
  };

  const [route, setRouteState] = useState(getRoute);

  useEffect(() => {
    if (!window.location.hash) {
      window.location.hash = "home";
    }

    const handleHashChange = () => {
      setRouteState(getRoute());
      window.scrollTo({ top: 0, behavior: "smooth" });
    };

    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  const setRoute = (nextRoute) => {
    window.location.hash = nextRoute;
  };

  return [route, setRoute];
}
