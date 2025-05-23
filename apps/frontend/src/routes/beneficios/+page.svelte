<script lang="ts">
	import BenefitCard from '../../components/layout/BenefitCard/BenefitCard.svelte';
	import { type EmblaCarouselType } from 'embla-carousel';
	import { useEmbla } from '../../config/svelte-embla';
	interface Benefit {
		title: string;
		img: string;
		description: string;
	}

	let emblaApi: EmblaCarouselType;
	const options = {};

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
		}
	];
</script>

<div class="flex h-full items-center justify-center">
	<!-- Carrusel de beneficios destacados(cartas) -->
	<div class="relative mt-10 flex w-full flex-row items-center justify-center gap-4 sm:w-full">
		<button
			on:click={scrollToPrev}
			class="absolute top-1/3 left-0 z-20 ml-4 hidden size-10 rounded-full border-2 border-gray-600 bg-transparent transition hover:bg-gray-600 hover:text-white sm:block"
			aria-label="Anterior"
		>
			<i class="fa-solid fa-arrow-left"></i>
		</button>
		<div class="z-10 w-screen overflow-hidden" use:setupEmbla>
			<div class="mr-6 flex h-full gap-6 pb-10 sm:mr-2">
				{#each cards as card}
					<BenefitCard description={card.description} img={card.img} title={card.title} />
				{/each}
			</div>
		</div>
		<button
			on:click={scrollToNext}
			class="absolute top-1/3 right-0 z-20 mr-4 hidden size-10 rounded-full border-2 border-gray-600 bg-transparent transition hover:bg-gray-600 hover:text-white sm:block"
			aria-label="Siguiente"
		>
			<i class="fa-solid fa-arrow-right"></i>
		</button>
	</div>
</div>
