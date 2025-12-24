<script lang="ts">
import Upload from "$lib/assets/Upload.svelte";
import { blur, crossfade, draw, fade, slide } from "svelte/transition";
const drophandler = (event: DragEvent) => {
    event.preventDefault();
    const files = event.dataTransfer?.files;
    if (files) {
        selectFile = [
            ...selectFile,
            ...Array.from(files)
                .filter(file => file.type.startsWith('image/') && !selectFile.some(item => item.file.name === file.name))
                .map(file => ({ file, progress: 0 }))
        ];
    }        
};
const selecthandler = (event: Event) => {
    const files = (event.target as HTMLInputElement).files;
    if (files) {
        selectFile = [
            ...selectFile,
            ...Array.from(files)
                .filter(file => !selectFile.some(item => item.file.name === file.name))
                .map(file => ({ file, progress: 0 }))
        ];
    };
}
const uploader = ()=>{
    btn_available = false;
    selectFile.forEach((item:SelectedFiles,idx:number)=>{
    const formdata = new FormData();
    formdata.append("file",item.file)
    const xhr = new XMLHttpRequest();
    xhr.open("POST","https://api.ahogehub.org/upload");
    xhr.upload.onprogress = (event)=>{
        if(event.lengthComputable){
            const loaded = event.loaded;
            const total = event.total;
            const percent = Math.round(loaded/total * 100)
            selectFile[idx].progress = percent
        }
    }
    xhr.send(formdata)
    xhr.onerror = () =>{
        selectFile[idx].progress = -1
    }
    xhr.onloadend = () =>{
        btn_available = true
    }
    })
}
type SelectedFiles = {file:File,progress:number}
let selectFile = $state<SelectedFiles[]>([])
let btn_available = $state<boolean>(true);
</script>


<div class="w-screen flex content-center justify-center *:flex-1 flex-col text-center">
    <div class="p-10 rounded-md">
        <h1 class="text-3xl font-semibold">Upload</h1>
        <div
            class="mx-auto flex flex-col justify-center content-center md:w-150 border-1 border-dashed rounded-md m-5 p-5 hover:bg-gray-600/50"
            role="button"
            tabindex="0"
            ondrop={drophandler}
            ondragover={(e) => e.preventDefault()}
            ondragleave={(e) => e.preventDefault()}
        >
            <label for="drop" class="size-full">
                <Upload/>
                <p class=" text-white">
                    Drag and drop your files here or click to select files
                </p>
                <input
                    id="drop"
                    type="file"
                    class="hidden"
                    accept="image/*"
                    multiple
                    onchange={selecthandler}
                />
            </label>
        </div>
    </div>
    <div class=" bg-neutral-900 md:w-170 w-full mx-auto p-5 rounded-md divide-y-1 divide-gray-500 *:p-2.5 content-center">
        {#if selectFile.length != 0}
        <button 
            class="font-semibold text-xl rounded-md m-2.5 outline-1 outline-purple-400 hover:scale-110 hover:outline-transparent from-indigo-500 to-pink-500 hover:bg-gradient-to-r w-50 transition-all ease-in-out duration-300 active:scale-100"
            onclick={()=>{
                selectFile = []
            }}
        >
            Clear
        </button>
        {/if}
        {#each selectFile as item}
        <div class={`py-2 ${item.progress === -1 && "bg-red-500/50"}`} transition:slide>
            <div class="flex items-center justify-between gap-3">
                <img src={URL.createObjectURL(item.file)} alt="loading..." class="w-12 h-12 object-cover rounded" />
                <p class="truncate text-white/90">{item.file.name}</p>
                <div class="flex items-center gap-2">
                    <span class="text-xs text-white/70 w-10 text-right">{item.progress >= 0 ? item.progress + "%" : "Error Occured"}</span>
                    <button
                        type="button"
                        class="text-xs text-red-400 hover:text-red-900  transition-colors px-2 py-1 rounded bg-transparent"
                        onclick={()=>{
                            selectFile = selectFile.filter((f:SelectedFiles)=>f.file.name != item.file.name)
                        }}
                    >
                        Remove
                    </button>
                </div>
            </div>
            <div class="w-full h-2 bg-gray-700 rounded-full mt-2 overflow-hidden">
                <div
                    class="h-full bg-purple-400 rounded-full transition-all"
                    style="width: {Math.max(0,item.progress)}%"                    
                >
                </div>
            </div>
        </div>
        {:else}
        <h3 class="text-3xl font-semibold" in:fade={{delay:1000}}>
            Express cuteness
            <p class="text-base text-white/70" in:slide={{delay:1500}}>or <a href="/explore" class="underline hover:text-white/30">explore your fetish</a></p>
        </h3>
        {/each}
        {#if selectFile.length != 0 && btn_available}
        <button 
            class="font-semibold text-xl rounded-md m-2.5 outline-1 outline-purple-400 hover:scale-110 hover:outline-transparent from-indigo-500 to-pink-500 hover:bg-gradient-to-r w-50 transition-all ease-in-out duration-300 active:scale-100"
            onclick={uploader}
        >
            Upload
        </button>
        {/if}
    </div>
</div>

