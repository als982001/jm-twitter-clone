export const join = async (joinInfo: {
  email: string;
  nickname: string;
  password: string;
  password2: string;
  imageUrl: string;
}) => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/auth/join`,
      {
        method: "POST",
        body: JSON.stringify(joinInfo),
      }
    );

    const data = await response.json();

    return { status: response.status, data };
  } catch (error) {
    return { status: 500, data: null };
  }
};

export const findUserByNickname = async (nickname: string) => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/userinfo?nickname=${nickname}`
    );

    const data = await response.json();

    return { status: response.status, data };
  } catch (error) {
    return { status: 500, data: null };
  }
};

export const getLikeTwitsByUser = async (likes: string[], idx: number) => {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/likes`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ likes, idx }),
    });

    const data = await response.json();

    return { status: response.status, data };
  } catch (error) {
    return { status: 400, data: [] };
  }
};
