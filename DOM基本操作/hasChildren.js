Element.prototype.hasChildElement=function(){
  var child=this.childNodes;
  for(var i=0,len=child.length;i<len;i++){
    if(child[i].nodeType==1){
      return true;
    }
  }
  return false;
}