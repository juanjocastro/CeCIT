<script lang="ts">
	import type { Benefit } from '../../../types/beneficio.type';

	export let card: Benefit;
</script>

<div class="embla__slide h-72 border-2 border-gray-100 p-4 shadow-lg shadow-gray-300">
	<button>
		<div class="flex h-full flex-col items-center justify-center gap-1.5 text-center">
			<img src={card.img} class="aspect-square w-4/5 object-cover" alt="" />
			<h3 class="line-clamp-1 text-2xl font-semibold text-black">{card.title}</h3>
			<span class="font-medium text-black">{card.description}</span>
			<span class=" text-blue-400 before:top-full before:h-0.5 before:w-full before:bg-blue-400"
				>Ver Mas</span
			>
		</div>
	</button>
</div>

<style>
	.embla__slide {
		flex: 0 0 225px;
		min-width: 0;
	}
</style>
