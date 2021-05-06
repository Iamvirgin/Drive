import request from "@/api/request";

// 获取用户信息
export function getConfigInfo() {
  return request.get('/base/config');
}

// 获取Default列表
export function getDefaultApi() {
  return request.get("/drive/default");
}

// 获取available-regions用户列表
export function getAvailableRegions(lan) {
  return request.get(`/drive/available-regions/${lan}`);
}

// 获取bucketList列表
export function getBucket(driveId, region) {
  return request.get(`/bucket/list/${driveId}?region=${region}`);
}

// 获取用户信息
export function getUserInfo() {
  return request.get(`/user/getUserInfo`);
}

// logo out用户列表
export function logOutApi() {
  return request.get(`/user/logOut`);
}

// 获取available-buckets用户列表
export function getAvailableBuckets(region) {
  return request.get(`/drive/available-buckets/${region}`);
}

// 获取available-buckets用户列表
export function createBucket(data) {
  return request.post(`/bucket/create`,data);
}

// 获取available-buckets用户列表
export function switchHomeRegion(data) {
  return request.post(`/drive/region/switch`,data);
}

// 数据同步列表
export function dataSyncApi(data) {
  return request.post(`/file/sync-with-s3-by-bucket`,data);
}
