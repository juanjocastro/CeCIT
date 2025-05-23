<script>
	import { mainColor } from '../../../store/readables-store';
</script>

<footer
	style={`background-color: ${$mainColor}`}
	class="flex w-screen flex-col items-center justify-center gap-4 pt-10"
>
	<div
		class="flex h-3/5 w-full flex-col items-center justify-center sm:flex-row sm:items-end sm:justify-evenly"
	>
		<img
			src="http://centrodecomercioag.com.ar/wp-content/uploads/2023/07/cecit2023.png"
			alt="Logo de CeCIT2"
			class="scale-75"
		/>
		<img
			src="http://centrodecomercioag.com.ar/wp-content/uploads/2025/04/Recurso-6-211x300.png"
			alt=""
			class="scale-50"
		/>
		<img
			src="http://centrodecomercioag.com.ar/wp-content/uploads/2025/04/Recurso-8-300x271.png"
			alt=""
			class="scale-50"
		/>
	</div>
	<div
		class="mb-1 flex h-5 w-full flex-col items-center justify-center gap-0.5 font-bold text-white"
	>
		<span>España 147, Alta Gracia, Córdoba, Argentina</span>
		<span class="pb-4">Tel. (03547) 3547446368</span>
	</div>
	<hr class="h-0.5 w-full bg-black" />
	<div
		class="flex w-full items-center justify-center text-white"
		style={`background-color: ${$mainColor}`}
	>
		<span class="pb-4 font-bold">Copyright ©2021 CeCIT | Desarrollado por Ing. Laura Morcillo</span
		>
	</div>
</footer>
