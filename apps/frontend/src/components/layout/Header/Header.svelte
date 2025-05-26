<script lang="ts">
	import { mainColor } from '../../../store/readables-store';
	import { Accordion, AccordionItem } from 'svelte-5-ui-lib';
	import { isOpened } from '../../../store/writeable-store';

	let slideNavBar: HTMLDivElement;
	const classes = ['-left-full', 'left-0'];
</script>

<div
	class=" hidden h-20 w-full flex-row items-center justify-center sm:inline-flex"
	style={`background-color: ${$mainColor}`}
>
	<div class="flex h-full w-10/12 flex-row items-center justify-center">
		<div
			class="hidden h-full w-1/2 items-center justify-center gap-4 pl-10 md:inline-flex md:justify-start"
		>
			<span class="group relative flex h-8 w-8 cursor-pointer items-center justify-center">
				<div
					class="absolute h-full w-full rounded-full bg-red-700 transition group-hover:scale-0"
				></div>
				<i
					class="fa-brands fa-facebook scale-125 text-white transition group-hover:scale-150 group-hover:text-red-700"
				></i>
			</span>
			<span class="group relative flex h-8 w-8 cursor-pointer items-center justify-center">
				<div
					class="absolute h-full w-full rounded-full bg-red-700 transition group-hover:scale-0"
				></div>
				<i
					class="fa-brands fa-instagram scale-125 text-white transition group-hover:scale-150 group-hover:text-red-700"
				></i></span
			>
		</div>
		<div class="flex h-full w-3/5 items-center justify-center gap-6 md:justify-end">
			<div
				class="group flex h-full cursor-pointer items-center justify-center gap-2 transition duration-300"
			>
				<i
					class="fa-solid fa-phone scale-110 text-red-700 transition-transform duration-300 group-hover:scale-125"
				></i>

				<div class="flex h-1/2 flex-col items-start justify-center">
					<span
						class="h-6 font-bold text-white transition-colors duration-300 group-hover:text-red-700 md:text-base lg:text-lg"
					>
						Email
					</span>
					<span class=" text-white md:text-xs lg:text-sm">info@centrodecomercioag.com.ar</span>
				</div>
			</div>
			<div
				class="group flex h-full cursor-pointer items-center justify-center gap-2 transition duration-300"
			>
				<i
					class="fa-solid fa-location-dot scale-110 text-red-700 transition-transform duration-300 group-hover:scale-125"
				></i>

				<div class="flex h-1/2 flex-col items-start justify-center">
					<span
						class="h-6 font-bold text-white transition-colors duration-300 group-hover:text-red-700 md:text-base lg:text-lg"
					>
						Teléfono
					</span>
					<span class="text-white md:text-xs lg:text-sm">(03547)3547446368.</span>
				</div>
			</div>
		</div>
	</div>
</div>

<!-- Menu Desplazante -->
<div
	bind:this={slideNavBar}
	class={`absolute ${classes[$isOpened]} z-60 h-screen w-screen bg-white  shadow-2xl shadow-gray-700 transition-all duration-300  sm:hidden`}
>
	<div class="flex h-full w-full flex-col">
		<div class="flex w-full flex-row items-center justify-end p-10">
			<button
				aria-label="Close"
				on:click={(e) => {
					$isOpened = $isOpened === 0 ? 1 : 0;
				}}
			>
				<i class="fa-solid fa-x text-2xl text-black"></i>
			</button>
		</div>
		<div class="flex w-full flex-col">
			<div class="w-full border-t-2 border-b-2 border-gray-400">
				<a href="#a" class="block w-full px-5 py-3.5 font-bold" aria-label="Institucional">
					Institucional</a
				>
				<a
					href="#a"
					class="block w-full border-t-2 border-gray-500 px-5 py-3.5 font-bold"
					aria-label="Institucional"
				>
					Iniciar Sesion</a
				>
			</div>
		</div>
	</div>
</div>

