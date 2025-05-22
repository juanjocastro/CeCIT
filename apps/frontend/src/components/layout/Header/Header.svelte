<script>
	import { mainColor } from '../../../store/readables-store';
</script>

<div
	class="flex h-20 w-full flex-row items-center justify-center"
	style={`background-color: ${$mainColor}`}
>
	<div class="flex h-full w-4/5 flex-row items-center justify-center">
		<div class="flex h-full w-1/2 items-center justify-start gap-4 pl-10">
			<span class="group relative flex h-8 w-8 cursor-pointer items-center justify-center">
				<div
					class="absolute h-full w-full rounded-full bg-red-700 transition group-hover:scale-0"
				></div>
				<i
					class="fa-brands fa-facebook scale-125 transition group-hover:scale-150 group-hover:text-red-700"
				></i>
			</span>
			<span class="group relative flex h-8 w-8 cursor-pointer items-center justify-center">
				<div
					class="absolute h-full w-full rounded-full bg-red-700 transition group-hover:scale-0"
				></div>
				<i
					class="fa-brands fa-instagram scale-125 transition group-hover:scale-150 group-hover:text-red-700"
				></i></span
			>
		</div>
		<div class=" flex h-full w-3/5 items-center justify-end gap-6">
			<div
				class="group flex h-full cursor-pointer items-center justify-center gap-2 transition duration-300"
			>
				<i
					class="fa-solid fa-phone scale-110 text-red-700 transition-transform duration-300 group-hover:scale-125"
				></i>

				<div class="flex h-1/2 flex-col items-start justify-center">
					<span
						class="h-6 text-lg font-bold text-white transition-colors duration-300 group-hover:text-red-700"
					>
						Email
					</span>
					<span class="text-sm text-white">info@centrodecomercioag.com.ar</span>
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
						class="h-6 text-lg font-bold text-white transition-colors duration-300 group-hover:text-red-700"
					>
						Teléfono
					</span>
					<span class="text-sm text-white">(03547) 3547446368.</span>
				</div>
			</div>
		</div>
	</div>
</div>

<nav class="h-28 w-full border-b bg-white shadow-sm">
	<div class="mx-auto flex h-full max-w-7xl items-center justify-between px-12 py-4">
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

		<!-- Menú -->
		<ul class="flex h-1/2 items-center space-x-10 text-sm font-medium">
			<!-- Institucional Dropdown -->
			<li class="group relative">
				<a
					href="http://centrodecomercioag.com.ar/quienes-somos/"
					class="h-10 p-4 text-lg text-gray-800 transition-colors duration-300 group-hover:text-blue-700"
				>
					Institucional

					<i
						class="fa-solid fa-chevron-up relative top-0.5 scale-90 rotate-180 transition duration-300 group-hover:rotate-0"
						style="top: 1px;"
					></i>
				</a>
				<ul
					class=" pointer-events-none absolute top-12 z-10 w-40 border border-t-3 border-t-red-700
                         bg-white opacity-0 shadow-md transition-all duration-300 group-hover:pointer-events-auto group-hover:top-9 group-hover:opacity-100"
				>
					<span
						class="absolute left-25 -z-10 h-3 w-3 rotate-45 border-t-3 border-l-3 border-t-red-700 border-l-red-700 bg-white"
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
				</ul>
			</li>

			<hr class="h-full w-0.5 bg-gray-700" />
			<!-- Hacete socio Dropdown -->
			<li class="group relative">
				<a
					href="http://centrodecomercioag.com.ar/hacete-socio/"
					class="py-4 text-lg text-red-600 transition-all hover:text-red-800"
					>Hacete socio
					<i
						class="fa-solid fa-chevron-up relative -right-0.5 scale-90 rotate-180 transition duration-300 group-hover:rotate-0"
						style="top: 1px;"
					></i>
				</a>
				<ul
					class=" pointer-events-none absolute top-12 -left-2 z-10 w-40 border border-t-3 border-t-red-700
                         bg-white opacity-0 shadow-md transition-all duration-300 group-hover:pointer-events-auto group-hover:top-9 group-hover:opacity-100"
				>
					<span
						class="absolute left-25 -z-10 h-3 w-3 rotate-45 border-t-3 border-l-3 border-t-red-700 border-l-red-700 bg-white"
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
				</ul>
			</li>

			<!-- Contacto -->
		</ul>
	</div>
</nav>
