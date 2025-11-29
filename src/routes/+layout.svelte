<script lang="ts">
    import "../app.css";
    import favicon from "$lib/assets/favicon.svg";
  import { fade, fly, scale, slide } from "svelte/transition";
  import { quartInOut } from "svelte/easing";


    let { children } = $props();
    let show_menu = $state(false);
    const side_menu = [
        { text: "Homepage", link: "https://kurosiko.com" },
        { text: "Resource", link: "https://resource.kurosiko.com" },
        { text: "GitHub", link: "https://github.com/kurosiko" },
        { text: "Resource", link: "https://resource.kurosiko.com" },
        { text: "Twitter", link: "https://x.com/kurosiko" },
        { text: "Explore", link: "" },
        { text: "Upload", link: "" },
        { text: "Analyze", link: "" },
        { text: "Community", link: "" },
    ];
</script>

<svelte:head>
    <link rel="icon" href={favicon} />
</svelte:head>




<header class="w-full py-5 px-10 flex md:flex-row flex-col items-center justify-between bg-gray-950 text-white border-b border-gray-800 z-10 sticky top-0">
    <div class="flex items-center">
        <button
            onclick={() => (show_menu = !show_menu)}
            class="mr-4"
        >
            <img src="/menu.svg" alt="logo" class="w-8 h-8" />
        </button>
        <a href="/"><img src="/logo.svg" alt="logo" class="w-40 h-auto" /></a>
    </div>
    <div
        class="grow flex items-center bg-gray-800 rounded-full h-12 px-6 max-w-lg w-full md:w-auto"
    >
        <img src="/search.svg" alt="search_logo" class="w-5 h-5" />
        <input
            type="text"
            placeholder="Search Ahogehub"
            class="bg-transparent border-none outline-none text-white ml-3 placeholder-gray-400 w-full"
        />
    </div>
    <div class="hidden md:flex items-center space-x-4">
        <a href="/account" class="hover:text-gray-300">Account</a>
        <a href="#" class="hover:text-gray-300">WIP</a>
        <a href="#" class="hover:text-gray-300">WIP 2</a>
    </div>
</header>

{#if show_menu}
    <div
        transition:fly={{duration:200,easing:quartInOut}}
        class="fixed bg-black grid md:grid-cols-3 size-full text-center content-center z-100 top-0 overflow-y-scroll"
    >
        {#each side_menu as items}
            <a
                transition:fade
                class="bg-gray-900 h-20 mx-4 my-1 text-2xl hover:opacity-50 transition-opacity ease-in-out text-center content-center font-bold bg-clip-text text-transparent bg-gradient-to-tl from-pink-100 to-purple-600"
                href={items.link}
                target="_blank">{items.text}</a
            >
        {/each}
    </div>
    <button onclick={()=>show_menu = false} class="text-center fixed top-5 left-5 z-101 size-20"><img src="/close.svg" alt="close_btn" class="m-auto scale-200 hover:animate-spin_rough hover:opacity-80 transition-opacity"></button>
    <style>
        body{
            overflow:hidden
        }
    </style>
{/if}

<main>
    {@render children?.()}
</main>

<footer class="w-full ">
    <nav class="w-full md:flex flex-row *:flex-1 p-5">
        <div>
            <h2 class="text-xl font-semibold py-2">Principle of Ahoge</h2>
            <ul class="text-gray-300">
                <li><p>Cute!!</p></li>
                <li><p>Cute!!</p></li>
                <li><p>Cute!!</p></li>
                <li><p>Cute!!</p></li>
                <li><p>Cute!!</p></li>
                <li><p>Cute!!</p></li>
            </ul>   
        </div>
        <div>
            <h2 class="text-xl font-semibold py-2">Ahogehub</h2>
            <ul class=" text-gray-300">
                <li><a href="/about">About us</a></li>
                <li><a href="/contact">Contact us</a></li>
                <li><a href="/recruit">Join us</a></li>
                <li><a href="/staff">Staff</a></li>
            </ul>
        </div>
        <div>
            <h2 class="text-xl font-semibold py-2">Service</h2>
            <ul class=" text-gray-300">
                <li><a href="/analyze">Analyze</a></li>
                <li><a href="/upload">Upload</a></li>
                <li><a href="/explore">Explore</a></li>
            </ul>
        </div>
        <div>
            <h2 class="text-xl font-semibold py-2">Social</h2>
            <ul class=" text-gray-300">
                <li><a href="https://github.com/">Github</a></li>
                <li><a href="https://x.com">Twitter</a></li>
                <li><a href="https://www.youtube.com">YouTube</a></li>
            </ul>
        </div>
    </nav>
    
    
</footer>