<nav class="sticky top-0 z-50 h-28 w-full bg-white shadow-lg shadow-gray-500/50">
	<div class="mx-auto flex h-full w-10/12 items-center justify-between p-4 sm:px-12 sm:py-4">
		<!-- Logo -->
		<div class="flex items-center gap-4">
			<a href="http://centrodecomercioag.com.ar/">
				<img
					src="http://centrodecomercioag.com.ar/wp-content/uploads/2023/07/logonuevo.png"
					alt="CeCIT"
					class="h-20 w-auto scale-95"
				/>
			</a>
		</div>

		<!-- Botón de menú para móviles -->
		<button
			aria-label="Menu"
			on:click={(e) => {
				$isOpened = $isOpened === 0 ? 1 : 0;
			}}
		>
			<div class="block sm:hidden">
				<i class="fa-solid fa-bars scale-125 pr-6 text-2xl text-black"></i>
			</div>
		</button>

		<!-- Menú -->
		<ul class="hidden h-1/2 items-center space-x-10 text-sm font-medium sm:flex">
			<!-- Institucional Dropdown -->
			<li class="group relative">
				<div class="flex items-center justify-center gap-2 text-black">
					<a
						href="http://centrodecomercioag.com.ar/quienes-somos/"
						class="py-4 text-base text-gray-800 transition-colors duration-300 group-hover:text-blue-700"
					>
						Institucional
					</a>
					<!-- <i
						class="fa-solid fa-chevron-up relative -top-2 -left-1 scale-50 rotate-180 transition duration-300 group-hover:rotate-0"
						style="top: 1px;"
					></i> -->
				</div>

				<!-- <ul
					class=" pointer-events-none absolute top-30 z-10 w-40 border border-t-3 border-t-red-700 bg-white
                         opacity-0 shadow-md transition-all duration-300 group-hover:pointer-events-auto group-hover:top-14 group-hover:opacity-100"
				>
					<span
						class="absolute left-5 -z-10 h-3 w-3 rotate-45 border-t-3 border-l-3 border-t-red-700 border-l-red-700 bg-white"
						style="top: -8px;"
					></span>
					<li>
						<a
							href="http://centrodecomercioag.com.ar/quienes-somos/autoridades/"
							class="block px-4 py-2 text-black transition hover:bg-gray-100"
						>
							Autoridades
						</a>
					</li>
					<li>
						<a
							href="http://centrodecomercioag.com.ar/quienes-somos/estatuto/"
							class="block px-4 py-2 text-black transition hover:bg-gray-100"
						>
							Estatuto
						</a>
					</li>
				</ul> -->
			</li>

			<hr class="h-8 w-0.5 bg-gray-700" />
			<!-- Hacete socio Dropdown -->
			<li class="group relative">
				<div class="flex items-center justify-center gap-2 text-black">
					<a
						href="http://centrodecomercioag.com.ar/hacete-socio/"
						class="py-4 text-base text-red-600 transition-all hover:text-red-800"
						>Listado
					</a>
					<!-- <i
						class="fa-solid fa-chevron-up relative -top-4 -left-1 scale-50 rotate-180 transition duration-300 group-hover:rotate-0"
						style="top: 1px;"
					></i> -->
				</div>

				<!-- <ul
					class=" pointer-events-none absolute top-30 -left-2 z-10 w-40 border border-t-3 border-t-red-700
                         bg-white opacity-0 shadow-md transition-all duration-300 group-hover:pointer-events-auto group-hover:top-14 group-hover:opacity-100"
				>
					<span
						class="absolute left-5 -z-10 h-3 w-3 rotate-45 border-t-3 border-l-3 border-t-red-700 border-l-red-700 bg-white"
						style="top: -8px;"
					></span>
					<li>
						<a
							href="http://centrodecomercioag.com.ar/event-directory/beneficios/"
							class="block px-4 py-2 text-black transition hover:bg-gray-100">Beneficios</a
						>
					</li>
					<li>
						<a
							href="http://centrodecomercioag.com.ar/event-directory/servicios/"
							class="block px-4 py-2 text-black transition hover:bg-gray-100">Servicios a socios</a
						>
					</li>
					<li>
						<a
							href="http://centrodecomercioag.com.ar/capacitaciones/"
							class="block px-4 py-2 text-black transition hover:bg-gray-100">Capacitaciones</a
						>
					</li>
				</ul> -->
			</li>

			<!-- Contacto -->
		</ul>
	</div>
</nav>
