<script lang="ts">
	import Nav from '$lib/components/Nav.svelte';
</script>

<Nav title="Profile" />

<main class="flex px-6 pt-24 bg-gray-100 h-screen">
	<div class="mt-8 w-full max-w-md rounded-lg bg-white p-6 shadow-lg mx-auto mb-auto">
		<h1 class="bold text-2xl">My Profile</h1>
		<div class="mt-4">
			<p class="text-lg"><strong>Name:</strong> John Doe</p>
			<p class="text-lg"><strong>Email:</strong> john.doe@example.com</p>
			<p class="text-lg"><strong>Member Since:</strong> January 2023</p>
		</div>
	</div>
</main>

<style>
</style>
