//获得页面的滚动
function getScrollOffset(){
  if(window.pageXOffset){
    return {x:window.pageXOffset,y:window.pageYOffset}
  }else{  
    return{
      x:document.body.scrollLeft+document.documentElement.scrollLeft,
      y:document.documentElement.scrollTop+document.documentElement.scrollTop
    }
  }
}

//获得窗口整个页面的尺寸
function getWidth(){
  if(window.innerWidth){        //W3C
    return{
      x:window.innerWidth,
      y:window.innerHeight
    }
  }else if(document.compatMode="CSS1Compact"){    //标准模式
    return{
      x:document.documentElement.clientWidth,
      y:document.documentElement.clientHeight
    }
  }else{
    return{
      x:document.body.clientWidth,
      y:document.body.clientHeight
    }
  }
}


//getBoundingClientRect() //视口坐标 包括border+padding+width  height和width在IE里面没有
//返回的结果不是实时的 ES5的方法  一般用不到

//offsetWidth
//offsetHeight  没有单位

//clientWidth
//clientHeight  没有单位

//window.scrollTo()  window.scrollBy()
