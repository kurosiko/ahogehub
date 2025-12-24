<script lang="ts">
    import Explore from "$lib/assets/Explore.svelte";
    import Favorite from "$lib/assets/Favorite.svelte";
    import Upload from "$lib/assets/Upload.svelte";
</script>

<div class="text-center px-4 md:px-5">
    <section class="mx-auto py-8 md:py-12">
        <h1
            class="text-4xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-pink-400 to-purple-600 p-3 md:p-5"
        >
            AhogeHub
        </h1>
        <p
            class="text-base md:text-xl text-gray-400 mb-8 md:mb-12 mx-auto px-4"
        >
            For every ahoge lover by ahoge lover
            <br />
            Let's explor new style
        </p>
    </section>
    <section
        class="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-12 md:mb-16"
    >
        <a
            class="bg-gray-800 p-6 md:p-8 rounded-xl shadow-lg transform transition-transform duration-300 hover:scale-105 hover:shadow-xl"
            href="/explore"
        >
            <Explore />
            <h3 class="text-xl md:text-2xl font-semibold mb-2 text-pink-400">
                Explore
            </h3>
            <p class="text-sm md:text-base text-gray-400">
                You're sure to find your favorite ahoge here
                <br />
                Explore our many categories to get started
            </p>
        </a>
        <a
            class="bg-gray-800 p-6 md:p-8 rounded-xl shadow-lg transform transition-transform duration-300 hover:scale-105 hover:shadow-xl"
            href="/upload"
        >
            <Upload />
            <h3 class="text-xl md:text-2xl font-semibold mb-2 text-purple-400">
                Upload
            </h3>
            <p class="text-sm md:text-base text-gray-400">
                Share your prized ahoge with the world
                <br />
                It's easy to upload your own photos
            </p>
        </a>
        <a
            class="bg-gray-800 p-6 md:p-8 rounded-xl shadow-lg transform transition-transform duration-300 hover:scale-105 hover:shadow-xl"
            href="/account/like"
        >
            <Favorite />
            <h3 class="text-xl md:text-2xl font-semibold mb-2 text-teal-400">
                Connect
            </h3>
            <p class="text-sm md:text-base text-gray-400">
                Connect with other ahoge enthusiasts
                <br />
                Leave likes and comments to share your thoughts
            </p>
        </a>
    </section>
    <section
        class="bg-gray-800 py-8 md:py-12 mx-4 md:mx-5 rounded-xl shadow-lg"
    >
        <h2
            class="text-2xl md:text-4xl font-bold mb-3 md:mb-4 text-pink-400 px-4"
        >
            Join the World of Ahoge
        </h2>
        <p class="text-base md:text-lg text-gray-400 mb-6 md:mb-8 px-4">
            Explore adorable ahoge and join the community today
        </p>
        <a
            href="get-started"
            class="inline-block bg-gradient-to-r from-pink-500 to-purple-700 text-white font-bold py-3 px-8 md:py-4 md:px-10 rounded-full transition-transform transform hover:scale-110 hover:shadow-lg text-sm md:text-base"
        >
            Join us now
        </a>
    </section>
</div>
