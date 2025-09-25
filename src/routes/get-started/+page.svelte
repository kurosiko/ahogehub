<script lang="ts">
    let is_hovered = $state(false);
    let blank = [...new Array(3)].map(()=>undefined)
</script>
<div class="text-center p-2">
    <h1 class="text-4xl">🚧WIP🚧</h1>
    <h2 class="text-2xl">I'm looking forward to seeing you again!</h2>
    <a
        href="https://tenor.com/view/fox-girl-shirakami-fubuki-funny-skirt-smile-gif-4591085770920903737"
        class="w-full p-5"
    >
        <img
            src="https://media.tenor.com/P7bQLx0XRDkAAAAi/fox-girl-shirakami-fubuki.gif"
            alt="sorry hbk ahg"
            class="mx-auto border-2 p-10 rounded-3xl"
            onpointerenter={()=>is_hovered = true}
            onpointerleave={()=>is_hovered = false}
        />
    {#if is_hovered}
        <div class="fixed bottom-0 flex flex-row w-full *:flex-auto opacity-50">
            {#each blank as items}
            <img
                src="https://media.tenor.com/OkgVWs97hYIAAAAi/shirakami-fubuki-vtuber.gif"
                alt="hbk pop"
            >
            {/each}
        </div>
    {/if}
    </a>
</div>
