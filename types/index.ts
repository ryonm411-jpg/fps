export type NavigationItem = {
  name: string;
  href: string;
  icon: string;
  badge?: string | number;
};

export type UserProfile = {
  id: string;
  clerkId: string;
  email: string;
  username?: string | null;
  name?: string | null;
  avatarUrl?: string | null;
  virtualCash: string | number;
};

export type PlayerSummary = {
  id: string;
  name: string;
  slug: string;
  position: string;
  nationality: string;
  age: number;
  avatarUrl?: string | null;
  number?: number | null;
  club: {
    name: string;
    code: string;
    league: string;
  };
  market?: {
    currentPrice: number | string;
    change24h: number | string;
    volume24h: number | string;
    high24h: number | string;
    low24h: number | string;
  } | null;
};

export type ApiResponse<T> = {
  data?: T;
  error?: {
    code: string;
    message: string;
  };
};
