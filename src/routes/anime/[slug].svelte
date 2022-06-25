<script lang="ts" context="module">
	import type { Load } from '@sveltejs/kit';
	import type { Anime } from '../../types';

	const headers = {
		Accept: 'application/vnd.api+json',
		'Content-Type': 'application/vnd.api+json'
	};

	export const load: Load<any, any, { anime: Anime }> = async ({ fetch, params }) => {
		const url = `https://kitsu.io/api/edge/anime?filter[slug]=${params.slug}`;
		const res = await fetch(url, { headers });
		const data = await res.json();
		if (res.ok) {
			return { props: { anime: data.data[0] } };
		} else {
			return {
				props: { anime: null }
			};
		}
	};
</script>

<script lang="ts">
	export let anime: Anime;
</script>

{#if anime?.attributes}
	<div class="anime-details">
		<h1>{anime.attributes.titles.en_jp}</h1>
		<div class="img-container">
			<img src={anime.attributes.coverImage.original} alt={anime.attributes.titles.en_jp} />
		</div>
		<div class="txt-container">
			<p class="overview">
				{anime.attributes.description}
			</p>
			<p>
				<span>Release date:</span>
				{anime.attributes.startDate} <br />
				<span>Rating:</span>
				{anime.attributes.averageRating} <br />
				<span>Show Type: </span>
				{anime.attributes.showType} <br />
				<span>Length: </span>
				{anime.attributes.totalLength} mins
			</p>
		</div>
	</div>
{/if}

<style>
	h1 {
		padding: 1rem 0rem 2rem;
	}
	p {
		padding: 1rem 0;
	}
	.img-container {
		width: 100%;
	}
	img {
		width: 100%;
		border-radius: 1rem;
	}
	.anime-details {
		margin: 2rem 20%;
	}
	span {
		font-weight: bold;
	}
</style>
