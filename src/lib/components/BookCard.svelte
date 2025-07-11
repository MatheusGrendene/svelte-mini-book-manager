<script lang="ts">
	import { createEventDispatcher } from 'svelte';

	let { id, title, author }: { id: string; title: string; author: string } = $props();

	const dispatch = createEventDispatcher();
</script>

<div class="group relative rounded bg-white p-4 shadow-md">
	<div class="flex items-center justify-between">
		<h2 class="text-lg font-semibold">Title: {title}</h2>
		<button class="text-lg text-red-500 opacity-0 hover:text-red-700 group-hover:opacity-100" on:click={() => dispatch('remove', id)}>Remove</button>
	</div>
	<p class="text-base text-gray-600">Author: {author}</p>
</div>
