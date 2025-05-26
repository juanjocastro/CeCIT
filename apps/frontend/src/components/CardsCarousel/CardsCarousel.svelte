<script lang="ts">
	import BenefitCard from '../../components/layout/BenefitCard/BenefitCard.svelte';
	import { type EmblaCarouselType, type EmblaOptionsType } from 'embla-carousel';
	import { useEmbla } from '../../config/svelte-embla';
	import { browser } from '$app/environment';
	import type { BenefitCardType } from '../../types/benefit.type';
	import { actualCard } from '../../store/writeable-store';
	import { mainColor } from '../../store/readables-store';
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

	const cards: BenefitCardType[] = [
		{
			title: 'Helado Artesanal',
			subTitle: 'Sabor natural',
			img: 'https://img.freepik.com/vector-gratis/coleccion-tarjetas-helado_23-2148576611.jpg',
			description:
				'Accedé a un exquisito helado artesanal preparado con ingredientes frescos, sin conservantes ni aditivos artificiales. Ideal para disfrutar en una tarde de verano o como un mimo después de un día largo.'
		},
		{
			title: 'Descuento en Supermercado',
			subTitle: 'Ahorro diario',
			img: 'https://img.freepik.com/vector-gratis/ilustracion-concepto-supermercado_114360-1090.jpg',
			description:
				'Obtené un descuento exclusivo en tu compra del supermercado y aprovechá para llevarte todo lo que necesitás al mejor precio. Una ayuda real para tu bolsillo en las compras del día a día.'
		},
		{
			title: 'Café Gratis',
			subTitle: 'Energía extra',
			img: 'https://img.freepik.com/vector-gratis/plantilla-menu-cafe-dibujado-mano_23-2148773961.jpg',
			description:
				'Disfrutá de un café de calidad sin costo para acompañar tu jornada. Ya sea que estés arrancando el día o necesites una pausa revitalizante, este beneficio es perfecto para vos.'
		},
		{
			title: 'Entrada al Cine',
			subTitle: 'Diversión asegurada',
			img: 'https://img.freepik.com/vector-gratis/plantilla-entrada-cine_23-2147731225.jpg',
			description:
				'Viví una experiencia cinematográfica única con una entrada gratuita al cine. Elegí la película que más te guste y relajate disfrutando de la mejor pantalla y sonido envolvente.'
		},
		{
			title: 'Clase de Yoga',
			subTitle: 'Bienestar físico',
			img: 'https://img.freepik.com/vector-gratis/ilustracion-concepto-yoga_114360-1191.jpg',
			description:
				'Sumate a una clase de yoga guiada por profesionales para mejorar tu flexibilidad, aliviar tensiones y conectar con tu respiración. Ideal para renovar tu energía y cuidar tu salud integral.'
		},
		{
			title: 'Clase de Yoga',
			subTitle: 'Bienestar físico',
			img: 'https://img.freepik.com/vector-gratis/plantilla-menu-cafe-dibujado-mano_23-2148773961.jpg',
			description:
				'Accedé a una sesión completa de yoga pensada para todo nivel, donde podrás trabajar cuerpo y mente en un espacio de calma y concentración. Una oportunidad ideal para reconectarte con vos mismo.'
		},
		{
			title: 'Clase de Yoga',
			subTitle: 'Bienestar físico',
			img: 'https://img.freepik.com/vector-gratis/ilustracion-concepto-yoga_114360-1191.jpg',
			description:
				'Disfrutá de una clase de yoga especialmente diseñada para ayudarte a liberar el estrés cotidiano, mejorar tu postura y aumentar tu fuerza interior. Una pausa saludable que te merecés.'
		},
		{
			title: 'Café Gratis',
			subTitle: 'Energía extra',
			img: 'https://img.freepik.com/vector-gratis/plantilla-menu-cafe-dibujado-mano_23-2148773961.jpg',
			description:
				'Conseguí una taza de café totalmente gratis para activar tu día o acompañar una buena charla. Ideal para momentos de estudio, trabajo o simplemente para darte un gusto sin gastar.'
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

	if (browser) {
		window.addEventListener('keydown', (e) => {
			if (e.key === 'Escape') $actualCard = null;
		});
	}

	$: {
		if (browser) {
			if ($actualCard !== null) {
				document.body.style.overflowY = 'hidden';
			} else {
				document.body.style.overflowY = 'auto';
			}
		}
	}
</script>

<div class="relative mt-10 flex w-full flex-col items-start justify-start gap-4">
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
	<div class="z-10 w-full overflow-x-hidden" use:setupEmbla>
		<div class="mr-6 flex flex-row gap-10 px-8 pt-4 pb-14">
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

{#if $actualCard !== null}
	<div
		role="button"
		tabindex="0"
		aria-label="Cerrar modal"
		class="fixed top-0 left-0 z-100 flex h-screen w-screen cursor-default items-center justify-center bg-black/50"
		onkeydown={(e) => {
			if (e.key === 'Enter' || e.key === ' ') $actualCard = null;
		}}
		onclick={() => ($actualCard = null)}
	>
		<div
			class="relative flex w-2/3 cursor-default flex-col items-center justify-center rounded-lg bg-white"
			onclick={(e) => e.stopPropagation()}
			aria-label="Parar propagacion"
			role="button"
			tabindex="0"
			onkeydown={(e) => {
				if (e.key === 'Enter' || e.key === ' ') $actualCard = null;
			}}
		>
			<button
				onclick={() => ($actualCard = null)}
				class="absolute top-0 right-2 cursor-pointer p-4"
				aria-label="Cerrar modal"
			>
				<i class="fa-solid fa-x text-black"></i>
			</button>
			<div class="flex w-full flex-col sm:flex-row">
				<div class="p-4">
					<img src={$actualCard.img} class="aspect-square rounded-lg object-cover" alt="" />
				</div>
				<div class="flex w-full flex-col items-start justify-center gap-4 p-4 sm:justify-between">
					<div>
						<h2 class="text-2xl font-bold text-black">{$actualCard.title}</h2>
						<span class="h-15 overflow-y-hidden text-lg focus:h-full sm:h-fit"
							>{$actualCard.description}</span
						>
					</div>

					<button
						aria-label="Ver beneficio"
						onclick={() => {}}
						class="h-10 w-full rounded bg-green-800 text-lg font-bold text-white transition-all hover:bg-green-700"
					>
						Ir al Beneficio
					</button>
				</div>
			</div>
		</div>
	</div>
{/if}
