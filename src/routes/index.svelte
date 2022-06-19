<script lang="ts" context="module">
	import type { Load } from '@sveltejs/kit';
	import type { Anime } from '../types';

	const headers = {
		Accept: 'application/vnd.api+json',
		'Content-Type': 'application/vnd.api+json'
	};

	const url = 'https://kitsu.io/api/edge/anime?page[limit]=20&sort=popularityRank';

	export const load: Load<any, any, { popular: Anime[] }> = async ({ fetch }) => {
		const res = await fetch(url, { headers });
		const data = await res.json();
		if (res.ok) {
			return { props: { popular: data.data } };
		} else {
			return {
				props: { popular: null }
			};
		}
	    };
</script>

<script lang="ts">
	import PopularAnimes from '../components/PopularAnimes.svelte';
	export let popular: Anime[];
</script>

<section>
	<PopularAnimes {popular} />
</section>
