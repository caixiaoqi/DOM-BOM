//返回元素的第n层父亲
Element.prototype.retParent(elem,n)=function(){
  var father=elem;
  for(i=0;i<n;i++){
   father=elem.parentNode;
   if(!father){
     return null;
   }
  }
  return father;
}