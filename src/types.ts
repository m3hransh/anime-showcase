export interface Anime {
	id: string;
	type: string;
	links: Links;
	attributes: Attributes;
	relationships: Relationships;
}

export interface Attributes {
	titles: { en: string; en_jp: string; ja_jp: string };
	popularityRank: number;
	endDate: stirng;
  slug: string;
  description: string;
  startDate: string;
	averageRating: string;
  episodeCount: number;
  totalLength: number;
  showType: string;
	status: string;
  posterImage: {
    tiny: string;
    large: string;
    small: string;
    medium: string;
    original: string;
  };
  coverImage: {
    tiny: string;
    large: string;
    small: string;
    medium: string;
    original: string;
  }

	userCount: number;
	youtubeVideoId: string;
}

export interface Relationships {
  animeCharacters: Links;
}

export interface Links {
  self: string;
  related?: string;
}
