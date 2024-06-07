import { EVENTS } from "./consts";
import { useState,useEffect } from "react";
import { match } from "path-to-regexp";

export function Router({ routes = [], defaultComponent: DefaultComponent = () => <h1>404</h1> }) {
    const [currentPath, setCurrentPath] = useState(window.location.pathname);
    //Con estoe scuchamos cuando cambai la url
    useEffect(() => {
      const onLocationChange = () => {
        setCurrentPath(window.location.pathname);
      }
      window.addEventListener(EVENTS.PUSHSTATE, onLocationChange);
      window.addEventListener(EVENTS.POPSTATE, onLocationChange);
      return () => {
        window.removeEventListener(EVENTS.PUSHSTATE, onLocationChange);
        window.removeEventListener(EVENTS.POPSTATE, onLocationChange);
      }
    }, [])

  let routeParams = {}
    const Page = routes.find(({ path }) =>{ 
        if(path === currentPath)return true
        //Estoy usando path-to-regexp
        // para dectetar routas dinamiscas
       // /search/query:

       const matcheUrl = match(path, { decode: decodeURIComponent })
       const matched = matcheUrl(currentPath)
       if(!matched)return false
       //Guardar los parametors de la url que eran dinamicos
       routeParams = matched.params //querey: 'lo que sea'
    return true
    })?.Component
  
    return Page ? <Page routeParams={routeParams} /> : <DefaultComponent routeParams={routeParams} />;
  }