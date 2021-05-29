<section class="section">
    <div class="container">
        <p class="title">Login</p>

        <div class="field">
            <label class="label">Username</label>
            <div class="control has-icons-left has-icons-right">
                <input class="input" type="text" placeholder="Gandalf the Lizard" bind:value={username}>
                <span class="icon is-small is-left">
                    <i class="fas fa-user"></i>
                </span>
            </div>
            {#if usernameEmpty}
                <p class="help is-danger">This cannot be empty</p>
            {/if}
            {#if incorrect}
                <p class="help is-danger">Username Incorrect</p>
            {/if}
        </div>
        <div class="field">
            <label class="label">Password</label>
            <div class="control has-icons-left has-icons-right">
                <input class="input" type="password" placeholder="Gandalf the Lizard's pet dog called Geoffrey"
                       bind:value={password}>
                <span class="icon is-small is-left">
                    <i class="fas fa-key"></i>
                </span>
            </div>
            {#if passwordEmpty}
                <p class="help is-danger">This cannot be empty</p>
            {/if}
            {#if incorrect}
                <p class="help is-danger">Password Incorrect</p>
            {/if}
        </div>
        <div class="field">
            <div class="control">
                <button class="button is-primary" on:click={submit}>Submit</button>
            </div>
        </div>
    </div>
</section>

<script lang="ts">
    import {page, token} from '../stores'
    import api from "../api";

    let username = "";
    let password = "";
    let usernameEmpty = false;
    let passwordEmpty = false;
    let incorrect = false;

    async function submit() {
        usernameEmpty = !username;
        passwordEmpty = !password;
        incorrect = false;

        if (usernameEmpty || passwordEmpty) return;

        api.post("/api/auth/login", {
            username,
            password
        }).then(async res => {
            switch (res.status) {
                case (403) : {
                    incorrect = true;
                    break;
                }
                case (200) : {
                    token.set(res.data.token)
                    page.set("home")
                }
            }
        })
    }
</script>