<section class="hero is-medium is-primary">
    <div class="hero-body has-text-centered">
        <p class="title has-text-dark">
            Ludim
        </p>
        <p class="subtitle has-text-dark">
            Quizzes Made Fun
        </p>
        {#if $token}
            <button class="button is-dark" on:click={() => page.set("quiz select")}>Host a Game</button>
            <button class="button is-dark" on:click={() => page.set("join")}>Join a Game</button>
        {:else}
            <button class="button is-dark" on:click={() => page.set("signup")}>Sign Up</button>
            <button class="button is-dark" on:click={() => page.set("login")}>Login</button>
        {/if}
    </div>
</section>

<style lang="sass">
  .title
    font-size: 96px

  .subtitle
    font-size: 32px
</style>

<script lang="ts">
    import {page, token} from "./stores"
</script>