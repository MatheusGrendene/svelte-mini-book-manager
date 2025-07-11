<script lang="ts">
	import { page } from '$app/stores';

	let { title }: { title: string } = $props();
</script>

<nav
	class="fixed top-0 right-0 left-0 z-10 flex items-center justify-between bg-white px-6 py-6 shadow-md"
>
	<h2 class="text-xl font-bold">{title}</h2>
	{#if $page.url.pathname === '/'}
		<a href="/profile" class="hover:underline">Profile</a>
	{:else}
		<a href="/" class="hover:underline">Return to Main Page</a>
	{/if}
</nav>