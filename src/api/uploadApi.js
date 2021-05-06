import request from '@/api/request';

// example
export async function requestUpload(params) {
    const res = await request.post('/file/request-upload-for-sdk', params);
    return res;
}
export async function notifyUploadVideoSuccess(params) {
    const res = await request.post('/file/add-file',params);
    return res;
}