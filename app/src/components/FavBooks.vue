<template>
    <div class="books__container">
        <h3>Not an exhaustive list, and in no particular order - </h3>
        <ul class="books__list">
            <li>Metamagical themas</li>
            <li>Color of Magic</li>
            <li>Harry Potter and the Methods of Rationality</li>
            <li>anything by JRR Tolkein</li>
            <li>The Things We Do</li>
            <li>Chaos</li>
            <li>Language In Thought And Action</li>
            <li>Woman on the Edge of Time</li>
            <li>Maps of Meaning</li>
            <li>The Art of Being</li>
            <li>Psycho-cybernetics</li>
            <li>The Road Less Travelled</li>
            <li>Factfulness</li>
            <li>Mindf*ck</li>
            <li>Everybody Lies</li>
        </ul>
    </div>
</template>

<script>
export default {
    setup() {
        const books = [
            {
                name: 'Metamagical Themas',
                author: 'Douglas Hoffstadter',
                ISBN: 'x'
            }
        ]

        return {
            books,
        }
    }
}
</script>

<style scoped>
.books__container{
    display:flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    min-height: 100vh;
}

.books__list{
    align-items: flex-start;
}

li {
    list-style: none;
}
</style>