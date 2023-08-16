import { getCurrentTime } from "@/app/Functions/Functions";
import { getImageUrl } from "@/utils/functions";
import { postTwit } from "@/utils/twitFunctions";
import { ITwit } from "@/utils/types";
import { useEffect, useState } from "react";

interface IResult {
  status: number;
  data: ITwit | null;
}

export default function useMake() {
  const [content, setContent] = useState("");
  const [image, setImage] = useState<File | null>(null);
  const [imageUrl, setImageUrl] = useState("");
  const [newTwits, setNewTwits] = useState<ITwit[]>([]);

  const writeTwit = (event: React.ChangeEvent<HTMLInputElement>) => {
    setContent((prev) => event.target.value);
  };

  const postImage = async (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
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

  const handlePostTwit = async (event: any) => {
    event.preventDefault();

    const newTwit = {
      content,
      imageUrl: "",
    };

    if (image) {
      let imageName = encodeURIComponent(image.name);

      const imageUrl = await getImageUrl(imageName, image);

      if (imageUrl === null) {
        alert("이미지 업로드에 실패했습니다.");
        return;
      }

      newTwit.imageUrl = imageUrl;
    }

    try {
      const result: IResult = await postTwit(newTwit);

      console.log(result);

      if (result.status === 201) {
        alert("성공");

        setContent("");
        setImage(null);
        setImageUrl("");

        setNewTwits((prev) => [...prev, result.data as ITwit]);
      } else {
        alert("실패!");
      }
    } catch (error) {
      console.log(error);
      return;
    }
  };

  return {
    content,
    writeTwit,
    handlePostTwit,
    imageUrl,
    postImage,
    removeImage,
    newTwits,
  };
}
