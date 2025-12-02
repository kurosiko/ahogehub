<script lang="ts">
    import ImagePreviewer from "$lib/assets/ImagePreviewer.svelte";
  import { cubicInOut } from "svelte/easing";
  import { fade, fly, slide } from "svelte/transition";

    let sidebar_opened = $state(false)
    let selected_item:{
      image:string,
      description:string,
      source:string
    } = $state({
      image:"ahogetic default value",
      description:"ahogetic default value",
      source:"ahogetic default value"
    })
    const callback = (data:any)=>{
      selected_item.image = data
      sidebar_opened = true
    }
    let files = $state([])
    const api_request = async ()=>{
      const response = await fetch("https://api.kurosiko.com/get",{
        method:"GET",
      });
      if (response.status != 200) return
      const body:{files:string[]} = await response.json()
      return body
    }
</script>


<h1 class="text-center text-4xl top-0 z-500 py-5 font-semibold">Explore</h1>
<div>
    <div class="md:flex flex-row gap-5 p-5 transition-all">
      <div class="md:flex flex-1 hidden">
          <div class="w-full flex">
              <div>
                <ul>
                  <li>Attributes 1</li><li>Attributes 1</li><li>Attributes 1</li><li>Attributes 1</li>
              </ul>
            </div>
          </div>
      </div>   
      <div class="md:flex-5 grid md:grid-cols-[repeat(auto-fill,minmax(200px,1fr))] grid-cols-2">
      {#await api_request()}
        <h1>Loading!</h1>
      {:then res} 
        {#if res && res.files && res.files.length}
          {#each res.files as file}
            <ImagePreviewer src={"https://api.kurosiko.com/item/"+file} onclick={callback}/>
          {/each}
        {:else}
          <p>No files</p>
        {/if}
      {/await}
      </div>
      {#if sidebar_opened}
      <div class="md:flex-2 fixed md:sticky top-0 left-0 text-cente w-full bg-black md:h-auto h-screen md:z-0 z-100 p-5" transition:fly|global={{duration:500,x:500,easing:cubicInOut}}>
        <img
          src={selected_item.image} alt={selected_item.description + "is loading"}
          class="w-full"
        >
        <div class="flex flex-col gap-2.5 py-2.5">
          <div class="space-y-4">
            <div>
              <p class="text-sm font-semibold text-gray-400 uppercase">Source</p>
              <p class="text-gray-200">{selected_item.source}</p>
            </div>
            <div>
              <p class="text-sm font-semibold text-gray-400 uppercase">Description</p>
              <p class="text-gray-200">{selected_item.description}</p>
            </div>
            <div>
              <p class="text-sm font-semibold text-gray-400 uppercase">Image Link</p>
              <a href={selected_item.image} class="text-blue-400 underline hover:text-blue-300 break-all text-sm">
                {selected_item.image}
              </a>
            </div>
            <button 
              onclick={() => sidebar_opened = false}
              class="w-full mt-4 px-4 py-3 bg-gray-800 hover:bg-gray-700 rounded transition-colors font-medium"
            >
              Close
            </button>
          </div>
        </div>
      </div>
      {/if}
  </div>
</div>