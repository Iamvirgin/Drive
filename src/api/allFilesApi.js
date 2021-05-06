import request from "@/api/request";

// 获取当前列表
export function getDriveListApi(params) {
  return request.post(`/file/sub-files`,params);
}

// 文件重命名
export function reNameFile(params) {
  return request.post(`/file/rename`,params);
}

// 获取当前root目录的列表
export function deleteFiles(params) {
  return request.post(`/file/batchDelete`,params);
}

//新建文件夹
export function addNewDirectory(params) {
  return request.post( `/file/add-file`,params);
}

//移动文件
export function moveFiles(params) {
  return request.post( `/file/move`,params);
}

//copy files
export function copyFiles(params) {
  return request.post(`/file/copy`, params);
}
