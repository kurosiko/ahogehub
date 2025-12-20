<script lang="ts">
  import { assets } from "$app/paths";
  import { authUser, is_logged_in, logout } from "$lib/authStore";
    import {fade} from "svelte/transition";
    let is_signup = $state(true);
    let pass_hidden = $state(true);
    let user:string = $state("");
    let pass:string = $state("");
    const login = (user_id:string,username:string)=>{authUser.set({user_id:user_id,username:username});is_logged_in.set(true)}
    type LoginResponse = {
        user_id:string,
        username:string,
        session_token:string,
        refresh_token:string
    }
</script>



<div class="flex flex-col gap-5 p-5 justify-center items-center content-center size-full *:transition-colors">
    {#if is_signup}
        <h1 class="text-4xl font-light" in:fade>Sign Up</h1>
    {:else}
        <h1 class="text-4xl font-light" in:fade>Sign In</h1>
    {/if}
    <button class="underline underline-offset-6" onclick={()=>is_signup = !is_signup}>{is_signup ? "You already have account?" : "You don't have account?"}</button>
    <div class="flex flex-col w-full *:w-2/3 items-center **:border-gray-500 **:focus:border-white **:transition-all">
        <input class="outline-0 border-b-1 p-3" type="text" placeholder="User Name" bind:value={user}>
        <div class="relative size-full">
            <input class="size-full outline-0 border-b-1 p-3" type={pass_hidden ? "password" : ""} placeholder="Password" bind:value={pass}>
            <button type="button" onclick={()=>pass_hidden = !pass_hidden}>
                {#if pass_hidden}
                    <img class="absolute top-1/3 right-3" src="/visibility.svg" alt="pass_hidden"/>
                {:else}
                    <img class="absolute top-1/3 right-3" src="/no_visibility.svg" alt="pass_hidden"/>
                {/if}
            </button>
        </div>
    </div>
    <button
        class="text-2xl outline-2 outline-white/50 hover:outline-white py-2 px-10 rounded-full bg-clip-text bg-gradient-to-bl text-transparent from-pink-400 to-purple-600"
        onclick={()=>{
            if (user == "" || pass == ""){
                alert("username or password requred 3 char at least!")
                return
            }
            fetch(is_signup ? "http://localhost:8080/signup":"http://localhost:8080/login",{
                method:"POST",
                headers:{
                    "Content-Type":"application/json"
                },
                body:JSON.stringify({
                    username:user,
                    password:pass
                }),
                mode:"cors"
            }).then(async(res)=>{
                if (!(res.status == 200 || res.status == 201)) return
                const response = await res.json() as LoginResponse
                login(response.user_id,response.username)
        })}}
    >
        {is_signup ? "Register" : "Login"}
    </button>
</div>