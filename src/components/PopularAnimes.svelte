<script lang="ts">
import type { Anime } from "src/types";


  export let popular: Anime[]
  console.log(popular)
</script>
<h3>Popular Animes</h3>
<div class="popular-movies">
  {#each popular as anime }
    <h1>{anime.attributes.titles.en_jp}</h1>
  {/each} 
</div>
