<script lang="ts">
    import ImagePreviewer from "$lib/assets/ImagePreviewer.svelte";
    const ahogeList = [
      {
        id: 1,
        name: 'Hoshino',
        image: '/ahoge_sample/hoshino.webp',
        description: 'A beautiful ahoge.'
      },
      {
        id: 2,
        name: 'Hoshino V2',
        image: '/ahoge_sample/hoshino_v2.webp',
        description: 'A beautiful ahoge.'
      },
      {
        id: 3,
        name: 'Maki',
        image: '/ahoge_sample/maki.webp',
        description: 'A beautiful ahoge.'
      },
      {
        id: 4,
        name: 'Uzawa',
        image: '/ahoge_sample/uzawa.webp',
        description: 'A beautiful ahoge.'
      },
      {
        id: 5,
        name: 'Long Ago',
        image: '/ahoge_sample/long_ago.webp',
        description: 'A beautiful ahoge.'
      }
    ]
    let sidebar_opened = $state(false)
    let selected_item:{
      image:string,
      description:string,
      source:string
    } = $state({
      image:"test",
      description:"test",
      source:"test"
    })
    const callback = (data:any)=>{
      selected_item.image = data
      sidebar_opened = true
    }
    let files = $state([])
</script>

<h1 class="text-center text-4xl top-0 z-500">
    Explore
</h1>
<div class="md:flex flex-row gap-5 p-5 relative">
    <div class="md:flex flex-1 hidden">
        <div class="w-full outline-1 bg-red-700 flex">
            <div>
                <ul>
                    <li>Attributes 1</li><li>Attributes 1</li><li>Attributes 1</li><li>Attributes 1</li>
                </ul>
            </div>
        </div>
    </div>   
    <div class="md:flex-5 bg-blue-500 ">
       {#each files as image} 
          <ImagePreviewer src={"https://api.kurosiko.com/item/"+image} onclick={callback}/>
        {/each}
        
    </div>
    {#if sidebar_opened}
      <div class="md:flex-1 sticky top-0 left-0 text-center">
        <img
          src={selected_item.image} alt={selected_item.description}
          class="w-full"
        >
        <button onclick={()=>{sidebar_opened = false}}>close</button>
      </div>
    {/if}
    <button onclick={()=>{
      fetch("https://api.kurosiko.com/get").then((v)=>{
        v.json().then((j)=>{
          console.log(j)
          files = j.files
        })
      })
    }}>TEST</button>
</div>



