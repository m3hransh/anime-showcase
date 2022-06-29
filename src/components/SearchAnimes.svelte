<script lang="ts">
	let inputValue = '';
	let active = false;
	function cancelInput() {
		if (inputValue) {
			active = true;
		} else {
			active = false;
		}
	}
</script>

<form class="search">
	{#if !active}
		<label for="search_anime">Search Animes</label>
	{/if}
	<input
		on:focus={() => (active = true)}
		on:blur={() => cancelInput()}
		bind:value={inputValue}
		name="search_anime"
		type="text"
		class={active ? 'selected' : ''}
	/>
	{#if inputValue}
		<button>Search</button>
	{/if}
</form>

<style>
	.search {
		position: relative;
		width: 30%;
		margin: 0 auto;
		margin-top: 1rem;
	}
	.search button {
		position: absolute;
		top: 50%;
		right: 0;
		height: 100%;
		transform: translateY(-50%);
		background: violet;
		border: none;
		color: #fff;
		font-size: 0.7rem;
		padding: 0.5rem;
		cursor: pointer;
		border-top-right-radius: 10px;
		border-bottom-right-radius: 10px;
	}
	input {
		width: 100%;
		border: none;
		outline: none;
		padding: 0.5rem;
		color: #fff;
		font-size: 1rem;
		font-weight: 600;
		border-radius: 10px;
		transition: background 0.5s ease-out;
		background: rgb(80, 80, 80);
	}
	label {
		position: absolute;
		top: 50%;
		left: 0;
		transform: translateY(-50%);
		font-size: 1rem;
		pointer-events: none;

		color: rgb(200, 200, 200);
		padding: 0.5rem;
		border-radius: 10px;
	}
	input.selected {
		background: rgb(60, 60, 60);
	}
</style>
