export const SocialList = {
  RSS: "rss",
  GITHUB: "github",
  TWITTER: "twitter",
  LINKEDIN: "linkedin",
  BLUESKY: "bluesky",
} as const;

export type SocialType = (typeof SocialList)[keyof typeof SocialList];
