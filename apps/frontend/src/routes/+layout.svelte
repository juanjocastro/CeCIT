<script lang="ts">
	import '../app.css';

	let { children } = $props();
</script>

<main class="flex min-h-screen max-w-screen flex-col items-center overflow-x-hidden">
	<div class="sticky top-0 flex h-16 w-screen bg-blue-950 shadow-2xl shadow-gray-500">
		<div class="w-1/3"></div>
		<nav class="w-1/3"></nav>
		<div class="w-1/3"></div>
	</div>

	<div class="w-full flex-grow">
		{@render children()}
	</div>

	<footer class="flex max-h-64 min-h-32 w-screen bg-blue-950"></footer>
</main>
