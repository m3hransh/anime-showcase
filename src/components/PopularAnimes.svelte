<script lang="ts">
	import type { Anime } from 'src/types';
  import AnimeCard from './AnimeCard.svelte'
	export let popular: Anime[];
</script>

<h3>Popular Animes</h3>
<div class="popular-animes">
	{#each popular as anime}
    <AnimeCard {anime} />
	{/each}
</div>
<style>
  h3 {
    padding: 0 1rem;
  }
  .popular-animes {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    grid-column-gap: 1rem;
    grid-row-gap: 2rem;
  }
</style>

