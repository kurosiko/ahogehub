<script lang="ts">
    const {src,onclick} = $props()
</script>
<div class="size-50 hover:scale-110 transition-all ease-in-out group relative hover:z-1 hover:bg-neutral-700">
    <img
        src={src} alt="ahoge"
        class="size-full group-hover:brightness-30 object-center object-contain"
    >
    <button
        class="absolute opacity-0 group-hover:opacity-100 bottom-1/2 translate-y-1/2 transition-opacity w-full text-center outline p-5 size-full"
        onclick={()=>onclick(src)}
    >Detail</button>
</div>