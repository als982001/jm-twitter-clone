import { getImageUrl } from "@/utils/functions";
import { join } from "@/utils/userFunctions";
import { useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";

export default function useJoin() {
  const [joinInfo, setJoinInfo] = useState({
    email: "",
    nickname: "",
    password: "",
    password2: "",
  });

  const [isLoading, setIsLoading] = useState(true);
  const [image, setImage] = useState<File | null>(null);
  const [imageUrl, setImageUrl] = useState("");

  const router = useRouter();

  const imageInputRef = useRef<HTMLInputElement>(null);

  const handleJoin = async (event: any) => {
    event.preventDefault();

    if (image === null) {
      alert("유저 이미지를 등록하세요.");
      return;
    }

    const imageName = encodeURIComponent(image.name);

    const iconUrl = await getImageUrl(imageName, image);

    if (iconUrl === null) {
      alert("이미지 업로드에 실패했습니다. 나중에 다시 시도해주세요.");
      return;
    }

    const result = await join({ ...joinInfo, imageUrl: iconUrl });

    if (result.status === 201) {
      alert("성공적으로 회원가입을 마쳤습니다.");
      router.push("/api/auth/signin");
    } else {
      if (result.data) {
        alert(result.data);
      } else {
        alert("오류가 발생했습니다. 나중에 다시 시도해주세요.");
      }

      return;
    }
  };

  const handleInputImage = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files === null) {
      return;
    }

    const imageFile = event.target.files[0];

    setImage((prev) => imageFile);
    setImageUrl((prev) => URL.createObjectURL(imageFile));
  };

  const clickImageInput = () => {
    if (imageInputRef.current) {
      imageInputRef.current.click();
    }
  };

  return {
    joinInfo,
    setJoinInfo,
    isLoading,
    setIsLoading,
    handleJoin,
    imageUrl,
    handleInputImage,
    clickImageInput,
    imageInputRef,
  };
}
