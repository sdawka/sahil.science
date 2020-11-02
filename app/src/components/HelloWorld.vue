<template>
  <div class="hello">
    <h1>Welcome to my virtual estate!</h1>
    <p>
      Here is my 
      <router-link to="/mem-mori">mem-mori</router-link>, my
      <router-link to="/fav-books">favourite books</router-link>, some of my writing for 
      <a href="https://www.digit.in/author/sahil/" target="_blank" rel="noopener">Digit</a> magazine, and some pseudo-random stuff I find
      <router-link to="/"> interesting</router-link>.
    </p>
    <h3>Projects</h3>
    <ul>
      Coming up!
      <!-- <li><a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-babel" target="_blank" rel="noopener">babel</a></li>
      <li><a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-eslint" target="_blank" rel="noopener">eslint</a></li> -->
    </ul>
   
    <h3>Essential Links</h3>
    <ul>
      <li><a href="https://www.youtube.com/watch?v=GRYcSuyLiJk" target="_blank" rel="noopener">Sapolsky</a></li>
      <li><a href="https://www.youtube.com/watch?v=mH0oCDa74tE" target="_blank" rel="noopener">3Blue1Brown</a></li>
      <li><a href="https://www.youtube.com/watch?v=wS2mdmt4JPw" target="_blank" rel="noopener">Journey to the Microcosmos</a></li>
      <li>Lex <a href="https://www.youtube.com/watch?v=cMscNuSUy0I" target="_blank" rel="noopener">(Chomsky)</a><a href="https://www.youtube.com/watch?v=nWTvXbQHwWs" target="_blank" rel="noopener">(Lattner)</a></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}

.hello {
  margin-bottom: 50px;
}
</style>
