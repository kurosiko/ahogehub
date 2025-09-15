<script lang="ts">
	import '../app.css';
	import favicon from '$lib/assets/favicon.svg';	
  import { text } from '@sveltejs/kit';
	let { children } = $props();
	let show_menu = $state(false);
	const side_menu = [
				{text:"Homepage",link:"https://kurosiko.com"},
				{text:"resource",link:"https://resource.kurosiko.com"},
				{text:"GitHub",link:"https://github.com/kurosiko"},
				{text:"Resource",link:"https://resource.kurosiko.com"},
				{text:"Twitter",link:"https://x.com/kurosiko"},
				{text:"Explor",link:""},
				{text:"Upload",link:""},
				{text:"Analyze",link:""},
				{text:"Community",link:""},
			]
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

<header class="w-full bg-gray-950 text-white border-b border-gray-800 z-10">
	<nav class="flex items-center px-6 py-4 size-full">
		<div class="flex items-center gap-2">
			<button onclick={()=>show_menu = !show_menu}>
				<img src="/src/lib/assets/menu.svg" alt="logo" class="w-8 h-8" />
			</button>
			<img src="/src/lib/assets/Logo.svg" alt="logo" class="w-40 h-auto" />
		</div>
		<div class="flex-grow flex items-center bg-gray-800 rounded-full h-12 px-6 max-w-lg mx-auto">
			<img src="/src/lib/assets/search.svg" alt="search_logo" class="w-5 h-5" />
				<input
					type="text"
					placeholder="Search Ahogehub"
					class="flex-1 bg-transparent border-none outline-none text-white ml-3 placeholder-gray-400"
			/>
		</div>
		<div class="text-white font-semibold">
				Account
		</div>
	</nav>
</header>
{#if show_menu}
	<div class="fixed left-0 bg-gray-950 w-75 h-full flex flex-col z-10 *:outline-2 ">
	{#each side_menu as items}
		<a class="bg-gray-900 h-20 mx-4 my-1 text-2xl hover:opacity-50 transition-opacity ease-in-out text-center content-center font-bold bg-clip-text text-transparent bg-gradient-to-tl from-pink-100 to-purple-600" href={items.link} target="_blank">{items.text}</a>		
	{/each}
	</div>
{/if}

<main class="">
	{@render children?.()}
</main>
