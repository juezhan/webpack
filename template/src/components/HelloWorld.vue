<template lang="pug">
  div.hello
    h1 \{{ msg }}
    el-button Element Ui
</template>

<script>
export default {
  name: 'HelloWorld',
  data() {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
{{#if_eq css "scss"}}
<!-- scss -->
{{/if_eq}}
{{#if_eq css "less"}}
<!-- less -->
{{/if_eq}}
{{#if_eq css "stylus"}}
<!-- stylus -->
{{/if_eq}}
<style scoped type="text/stylus">
  h1, h2 {
    font-weight: normal;
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
</style>
