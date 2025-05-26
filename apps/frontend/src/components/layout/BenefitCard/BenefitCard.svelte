<script lang="ts">
	import { actualCard } from '../../../store/writeable-store';
	import type { BenefitCardType } from '../../../types/benefit.type';

	export let card: BenefitCardType;
	export let hover: boolean = true;
	const hoverClass = hover
		? 'transition-all duration-300 hover:scale-110 hover:shadow-xl hover:shadow-gray-400'
		: '';
</script>

<div class={`embla__slide h-72 p-4 shadow-lg shadow-gray-300 ${hoverClass}`}>
	<button
		onclick={() => {
			$actualCard = card;
		}}
	>
		<div class="flex h-full flex-col items-center justify-around gap-1.5 text-center">
			<img src={card.img} class="aspect-square w-4/5 object-cover" alt="" />
			<h3 class="line-clamp-1 text-2xl font-semibold text-black">{card.title}</h3>
			<span class="font-medium text-black">{card.subTitle}</span>
		</div>
	</button>
</div>

<style>
	.embla__slide {
		flex: 0 0 225px;
		min-width: 0;
	}
</style>
