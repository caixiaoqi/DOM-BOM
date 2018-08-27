function addEvent(elem,type,handle){
  if(elem.addEventListener){
    elem.addEventListener(type,handle,false);
  }
  else if(elem.attachEvent){
    elem.attachEvent('on'+type,function(){
      handle.call(elem);    //由于IE的的this指向的是window
    })
  }
  else{
    elem['on'+type]=handle;
  }
}

//事件冒泡
function stopPropagation(e){
  if(e.stopPropagation){
    e.stopPropagation();
  }else if(e.cancelBubble){
    e.cancelBubble=true;
  }
}

//默认动作
function preventDefault(e){
  if(e.preventDefault){
    e.preventDefault();
  }
  else if(e.returnValue){
    e.returnValue=false;
  }
}

//IE浏览器是不会出入事件对象的，所以需要兼容
e=e||window.event;

//事件目标
function target(e){
  if(e.target){
    return e.target;
  }else if(e.srcElement){
    return e.srcElement;
  }
}