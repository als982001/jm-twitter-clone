export const join = async (joinInfo: {
  email: string;
  nickname: string;
  password: string;
  password2: string;
  imageUrl: string;
}) => {
  try {
    const response = await fetch("http://localhost:3000/api/auth/join", {
      method: "POST",
      body: JSON.stringify(joinInfo),
    });

    const data = await response.json();

    return { status: response.status, data };
  } catch (error) {
    return { status: 500, data: null };
  }
};
