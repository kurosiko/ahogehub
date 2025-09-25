<script lang="ts">
    let video_idx = $state(0);
    const src_list = ["/lamunation.webm","/krmn.mp4"];
</script>
<div class="flex flex-col justify-center content-center items-center overflow-scroll bg-white *:inset-0 *:size-full">
    {#each src_list as video}
        <video muted controls>
            <source src={video}/>
        </video>
    {/each}
</div>