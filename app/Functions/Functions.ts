export function getNameFromEmail(email: string) {
  const name = email.split("@")[0];

  return name;
}

export function PleaseWait() {
  alert("추후 완성될 기능입니다.");
}

export function getCurrentTime() {
  const now = new Date(); // 현재 날짜 및 시간을 얻습니다.

  const year = now.getFullYear(); // 년도를 얻습니다.
  const month = now.getMonth() + 1; // 월을 얻습니다. 월은 0(1월)에서 11(12월) 사이의 값을 가지므로 1을 더합니다.
  const day = now.getDate(); // 일을 얻습니다.
  const hours = now.getHours(); // 시간을 얻습니다.
  const minutes = now.getMinutes(); // 분을 얻습니다.
  const seconds = now.getSeconds();

  return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
}
