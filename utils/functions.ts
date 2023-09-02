import { IImageResponse } from "./types";

const BACK = "http://127.0.0.1:3000/api";

export function notImplementedYet() {
  alert("아직 개발 중인 기능입니다.");
}

export function getNameFromEmail(email: string) {
  const name = email.split("@")[0];

  return name;
}

export function PleaseWait() {
  alert("추후 완성될 기능입니다.");
}

export function getCurrentTime() {
  const now = new Date(); // 현재 날짜 및 시간을 얻습니다.

  const year = now.getFullYear(); // 년도를 얻습니다.
  const month = now.getMonth() + 1; // 월을 얻습니다. 월은 0(1월)에서 11(12월) 사이의 값을 가지므로 1을 더합니다.
  const day = now.getDate(); // 일을 얻습니다.
  const hours = now.getHours(); // 시간을 얻습니다.
  const minutes = now.getMinutes(); // 분을 얻습니다.
  const seconds = now.getSeconds();

  return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
}

export const getImageUrl = async (imageName: string, image: File) => {
  imageName = encodeURIComponent(imageName);

  let result = await fetch(`${BACK}/post/image?file=${imageName}`);
  let uploadResponse: IImageResponse = await result.json();

  //S3 업로드
  const formData = new FormData();
  Object.entries({ ...uploadResponse.fields, file: image }).forEach(
    ([key, value]) => {
      formData.append(key, value);
    }
  );

  let uploadResult = await fetch(uploadResponse.url, {
    method: "POST",
    body: formData,
  });

  if (uploadResult.ok) {
    return `${uploadResult.url}/${imageName}`;
  } else {
    return null;
  }
};

export const checkLogin = async () => {
  try {
    const response = await fetch(`${BACK}/checkLogin`);

    const data = await response.json();

    return { status: response.status, data };
  } catch (error) {
    return { status: 400, data: null };
  }
};

export const getUserInfo = async () => {
  try {
    const response = await fetch(`${BACK}/get/userinfo`);

    const data = await response.json();

    return { status: response.status, data };
  } catch (error) {
    return { status: 400, data: null };
  }
};
