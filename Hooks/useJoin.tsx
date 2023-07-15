import { useRouter } from "next/navigation";
import { useState } from "react";

export default function useJoin() {
  const [id, setId] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");

  const router = useRouter();

  const handleJoin = async (event: any) => {
    event.preventDefault();

    try {
      const response = await fetch("http://localhost:3000/api/auth/join", {
        method: "POST",
        body: JSON.stringify({ id, email, password }),
      });

      if (response.status === 500) {
        const result = await response.json();
        alert(result);
      }

      if (response.status === 201) {
        alert("성공적으로 회원가입을 마쳤습니다.");
        router.push("/login");
      }
    } catch (error) {
      alert("에러가 발생했습니다. 나중에 다시 시도해주세요.");
    }
  };

  return null;
}
