import env from '../config/env';

module.exports = Object.keys(env).reduce((acc,key)=>{
  //Override with window.env if exited
  const rk = key.replace(/process\.env\./,'');
  let v = (typeof window !== 'undefined' && window.env && typeof window.env[rk] !== 'undefined')?window.env[rk]:JSON.parse(env[key]);
  if(v==="true") v=true;
  if(v==="false") v=false;
  return {...acc,[key.replace(/^process\.env\./,'')]:v};
},{})