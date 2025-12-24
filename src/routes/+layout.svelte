<script lang="ts">
    import "../app.css";
    import favicon from "$lib/assets/favicon.svg";
    import { fade, fly, scale, slide } from "svelte/transition";
    import { quartInOut } from "svelte/easing";
    import {
        authUser,
        is_logged_in,
        user_default_value,
        type User,
    } from "$lib/authStore";
    import type { LayoutData } from "./$types";

    let { children, data }: { children: any; data: LayoutData } = $props();
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
    let is_logged: boolean = $state(false);
    is_logged_in.subscribe((value) => {
        is_logged = value;
    });
    let userdata: User = $state(user_default_value);
    authUser.subscribe((value) => {
        userdata = value;
    });
    $effect(() => {
        if (data.user) {
            authUser.set(data.user);
            is_logged_in.set(true);
        }
    });
</script>

<svelte:head>
    <link rel="icon" href={favicon} />
</svelte:head>

<header
    class="w-full py-3 md:py-5 px-4 md:px-10 grid grid-cols-1 md:grid-cols-[minmax(200px,auto)_1fr_minmax(200px,auto)] gap-3 md:gap-4 items-center bg-gray-950 text-white border-b border-gray-800 z-10 sticky top-0"
>
    <div class="flex items-center justify-between md:justify-start">
        <div class="flex items-center">
            <button
                onclick={() => (show_menu = !show_menu)}
                class="mr-3 md:mr-4"
            >
                <img src="/menu.svg" alt="menu" class="w-6 h-6 md:w-8 md:h-8" />
            </button>
            <a href="/"
                ><img
                    src="/logo.svg"
                    alt="logo"
                    class="w-32 md:w-40 h-auto"
                /></a
            >
        </div>
        <div class="flex md:hidden items-center space-x-3">
            {#if is_logged}
                <p class="text-sm">{userdata.username}</p>
            {:else}
                <a href="/account" class="hover:text-gray-300 text-sm"
                    >Account</a
                >
            {/if}
        </div>
    </div>
    <div
        class="flex items-center bg-gray-800 rounded-full h-10 md:h-12 px-4 md:px-6 max-w-lg mx-auto w-full"
    >
        <img src="/search.svg" alt="search" class="w-4 h-4 md:w-5 md:h-5" />
        <input
            type="text"
            placeholder="Search Ahogehub"
            class="bg-transparent border-none outline-none text-white ml-2 md:ml-3 placeholder-gray-400 w-full text-sm md:text-base"
        />
    </div>
    <div
        class="hidden md:flex items-center space-x-4 justify-end whitespace-nowrap"
    >
        {#if is_logged}
            <p>{userdata.username}</p>
        {:else}
            <a href="/account" class="hover:text-gray-300">Account</a>
            <a href="#" class="hover:text-gray-300">WIP</a>
            <a href="#" class="hover:text-gray-300">WIP 2</a>
        {/if}
    </div>
</header>

{#if show_menu}
    <div
        transition:fly={{ duration: 200, easing: quartInOut }}
        class="fixed bg-black grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 size-full text-center content-center z-100 top-0 overflow-y-scroll p-4"
    >
        {#each side_menu as items}
            <a
                transition:fade
                class="bg-gray-900 h-16 md:h-20 mx-2 md:mx-4 my-1 text-lg md:text-2xl hover:opacity-50 transition-opacity ease-in-out text-center content-center font-bold bg-clip-text text-transparent bg-gradient-to-tl from-pink-100 to-purple-600"
                href={items.link}
                target="_blank">{items.text}</a
            >
        {/each}
    </div>
    <button
        onclick={() => (show_menu = false)}
        class="text-center fixed top-3 md:top-5 left-3 md:left-5 z-101 size-16 md:size-20"
        ><img
            src="/close.svg"
            alt="close"
            class="m-auto scale-200 hover:animate-spin_rough hover:opacity-80 transition-opacity"
        /></button
    >
    <style>
        body {
            overflow: hidden;
        }
    </style>
{/if}

<main>
    {@render children?.()}
</main>

<footer class="w-full">
    <nav
        class="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 md:gap-4 p-5 md:p-8"
    >
        <div>
            <h2 class="text-lg md:text-xl font-semibold py-2">
                Principle of Ahoge
            </h2>
            <ul class="text-gray-300 text-sm md:text-base">
                <li><p>Cute!!</p></li>
                <li><p>Cute!!</p></li>
                <li><p>Cute!!</p></li>
                <li><p>Cute!!</p></li>
                <li><p>Cute!!</p></li>
                <li><p>Cute!!</p></li>
            </ul>
        </div>
        <div>
            <h2 class="text-lg md:text-xl font-semibold py-2">Ahogehub</h2>
            <ul class="text-gray-300 text-sm md:text-base">
                <li>
                    <a href="/about" class="hover:text-white transition-colors"
                        >About us</a
                    >
                </li>
                <li>
                    <a
                        href="/contact"
                        class="hover:text-white transition-colors">Contact us</a
                    >
                </li>
                <li>
                    <a
                        href="/recruit"
                        class="hover:text-white transition-colors">Join us</a
                    >
                </li>
                <li>
                    <a href="/staff" class="hover:text-white transition-colors"
                        >Staff</a
                    >
                </li>
            </ul>
        </div>
        <div>
            <h2 class="text-lg md:text-xl font-semibold py-2">Service</h2>
            <ul class="text-gray-300 text-sm md:text-base">
                <li>
                    <a
                        href="/analyze"
                        class="hover:text-white transition-colors">Analyze</a
                    >
                </li>
                <li>
                    <a href="/upload" class="hover:text-white transition-colors"
                        >Upload</a
                    >
                </li>
                <li>
                    <a
                        href="/explore"
                        class="hover:text-white transition-colors">Explore</a
                    >
                </li>
            </ul>
        </div>
        <div>
            <h2 class="text-lg md:text-xl font-semibold py-2">Social</h2>
            <ul class="text-gray-300 text-sm md:text-base">
                <li>
                    <a
                        href="https://github.com/"
                        class="hover:text-white transition-colors">Github</a
                    >
                </li>
                <li>
                    <a
                        href="https://x.com"
                        class="hover:text-white transition-colors">Twitter</a
                    >
                </li>
                <li>
                    <a
                        href="https://www.youtube.com"
                        class="hover:text-white transition-colors">YouTube</a
                    >
                </li>
            </ul>
        </div>
    </nav>
</footer>
