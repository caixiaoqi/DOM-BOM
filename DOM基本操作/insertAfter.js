Element.prototype.insertAfter(targetNode,afertNode)=function(){
  var beforeNode=afterNode.nextElementSibling;
  if(beforeNode){
    this.insertBefore(targetNode,beforeNode);
  }else{
    this.appendChild(targetNode);
  }
}