export const getTwitsFromIndex = async (idx: number) => {
  try {
    const response = await fetch(`http://localhost:3000/api/twits?idx=${idx}`, {
      method: "GET",
    });

    const data = await response.json();

    return { status: response.status, data };
  } catch (error: any) {
    return { status: 400, data: [] };
  }
};

export const postTwit = async (newTwit: {
  imageUrl: string;
  content: string;
}) => {
  try {
    const response = await fetch("http://localhost:3000/api/post/twit", {
      method: "POST",
      body: JSON.stringify(newTwit),
    });

    const data = await response.json();

    return { status: response.status, data };
  } catch (error) {
    return { status: 400, data: null };
  }
};
