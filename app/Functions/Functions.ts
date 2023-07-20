export function getNameFromEmail(email: string) {
  const name = email.split("@")[0];

  return name;
}

export function PleaseWait() {
  alert("추후 완성될 기능입니다.");
}
