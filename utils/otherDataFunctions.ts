interface ITrends {
  id: number;
  content: string;
  twitNum: number;
}

interface IRecommendFollows {
  id: string;
  nickname: string;
  icon: string;
}

export const getTrends = async () => {
  try {
    const response = await fetch("http://localhost:3000/api/trends", {
      method: "GET",
      cache: "no-store",
    });
    const trends: ITrends[] = await response.json();

    return trends;
  } catch (error) {
    return [];
  }
};

export const getRecommendFollows = async () => {
  try {
    const response = await fetch(
      "http://localhost:3000/api/recommend-follows",
      {
        method: "GET",
      }
    );

    const recommends: IRecommendFollows[] = await response.json();

    return recommends;
  } catch (error) {
    return [];
  }
};
