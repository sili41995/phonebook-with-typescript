const getTelegramLink = (tgUsername: string) =>
  tgUsername.startsWith('@') ? tgUsername.slice(1) : tgUsername;

export default getTelegramLink;
