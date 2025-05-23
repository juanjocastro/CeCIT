<script lang="ts">
	export let img: string;
	export let title: string;
	export let description: string;
</script>

<div class="embla__slide h-72 w-60 border-2 border-gray-100 p-4 shadow-lg shadow-gray-300">
	<div class="flex h-full flex-col items-center justify-center gap-1.5 text-center">
		<img src={img} class="aspect-square w-4/5 object-cover" alt="" />
		<h3 class="line-clamp-1 text-2xl font-semibold text-black">{title}</h3>
		<span class="font-medium text-black">{description}</span>
		<a
			href="/b"
			class=" text-blue-400 before:top-full before:h-0.5 before:w-full before:bg-blue-400"
			aria-label={title}>Ver Mas</a
		>
	</div>
</div>

<style>
	.embla__slide {
		flex: 0 0 225px;
		min-width: 0;
	}
</style>
