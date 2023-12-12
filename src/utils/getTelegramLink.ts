const getTelegramLink = (
  tgUsername: string | undefined
): string | undefined => {
  if (!tgUsername) return;

  return tgUsername.startsWith('@') ? tgUsername.slice(1) : tgUsername;
};

export default getTelegramLink;
