<script lang="ts">
	import { createEventDispatcher } from 'svelte';

	let { open }: { open: boolean } = $props();

	let title = '';
	let author = '';

	const dispatch = createEventDispatcher();

	function handleSave() {
		// Basic validation to ensure fields are not empty
		if (title.trim() && author.trim()) {
			dispatch('save', { title, author });
			// Reset fields for the next time the modal opens
			title = '';
			author = '';
		}
	}

	function handleClose() {
		dispatch('close');
	}
</script>

{#if open}
	<div class="fixed inset-0 z-50 flex items-center justify-center bg-black/30">
		<div class="w-full max-w-md rounded bg-white p-6 shadow-lg">
			<h2 class="mb-4 text-xl font-semibold">Add a Book</h2>

			<label class="mb-2 block">
				Title:
				<input bind:value={title} class="mt-1 w-full rounded border p-2" />
			</label>

			<label class="mb-4 block">
				Author:
				<input bind:value={author} class="mt-1 w-full rounded border p-2" />
			</label>

			<div class="flex justify-end gap-2">
				<button class="rounded bg-gray-200 px-4 py-2" on:click={handleClose}>Cancel</button>
				<button class="rounded bg-blue-600 px-4 py-2 text-white" on:click={handleSave}>Save</button>
			</div>
		</div>
	</div>
{/if}