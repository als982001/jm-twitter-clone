import { useRouter } from "next/navigation";
import { useState } from "react";

export default function useJoin() {
  const [joinInfo, setJoinInfo] = useState({
    email: "",
    nickname: "",
    password: "",
    password2: "",
  });

  const [isLoading, setIsLoading] = useState(true);

  const router = useRouter();

  const handleJoin = async (event: any) => {
    event.preventDefault();

    try {
      const response = await fetch("http://localhost:3000/api/auth/join", {
        method: "POST",
        body: JSON.stringify(joinInfo),
      });

      if (response.status === 500) {
        const result = await response.json();
        alert(result);
      }

      if (response.status === 201) {
        alert("성공적으로 회원가입을 마쳤습니다.");
        router.push("/api/auth/signin");
      }
    } catch (error) {
      alert("에러가 발생했습니다. 나중에 다시 시도해주세요.");
    }
  };

  return { joinInfo, setJoinInfo, isLoading, setIsLoading, handleJoin };
}
