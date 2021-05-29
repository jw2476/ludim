<script lang="ts">
    import {page} from "./stores"
    import Home from "./Home.svelte";
    import SignUp from "./auth/SignUp.svelte";
    import Login from "./auth/Login.svelte";
    import QuizSelect from "./setup/QuizSelect.svelte";
    import Host from "./setup/Host.svelte";
    import Join from "./setup/Join.svelte";
</script>

{#if $page === "home"}
    <Home/>
{:else if $page === "signup"}
    <SignUp/>
{:else if $page === "login"}
    <Login/>
{:else if $page === "quiz select"}
    <QuizSelect/>
{:else if $page === "host"}
    <Host/>
{:else if $page === "join"}
    <Join/>
{/if}