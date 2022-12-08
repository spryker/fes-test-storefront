const f=(e,t,s=!1)=>{let l,a=Date.now(),o=!0;return(...r)=>{const i=a+t-Date.now();(o||i<0)&&(a=Date.now(),e(...r),o=!1),s&&(clearTimeout(l),l=setTimeout(()=>{e(...r)},t))}};export{f as t};
