<script lang="ts">
  import { createEventDispatcher } from 'svelte';
  import type { Book } from '../types';

  export let open = false;
  export let onSave: (book: Book) => void = (book) => {};

  let title = "";
  let author = "";

  const dispatch = createEventDispatcher();

  function save() {
    onSave({ title, author });
    title = "";
    author = "";
    dispatch('close');
  }

  function close() {
    dispatch('close');
  }
</script>

{#if open}
  <div class="fixed inset-0 bg-black/30 flex items-center justify-center z-50">
    <div class="bg-white p-6 rounded shadow-lg w-full max-w-md">
      <h2 class="text-xl font-semibold mb-4">Add a Book</h2>
      
      <label class="block mb-2">
        Title:
        <input bind:value={title} class="w-full p-2 border rounded mt-1" />
      </label>
      
      <label class="block mb-4">
        Author:
        <input bind:value={author} class="w-full p-2 border rounded mt-1" />
      </label>
      
      <div class="flex justify-end gap-2">
        <button class="bg-gray-200 px-4 py-2 rounded" on:click={close}>Cancel</button>
        <button class="bg-blue-600 text-white px-4 py-2 rounded" on:click={save}>Save</button>
      </div>
    </div>
  </div>
{/if}