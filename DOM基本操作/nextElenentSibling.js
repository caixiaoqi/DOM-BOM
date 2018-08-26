function nextElementSibling(elem){
  var result=elem.nextSibling;
  while(!result.nodeType==1&&result){
    result=result.nextSibling;
  }
  return result;
}