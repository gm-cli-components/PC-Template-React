// 对象数组去重复 
// arry 数组
// tag 根据对象里的某个字段去重复
function distinct (array, tag) {
  if (!array || !tag) return;
  let result = [];
  let obj = {};
  for (let i of array) {
    if (!obj[i[tag]]) {
      result.push(i);
      obj[i[tag]] = true;
    }
  }
  return result;
}

export default distinct;