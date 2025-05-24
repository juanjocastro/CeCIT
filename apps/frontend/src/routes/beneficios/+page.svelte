<script lang="ts">
	import BenefitCard from '../../components/layout/BenefitCard/BenefitCard.svelte';
	import { type EmblaCarouselType, type EmblaOptionsType } from 'embla-carousel';
	import { useEmbla } from '../../config/svelte-embla';
	import { browser } from '$app/environment';
	import type { Benefit } from '../../types/beneficio.type';
	import CardsCarousel from '../../components/CardsCarousel/CardsCarousel.svelte';
</script>

<div class="flex h-full flex-col items-start justify-center">
	<!-- Carrusel de beneficios destacados(cartas) -->
	<CardsCarousel />
</div>
