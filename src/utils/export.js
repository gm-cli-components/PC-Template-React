import qs from 'qs';

/**
*
*
* @param {string} url
* @param {{}} params
*/
function exportFiles(url, params) {
  const newParams = { ...params };
  // 项目经理暂定导出最大条数由前端写死为10000条
  newParams.limit = 10000;
  const stringParams = qs.stringify(newParams, { indices: false });
  const a = document.createElement('a');
  a.style.display = 'none';
  a.href = url + '?' + stringParams;
  a.target = '_blank';
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
}

export { exportFiles };
