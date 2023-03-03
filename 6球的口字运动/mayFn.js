function getStyle(el,attr){
    return window.getComputedStyle(el)[attr]
}

function moveFn(el,attr,target,step,speed,callback){
    step = parseFloat(getStyle(el,attr)) <target ?step : -step
    clearInterval(timer)
    timer = setInterval(() =>{
        let temp = parseFloat( getStyle(el,attr))
        let attrValue = temp + step
        if(attrValue > target && step >0 || attrValue < target && step < 0 ){
            attrValue = target
            clearInterval(timer)
        }
        el.style[attr] = attrValue + 'px'
        console.log(el.style.left);
        if(attrValue === target){
            clearInterval(timer)
            callback && callback()
        }
    },speed)
}