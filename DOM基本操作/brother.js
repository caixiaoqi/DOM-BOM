//分装函数，返回第n个兄弟节点，正为后面，负为前面
function retSibling(e,n){
  while(e&&n){
    if(n>0){
      e=e.nextSibling;
      n--;
    }
    else{
      e=e.previousSibling;
      n++;
    }
  }
  return e;
}