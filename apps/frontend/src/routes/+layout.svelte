<script lang="ts">
	import '../app.css';
	let { children } = $props();

	const mainColor = 'bg-blue-950';
	const mainHoverColor = 'hover:bg-blue-600';

	const mainTextColor = 'text-blue-700';
	const mainTextHoverColor = 'hover:text-blue-600';
</script>

<main class="flex min-h-screen max-w-screen flex-col items-center overflow-x-hidden bg-white">
	<header
		class="flex h-28 w-screen flex-row items-center justify-evenly bg-white shadow-2xl shadow-gray-300"
	>
		<div class="flex h-full w-4/5 flex-row items-center justify-between gap-8">
			<div class="flex w-1/3 items-center justify-center">
				<img
					src="http://centrodecomercioag.com.ar/wp-content/uploads/2023/07/logonuevo.png"
					alt="Logo de CeCIT"
					class="pointer-events-none h-24 pt-4 pb-4 pl-4 select-none"
				/>
			</div>

			<nav class="h-full w-1/2">
				<ul class="flex h-full items-center justify-around">
					<li class="flex items-center justify-center gap-2">
						<a href="/" class="text-xl text-blue-800 hover:text-blue-600"
							><i class="fa-solid fa-house scale-75"></i> Inicio</a
						>
					</li>
					<li class="flex items-center justify-center gap-2">
						<a href="/beneficios" class="text-xl text-blue-800 hover:text-blue-600"
							><i class="fa-solid fa-coins scale-75"></i> Beneficios</a
						>
					</li>
					<li class="flex items-center justify-center gap-2">
						<a href="/contacto" class="text-xl text-blue-800 hover:text-blue-600"
							><i class="fa-solid fa-phone scale-75"></i> Contacto</a
						>
					</li>
				</ul>
			</nav>

			<div class="mr-6 w-1/3">
				<div class="flex h-full w-full items-center justify-center gap-10">
					<i
						class={`fa-brands fa-instagram ${mainTextColor} ${mainTextHoverColor}  scale-150 cursor-pointer`}
					></i>
					<i
						class={`fa-brands fa-whatsapp ${mainTextColor} ${mainTextHoverColor} scale-150 cursor-pointer`}
					></i>
					<i
						class={`fa-regular fa-envelope ${mainTextColor} ${mainTextHoverColor} scale-150 cursor-pointer`}
					></i>
				</div>
			</div>
		</div>
	</header>

	<div class="w-full flex-grow">
		{@render children()}
	</div>

	<footer class="flex max-h-64 min-h-32 w-screen bg-blue-950">
		<img
			src="http://centrodecomercioag.com.ar/wp-content/uploads/2023/07/cecit2023.png"
			alt="Logo de CeCIT2"
			class=""
		/>
	</footer>
</main>
