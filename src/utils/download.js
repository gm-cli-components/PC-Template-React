/**
 * 根据二进制流、contentType、文件名 下载文件
 * @param data 二进制流
 * @param contentType 内容类型
 * @param fileName  下载后的文件名
 */
export const download = (data, contentType, fileName) => {
  let blob = new Blob([data], { type: contentType });
  if ('msSaveOrOpenBlob' in window.navigator) {
    // IE,Edge浏览器
    window.navigator.msSaveOrOpenBlob(blob, fileName);
  } else {
    let a = document.createElement('a');
    a.style.display = 'none';
    document.body.appendChild(a);
    const url = window.URL || window.webkitURL || window.moxURL;
    let link = url.createObjectURL(blob);
    a.href = link;
    a.download = fileName;
    a.click();
    document.body.removeChild(a);
    window.URL.revokeObjectURL(link);
  }
};
