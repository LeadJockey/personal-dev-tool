function map(array, callback){
  const newArray = [];
  array.forEach(function(item, idx){
    newArray.push(callback(item,idx));
  });
  return newArray;
}

module.exports = map;
