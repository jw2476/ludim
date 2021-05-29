<section class="section">
    <div class="container">
        <div class="columns">
            <div class="column">
                {#each subjects as subject}
                    <div class="box notification is-dark has-text-centered">
                        <p class="title has-text-primary">{subject}</p>
                        <button class="button is-primary has-text-dark" on:click={() => {getTopics(subject)}}>Select</button>
                    </div>
                {/each}
            </div>
            <div class="column">
                {#each topics as topic}
                    <div class="box notification is-dark has-text-centered">
                        <p class="title has-text-primary">{topic}</p>
                        <button class="button is-primary has-text-dark" on:click={() => {getQuiz(topic)}}>Select</button>
                    </div>
                {/each}
            </div>
        </div>
    </div>
</section>

<script lang="ts">
    import type {IQuiz} from "../common/types/Quiz";
    import {page, quiz} from "../stores"
    import api from "../api";

    let subjects: string[] = []
    let topics: string[] = []
    let quizzes: IQuiz[] = []

    api.get("/api/quiz/subjects").then(res => subjects = res.data)

    function getTopics(subject: string) {
        console.log("HI")
        api.get(`/api/quiz/bySubject?subject=${subject}`).then(res => {
            quizzes = res.data
            topics = quizzes.map(quiz => quiz.topic)
        })
    }

    function getQuiz(topic: string) {
        quiz.set(quizzes.filter(quiz => quiz.topic == topic)[0])
        page.set("host")
    }
</script>