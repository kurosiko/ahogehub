<script lang="ts">
    const {src,onclick} = $props()
</script>
<div class="size-50 hover:scale-110 transition-all ease-in-out group relative hover:z-10">
    <img
        src={src} alt="ahoge"
        class="w-full group-hover:brightness-50 object-center"
    >
    <button
        class="absolute opacity-0 group-hover:opacity-100 bottom-1/2 translate-y-1/2 transition-opacity w-full text-center outline p-5"
        onclick={()=>onclick(src)}
    >Detail</button>
</div>