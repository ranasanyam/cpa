import { useEffect } from "react";
import { useLocation } from "react-router-dom";


export const useScrollReset = () => {
    const location = useLocation();
    useEffect(() => {
        if(location.pathname !== '/') {
            setTimeout(function () {
                window.scrollTo({ top: 0, behavior: 'smooth' });
            });
        }
    }, [location.pathname]);
    return null;
}