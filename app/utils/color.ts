const djb2Hash = (str: string): number => {
  let hash = 5381;
  for (let i = 0; i < str.length; i++) {
    hash = (hash << 5) + hash + str.charCodeAt(i);
  }
  return hash >>> 0;
};

/**
 * Returns a background color for a given tag
 * Uses deterministic hashing to consistently assign a unique color to each tag
 */
export const getTagColor = (tag: string): string => {
  const hash = djb2Hash(tag + ":" + tag.length + "nislog-salt");
  const TOTAL_COLORS = 300;
  const index = hash % TOTAL_COLORS;
  const hue = (360 / TOTAL_COLORS) * index;
  return `oklch(45% 0.1 ${hue.toFixed(2)}deg)`;
};
