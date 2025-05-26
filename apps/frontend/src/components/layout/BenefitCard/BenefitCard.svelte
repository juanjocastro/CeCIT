<script lang="ts">
	import { actualCard } from '../../../store/writeable-store';
	import type { BenefitCardType } from '../../../types/benefit.type';

	export let card: BenefitCardType;
	export let hover: boolean = true;
	const hoverClass = hover
		? 'transition-all duration-300 hover:scale-110 hover:shadow-xl hover:shadow-gray-400'
		: '';
</script>

<div class={`embla__slide  p-6 shadow-lg shadow-gray-300 ${hoverClass}`}>
	<div class="flex h-full flex-col items-center justify-around gap-1.5 text-center">
		<img src={card.img} class="aspect-square w-full object-cover" alt="" />
		<h3 class="line-clamp-1 text-2xl font-semibold text-black">{card.title}</h3>
		<span class="font-medium text-black">{card.subTitle}</span>
		<button
			onclick={() => {
				$actualCard = card;
			}}
			class="h-10 w-4/5 rounded bg-green-800 font-bold text-white transition duration-300 hover:bg-green-600"
		>
			Ver Beneficio</button
		>
	</div>
</div>

<style>
	.embla__slide {
		flex: 0 0 225px;
		min-width: 0;
	}
</style>
