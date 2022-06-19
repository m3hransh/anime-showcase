<script lang="ts">
	import type { Anime } from '../types';
	export let anime: Anime;
</script>

<div class="anime-card">
	<a href={`/anime/${anime.attributes.slug}`}>
		<img src={anime.attributes.posterImage.small} alt={anime.attributes.titles.en_jp} />
	</a>

	<div class="description">
		<h2>{anime.attributes.titles.en_jp}</h2>
		<p>{anime.attributes.startDate}</p>
	</div>
</div>

<style>
	img {
		width: 100%;
		height: 30vh;
		object-fit: cover;
		border-radius: 1rem;
		margin-bottom: 1rem;
	}
	h2 {
		font-size: 0.9rem;
	}
	.description {
		height: 5vh;
	}
	p {
		font-size: 0.7rem;
	}
	.anime-card {
		display: flex;
		flex-direction: column;
		justify-content: space-around;
		padding: 1rem;
	}
</style>
