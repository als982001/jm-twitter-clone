import mongoose from "mongoose";
const BACK = "http://localhost:3000/api";

export const getTwitsFromIndex = async (idx: number) => {
  try {
    const response = await fetch(`${BACK}/twits?idx=${idx}`, {
      method: "GET",
    });

    const data = await response.json();

    return { status: response.status, data };
  } catch (error: any) {
    return { status: 400, data: [] };
  }
};

export const getTwitsByNickname = async (idx: number, nickname: string) => {
  try {
    const response = await fetch(
      `${BACK}/twits?idx=${idx}&nickname=${nickname}`,
      {
        method: "GET",
      }
    );

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
    const response = await fetch(`${BACK}/twit`, {
      method: "POST",
      body: JSON.stringify(newTwit),
    });

    const data = await response.json();

    return { status: response.status, data };
  } catch (error) {
    return { status: 400, data: null };
  }
};

export const postLike = async (twitId: mongoose.Types.ObjectId | string) => {
  try {
    const response = await fetch(`${BACK}/twit/like?twitId=${twitId}`, {
      method: "PATCH",
    });

    const data = await response.json();

    return { status: response.status, data };
  } catch (error) {
    return { status: 400, data: null };
  }
};
