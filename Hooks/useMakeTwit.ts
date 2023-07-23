import { getCurrentTime } from "@/app/Functions/Functions";
import { useEffect, useState } from "react";

export default function useMake() {
  const [content, setContent] = useState("");
  const [image, setImage] = useState(null);
  const [imageUrl, setImageUrl] = useState("");

  const writeTwit = (event: React.ChangeEvent<HTMLInputElement>) => {
    setContent((prev) => event.target.value);
  };

  const postImage = async (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      console.log(event.target.files[0]);

      let file = event.target.files[0];
      let filename = encodeURIComponent(file.name);

      setImage(file);
      setImageUrl(URL.createObjectURL(file));
    }

    event.target.value = "";
  };

  const removeImage = () => {
    setImage((prev) => null);
    setImageUrl((prev) => "");
  };

  const postTwit = async (event: any) => {
    event.preventDefault();

    const newTwit = {
      content,
      imageUrl: "",
    };

    if (image) {
      let imageName = encodeURIComponent(image.name);

      console.log(imageName);

      let uploadResponse = await fetch(
        "http://localhost:3000/api/post/image?file=" + imageName
      );
      uploadResponse = await uploadResponse.json();

      console.log(uploadResponse);

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

      console.log(uploadResult);

      if (uploadResult.ok) {
        newTwit.imageUrl = `${uploadResult.url}/${imageName}`;
      } else {
        alert("이미지 업로드에 실패했습니다.");
        return;
      }
    }

    try {
      const response = await fetch("http://localhost:3000/api/post/twit", {
        method: "POST",
        body: JSON.stringify(newTwit),
      });

      if (response.status === 400 || response.status === 401) {
        const errorMsg = await response.json();
        alert(errorMsg);
      } else {
        alert("성공!");

        setContent("");
        setImage(null);
        setImageUrl("");
      }
    } catch (error) {
      console.log(error);
      return;
    }
  };

  return { content, writeTwit, postTwit, imageUrl, postImage, removeImage };
}
