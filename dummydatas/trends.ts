interface ITrends {
  id: number;
  content: string;
  twitNum: number;
}

export const trends: ITrends[] = [
  {
    id: 0,
    content: "제육덮밥",
    twitNum: 101,
  },
  { id: 1, content: "제육볶음", twitNum: 100 },
  { id: 2, content: "자장면", twitNum: 100 },
  { id: 3, content: "탕수육", twitNum: 100 },
  { id: 4, content: "짬뽕", twitNum: 100 },
  { id: 5, content: "돈가스", twitNum: 100 },
  { id: 6, content: "치킨", twitNum: 100 },
  { id: 7, content: "양념치킨", twitNum: 100 },
  { id: 8, content: "돼지국밥", twitNum: 100 },
  { id: 9, content: "섞어국밥", twitNum: 100 },
];
