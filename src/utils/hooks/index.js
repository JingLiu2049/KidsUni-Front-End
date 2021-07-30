import{useRef,useEffect} from 'react'

export const useComponentWillMount = func => {
    const willMount = useRef(true);
  
    if (willMount.current) {
      func();
    }
    willMount.current = false;
  };
// eslint-disable-next-line
 export const useComponentDidMount = func => useEffect(func, [])
 // eslint-disable-next-line
 export const useComponentWillUnmount = func => useEffect(()=>func,[])