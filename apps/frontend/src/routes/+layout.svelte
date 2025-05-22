<script lang="ts">
	import '../app.css';
	import Footer from '../components/layout/Footer/Footer.svelte';
	import Header from '../components/layout/Header/Header.svelte';
	let { children } = $props();
</script>

<main class="flex min-h-screen max-w-screen flex-col items-center overflow-x-hidden bg-white">
	<Header></Header>

	<div class="w-full flex-grow">
		{@render children()}
	</div>

	<Footer></Footer>
</main>
