<section class="section">
    <div class="container">
        <div class="box has-text-centered notification is-dark has-text-primary">
            <p class="title">{$quiz.subject} - {$quiz.topic}</p>
            <br>
            <p class="code">Code: {code}</p>
        </div>

        <div class="columns">
            {#each ["Paladin", "Wizard", "Warrior"] as className}
                <div class="column">
                    <div class="box has-text-centered notification is-dark has-text-primary">
                        <p class="title">{className}</p>
                        <ul>
                            {#each players.filter(player => player.currentClass.name === className) as player}
                                <li>{player.username}</li>
                            {/each}
                        </ul>
                    </div>
                </div>
            {/each}
        </div>
    </div>
</section>

<script lang="ts">
    import {quiz, socket} from "../stores";
    import {onMount} from "svelte";
    import api from "../api"
    import type {IUser} from "../common/types/User";

    let code = "";
    let players: [IUser] = []

    onMount(() => {
        console.log("running")
        api.post("/api/game", {
            quiz: $quiz
        }).then(res => {
            code = res.data.code
        })

        socket.on("player joined", (player: IUser) => players.push(player))
    })
</script>

<style lang="sass">
  .title
    font-size: 56px

  .code
    font-size: 48px
</style>