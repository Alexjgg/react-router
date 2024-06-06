import { EVENTS } from "./consts";
export function navigate(href) {
    window.history.pushState([], '', href);
    //crear un evento personalizado 
    const navigationEvent = new Event(EVENTS.PUSHSTATE);
    window.dispatchEvent(navigationEvent);
  
  }

export function Link ({target,to, ...props}){
  const handleClike = (event)=>{
    //evita el comportamiento por defecto del link
    ;

    const isMainEvent = event.button=== 0 //boton principal
    //comprobar si el evento esta modificado
    const isModifiedEvent = event.metaKey || event.altKey || event.ctrlKey || event.shiftKey;
    //si el target es si mismo
    const isManageableEvent = target === undefined || target==='_self';
    
    if(isMainEvent && isManageableEvent && !isModifiedEvent){
      event.preventDefault()
      navigate(to);
    }
    

  }
return <a onClick={handleClike} href={to} target={target} {...props}></a>
}