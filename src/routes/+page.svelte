<script lang="ts">
  import AddBookModal from '$lib/components/AddBookModal.svelte';
  import type { Book } from '$lib/types';

  let showModal = false;

  function handleSave(book: Book) {
    // POST to API or update books array
    console.log("Saving book", book);
  }
</script>
<nav
	class="fixed top-0 left-0 right-0 z-10 flex items-center justify-between bg-white px-6 py-4 shadow-md"
>
	<h2 class="text-xl font-bold">Book Manager</h2>
	<a href="/profile" class="hover:underline">Profile</a>
</nav>

<main class="px-6 pt-24">
	<div class="flex items-center justify-between">
		<h1 class="bold text-2xl">My Books</h1>
		<button class="rounded bg-blue-600 px-4 py-2 text-white hover:bg-blue-700" on:click={() => showModal = true}>+ Add Book</button>
	</div>
</main>

<AddBookModal open={showModal} on:close={() => showModal = false} on:save={handleSave} />