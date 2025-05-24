<script lang="ts">
	import BenefitCard from '../../components/layout/BenefitCard/BenefitCard.svelte';
	import { type EmblaCarouselType, type EmblaOptionsType } from 'embla-carousel';
	import { useEmbla } from '../../config/svelte-embla';
	import { browser } from '$app/environment';
	import type { Benefit } from '../../types/beneficio.type';
	let displayArrows = 'sm:hidden';

	let emblaApi: EmblaCarouselType;
	const options: EmblaOptionsType = {
		skipSnaps: true,
		breakpoints: {
			'(min-width: 0px)': { watchDrag: true },
			'(min-width: 640px)': { watchDrag: false }
		}
	};

	function setupEmbla(node: HTMLElement) {
		const { destroy, embla } = useEmbla(node, options);
		emblaApi = embla;
		console.log('Embla API initialized:', emblaApi);
		return { destroy };
	}

	function scrollToNext() {
		if (emblaApi) emblaApi.scrollNext();
	}

	function scrollToPrev() {
		if (emblaApi) {
			emblaApi.scrollPrev();
		}
	}

	const cards: Benefit[] = [
		{
			title: 'Helado Artesanal',
			description: 'Sabor natural',
			img: 'https://img.freepik.com/vector-gratis/coleccion-tarjetas-helado_23-2148576611.jpg'
		},
		{
			title: 'Descuento en Supermercado',
			description: 'Ahorro diario',
			img: 'https://img.freepik.com/vector-gratis/ilustracion-concepto-supermercado_114360-1090.jpg'
		},
		{
			title: 'Café Gratis',
			description: 'Energía extra',
			img: 'https://img.freepik.com/vector-gratis/plantilla-menu-cafe-dibujado-mano_23-2148773961.jpg'
		},
		{
			title: 'Entrada al Cine',
			description: 'Diversión asegurada',
			img: 'https://img.freepik.com/vector-gratis/plantilla-entrada-cine_23-2147731225.jpg'
		},
		{
			title: 'Clase de Yoga',
			description: 'Bienestar físico',
			img: 'https://img.freepik.com/vector-gratis/ilustracion-concepto-yoga_114360-1191.jpg'
		},
		{
			title: 'Clase de Yoga',
			description: 'Bienestar físico',
			img: 'https://img.freepik.com/vector-gratis/plantilla-menu-cafe-dibujado-mano_23-2148773961.jpg'
		},
		{
			title: 'Clase de Yoga',
			description: 'Bienestar físico',
			img: 'https://img.freepik.com/vector-gratis/ilustracion-concepto-yoga_114360-1191.jpg'
		},
		{
			title: 'Café Gratis',
			description: 'Energía extra',
			img: 'https://img.freepik.com/vector-gratis/plantilla-menu-cafe-dibujado-mano_23-2148773961.jpg'
		}
	];

	if (browser) {
		window.addEventListener('resize', () => {
			console.log('aadawdas');
			if (emblaApi.canScrollNext() || emblaApi.canScrollPrev()) displayArrows = 'sm:block';
			else displayArrows = 'sm:hidden';
		});
	}
	$: if (emblaApi) {
		if (emblaApi.canScrollNext() || emblaApi.canScrollPrev()) {
			displayArrows = 'sm:block';
		} else {
			displayArrows = 'sm:hidden';
		}
	}
</script>

<div class="relative mt-10 flex w-full flex-col items-start justify-start gap-4 sm:w-full">
	<h1 class="h1 px-8 pt-4 text-black">Beneficios Destacados</h1>
	<p class="px-8 text-lg">
		Estos son los beneficios más populares ahora mismo. ¡Echales un vistazo!
	</p>
	<button
		onclick={() => {
			scrollToPrev();
		}}
		class={`absolute top-2/4 left-0  z-20 ml-4 hidden size-10 rounded-full border-2 border-gray-600 bg-white transition hover:bg-gray-600 hover:text-white ${displayArrows}`}
		aria-label="Anterior"
	>
		<i class="fa-solid fa-arrow-left"></i>
	</button>
	<div class="z-10 w-full overflow-hidden" use:setupEmbla>
		<div class="mr-6 flex h-full flex-row gap-6 px-8 pb-10 sm:mr-2">
			{#each cards as card}
				<BenefitCard {card} />
			{/each}
		</div>
	</div>
	<button
		onclick={() => {
			if (!emblaApi.canScrollPrev()) emblaApi.scrollTo(2);
			else scrollToNext();
		}}
		class={`absolute top-2/4 right-0 z-20 mr-4 hidden size-10 rounded-full border-2 border-gray-600 bg-white transition  hover:bg-gray-600 hover:text-white ${displayArrows}`}
		aria-label="Siguiente"
	>
		<i class="fa-solid fa-arrow-right"></i>
	</button>
</div>
