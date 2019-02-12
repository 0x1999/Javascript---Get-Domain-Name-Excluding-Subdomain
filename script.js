var domain = (function(){
   var i=0,domain=document.domain,p=domain.split('.'),s='_gd'+(new Date()).getTime();
   while(i<(p.length-1) && document.cookie.indexOf(s+'='+s)==-1){
      domain = p.slice(-1-(++i)).join('.');
      document.cookie = s+"="+s+";domain="+domain+";";
   }
   document.cookie = s+"=;expires=Thu, 01 Jan 1970 00:00:01 GMT;domain="+domain+";";
   return domain;
})();
console.log(domain)
