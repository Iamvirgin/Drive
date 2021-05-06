import request from "@/api/request";

// 获取当前root目录的列表
// test
export function getDirectoryInfo(fileId) {
  return request.get(`/file/get/${fileId}`);
}