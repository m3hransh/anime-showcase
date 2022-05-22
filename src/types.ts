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
	averageRating: string;
	status: string;
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
