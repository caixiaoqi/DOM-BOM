//如何区分元素节点和非元素节点
//nodeType中element的nodeType为1
Element.prototype.myChildren=function(){
  var child=this.childNodes;
  var len=child.length;
  var result=[];
  for(var i=0;i<len;i++){
    if(child[i].nodeType==1){
      result.push(child[i]);
    }
  }
  return child;
}