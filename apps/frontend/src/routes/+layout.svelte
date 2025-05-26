<script lang="ts">
	import { derived } from 'svelte/store';
	import '../app.css';
	import Footer from '../components/layout/Footer/Footer.svelte';
	import Header from '../components/layout/Header/Header.svelte';
	import { isOpened } from '../store/writeable-store';
	import { browser } from '$app/environment';
	let { children } = $props();

	$effect(() => {
		if (browser) {
			$isOpened === 1
				? (document.body.style.overflowY = 'hidden')
				: (document.body.style.overflowY = 'auto');
		}
	});
</script>

<main class={` flex min-h-screen max-w-screen flex-col items-center bg-white`}>
	<Header></Header>

	<div class="w-full flex-grow overflow-x-hidden">
		{@render children()}
	</div>

	<Footer></Footer>
</main>
