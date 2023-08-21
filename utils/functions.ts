export const getImageUrl = async (imageName: string, image: File) => {
  imageName = encodeURIComponent(imageName);

  let uploadResponse = await fetch(
    `http://localhost:3000/api/post/image?file=${imageName}`
  );
  uploadResponse = await uploadResponse.json();

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
    const response = await fetch("http://localhost:3000/api/checkLogin");

    const data = await response.json();

    if (data === null) {
      window.location.href = "/api/auth/signin"; // 페이지 리다이렉트
      return;
    }

    return { status: response.status, data };
  } catch (error) {
    return { status: 400, data: null };
  }
};

export const getUserInfo = async () => {
  console.log("아 진짜 뭐하냐고!!!");
  try {
    const response = await fetch("http://localhost:3000/api/get/userinfo");

    const data = await response.json();

    if (response.status === 401) {
      window.location.href = "/api/auth/signin";
      return;
    }

    return { status: response.status, data };
  } catch (error) {
    return { status: 400, data: null };
  }
};
