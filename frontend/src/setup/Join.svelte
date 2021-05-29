<section class="section">
    <div class="container">
        <div class="field">
            <label class="label">Code</label>
            <div class="control">
                <input class="input" type="text" placeholder="123456" bind:value={code}>
            </div>
            {#if codeIncorrect}
                <p class="help is-danger">Code Incorrect</p>
            {/if}
            {#if codeEmpty}
                <p class="help is-danger">Required</p>
            {/if}
        </div>
    </div>
    <br>
    <div class="field">
        <div class="control">
            <button class="button is-primary" on:click={joinGame}>Submit</button>
        </div>
    </div>
</section>

<script lang="ts">
    import api from "../api";
    import {game, quiz} from "../stores";

    let codeIncorrect = false;
    let codeEmpty = false;
    let code = ""

    function joinGame() {
        codeIncorrect = false

        codeEmpty = !code
        if (codeEmpty) return

        api.post("/api/game/join", {
            code
        }).then(res => {
            codeIncorrect = res.status === 404
            if (codeIncorrect) return
            quiz.set(res.data.quiz)
            game.set(res.data)
        })
    }
</script>