<script lang="ts">
    import { authUser, is_logged_in, logout } from "$lib/authStore";
    import { fade } from "svelte/transition";
    import { enhance } from "$app/forms";
    import type { ActionData } from "./$types";
    import { goto } from "$app/navigation";
    let { form }: { form: ActionData } = $props();
    let is_signup = $state(true);
    let pass_hidden = $state(true);
    let user: string = $state("");
    let pass: string = $state("");
    const login_store = (user_id: string, username: string) => {
        authUser.set({ user_id: user_id, username: username });
        is_logged_in.set(true);
    };
    $effect(() => {
        if (form?.success && form?.user) {
            login_store(form.user.user_id, form.user.username);
            
            goto("/")
        }
    });
</script>

<div
    class="flex flex-col gap-5 p-5 justify-center items-center content-center size-full *:transition-colors"
>
    {#if is_signup}
        <h1 class="text-4xl font-light" in:fade>Sign Up</h1>
    {:else}
        <h1 class="text-4xl font-light" in:fade>Sign In</h1>
    {/if}
    <button
        class="underline underline-offset-6"
        onclick={() => (is_signup = !is_signup)}
    >
        {is_signup? "You already have account?" : "You don't have account?"}
    </button>
    <form
        method="POST"
        use:enhance
        class="flex flex-col w-full items-center gap-5"
    >
        <div
            class="flex flex-col w-full *:w-2/3 items-center **:border-gray-500 **:focus:border-white **:transition-all **:duration-500"
        >
            <input
                class="outline-0 border-b p-3"
                type="text"
                name="username"
                placeholder="User Name"
                bind:value={user}
            />
            <div class="relative size-full">
                <input
                    class="size-full outline-0 border-b p-3"
                    type={pass_hidden ? "password" : ""}
                    name="password"
                    placeholder="Password"
                    bind:value={pass}
                />
                <button
                    type="button"
                    onclick={() => (pass_hidden = !pass_hidden)}
                >
                    {#if pass_hidden}
                        <img
                            class="absolute top-1/3 right-3"
                            src="/visibility.svg"
                            alt="pass_hidden"
                        />
                    {:else}
                        <img
                            class="absolute top-1/3 right-3"
                            src="/no_visibility.svg"
                            alt="pass_hidden"
                        />
                    {/if}
                </button>
            </div>
        </div>
        {#if form?.message}
            <p class="text-red-500">{form.message}</p>
        {/if}
        {#if form?.success}
            <p class="text-green-400">Success!</p>
        {/if}
        <button
            class="text-2xl outline-2 outline-white/50 hover:outline-white duration-500 py-2 px-10 rounded-full bg-clip-text bg-linear-to-bl text-transparent from-pink-400 to-purple-600"
            formaction={is_signup ? "?/signup" : "?/login"}
        >
            {is_signup ? "Register" : "Login"}
        </button>
    </form>
</div>
