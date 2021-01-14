const removeFromArray = function(arr, ...elements){
    elements.forEach((element)=>{
      let index = arr.indexOf(element);
      if(index!==-1)
        arr.splice(index, 1);
    })
    return arr;
}

module.exports = removeFromArray;