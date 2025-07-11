<script lang="ts">
	import AddBookModal from '$lib/components/AddBookModal.svelte';
	import type { Book } from '$lib/types';
	import BookCard from '$lib/components/BookCard.svelte';
	import Nav from '$lib/components/Nav.svelte';
	import { onMount } from 'svelte';
	let books: Book[] = [];
	let showModal = false;
	let filterText = '';

	// Create a reactive "derived" variable that filters the books
	// whenever `books` or `filterText` changes.
	$: filteredBooks = books.filter((book) =>
		book.title.toLowerCase().includes(filterText.toLowerCase())
	);

	onMount(async () => {
		const res = await fetch('/api/books');
		books = await res.json();
	});

	async function handleSave(event: CustomEvent<Omit<Book, 'id'>>) {
		const bookToAdd = event.detail;

		const response = await fetch('/api/books', {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify(bookToAdd)
		});

		if (response.ok) {
			const createdBook = await response.json();
			books = [...books, createdBook];
		} else {
			console.error('Failed to add book');
		}

		showModal = false;
	}

	async function handleRemove(event: CustomEvent<string>) {
		const idToRemove = event.detail;
		await fetch('/api/books', {
			method: 'DELETE',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({ id: idToRemove })
		});
		books = books.filter((book) => book.id !== idToRemove);
	}
</script>

<Nav title="Book Manager" />

<main class="min-h-screen bg-gray-100 px-6 pt-24">
	<div class="flex items-center justify-between">
		<h1 class="bold text-2xl">My Books</h1>
		<button
			class="rounded bg-blue-600 px-4 py-2 text-white hover:bg-blue-700"
			on:click={() => (showModal = true)}>+ Add Book</button
		>
	</div>

	<!-- Filter Input -->
	<div class="mt-4">
		<input
			type="text"
			bind:value={filterText}
			placeholder="Filter by title..."
			class="w-full max-w-sm rounded border p-2"
		/>
	</div>

	<div class="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
		{#if filteredBooks.length === 0}
			<p class="mt-4 text-gray-500">No books match your filter.</p>
		{:else}
			{#each filteredBooks as book (book.id)}
				<BookCard id={book.id} title={book.title} author={book.author} on:remove={handleRemove} />
			{/each}
		{/if}
	</div>
</main>

<AddBookModal open={showModal} on:close={() => (showModal = false)} on:save={handleSave} />
