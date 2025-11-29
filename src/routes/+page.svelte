<script lang="ts">
    import Explore from "$lib/assets/Explore.svelte";
    import Favorite from "$lib/assets/Favorite.svelte";
    import Upload from "$lib/assets/Upload.svelte";
</script>

<div class="text-center h-screen *:px-5">
    <section class="mx-auto">
        <h1
            class="text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-pink-400 to-purple-600 p-5"
        >
            AhogeHub
        </h1>
        <p class="text-xl text-gray-400 mb-12 mx-auto">
            For every lover by ahoge lover
            <br />
            Let's explor new style
        </p>
    </section>
    <section class="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
        <a
            class="bg-gray-800 p-8 rounded-xl shadow-lg transform transition-transform duration-300 hover:scale-105 hover:shadow-xl"
            href="/explore"
        >
            <Explore />
            <h3 class="text-2xl font-semibold mb-2 text-pink-400">Explore</h3>
            <p class="text-gray-400">
                You're sure to find your favorite ahoge here
                <br />
                Explore our many categories to get started
            </p>
        </a>
        <a
            class="bg-gray-800 p-8 rounded-xl shadow-lg transform transition-transform duration-300 hover:scale-105 hover:shadow-xl"
            href="/upload"
        >
            <Upload />
            <h3 class="text-2xl font-semibold mb-2 text-purple-400">Upload</h3>
            <p class="text-gray-400">
                Share your prized ahoge with the world
                <br />
                It's easy to upload your own photos
            </p>
        </a>
        <div
            class="bg-gray-800 p-8 rounded-xl shadow-lg transform transition-transform duration-300 hover:scale-105 hover:shadow-xl"
        >
            <Favorite />
            <h3 class="text-2xl font-semibold mb-2 text-teal-400">Connect</h3>
            <p class="text-gray-400">
                Connect with other ahoge enthusiasts
                <br />
                Leave likes and comments to share your thoughts
            </p>
        </div>
    </section>
    <section class="bg-gray-800 py-12 mx-5 rounded-xl shadow-lg">
        <h2 class="text-4xl font-bold mb-4 text-pink-400">
            Join the World of Ahoge
        </h2>
        <p class="text-lg text-gray-400 mb-8">
            Explore adorable ahoge and join the community today
        </p>
        <a
            href="get-started"
            class="inline-block bg-gradient-to-r from-pink-500 to-purple-700 text-white font-bold py-4 px-10 rounded-full transition-transform transform hover:scale-110 hover:shadow-lg"
        >
            Join us now
        </a>
    </section>
</div>
