import {gApi} from '@/api/gapi'

// 测试的获取ws地址的函数，实际是不需要的
async function getWsUrl() {
  const res = await fetch(
    "https://chongqing.dxdu.cn:8060/netcore/api/hik/preview-url",
    {
      method: "POST", // *GET, POST, PUT, DELETE, etc.
      mode: "cors", // no-cors, *cors, same-origin
      cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
      credentials: "same-origin", // include, *same-origin, omit
      headers: {
        "Content-Type": "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJVc2VySWQiOjIxNTIyNjU4MTEzMjIxLCJBY2NvdW50IjoieXVud2VpIiwianRpIjoyNDU4NDAxMDMxNDQzNywiaWF0IjoxNzc0MjI3NzgyLCJuYmYiOjE3NzQyMjc3ODIsImV4cCI6MTc3NDQwMDU4MiwiaXNzIjoi562-5Y-R5pa5IiwiYXVkIjoi562-5pS25pa5In0.00llUvWWRFtdx95glHt1V5KpjqQkfx4dNwAyO24CWWY",
      },
      redirect: "follow", // manual, *follow, error
      referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
      body: JSON.stringify({
        cameraIndexCode: "b88010d5d5f64150a8919699798d0b98",
        inout: "2",
        streamType: 1,
        protocol: "ws",
      }), // body data type must match "Content-Type" header
    },
  ).then((response) => response.json());
  return {
    data: res,
  };
}

export const monitorApi = {
  hikControlling: async (...args) => {
    return {
      data:await gApi.apiHikHikControllingPost(...args)
    }
  }, // 云台控制
  playbackHlsUrl: async (...args) => {
    return {
      data: await gApi.apiHikPlaybackHlsUrlPost(...args)
    }
  }, // 获取回放hls地址
  getPreviewUrl: (payload) => {
    if (["ws", "wss"].includes(payload.protocol)) {
      return getWsUrl(payload);
    }
    return (async (...args) => {
      return {
        data: await gApi.apiHikPreviewUrlPost(payload)
      }
    })()
  }, // 获取hls地址
};
