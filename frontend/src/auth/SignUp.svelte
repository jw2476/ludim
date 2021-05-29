<section class="section">
    <div class="container">
        <p class="title">Sign Up</p>

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
            {#if usernameTaken}
                <p class="help is-danger">Username Already Taken</p>
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
        </div>
        <div class="field">
            <div class="control">
                <button class="button is-primary" on:click={submit}>Submit</button>
            </div>
        </div>
    </div>
</section>

<script lang="ts">
    import {token, page} from '../stores'
    import api from "../api";

    let username = "";
    let password = "";
    let usernameEmpty = false;
    let passwordEmpty = false;
    let usernameTaken = false;

    async function submit() {
        usernameEmpty = !username;
        passwordEmpty = !password;
        usernameTaken = false;

        if (usernameEmpty || passwordEmpty) return;

        api.post("/api/auth/signup", {
            username,
            password
        }).then(async res => {
            switch (res.status) {
                case (403) : {
                    usernameTaken = true;
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