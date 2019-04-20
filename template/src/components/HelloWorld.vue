{{#if_eq htmlTemplate "pug"}}
<template lang="pug">
  div.hello
    h1 \{{ msg }}
    el-button Element Ui
</template>
{{/if_eq}}
{{#if_eq htmlTemplate "none"}}
<template>
  <div class="hello">
    <h1>\{{ msg }}</h1>
    <el-button>Element Ui</el-button>
  </div>
</template>
{{/if_eq}}

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
<style scoped lang="scss">
  h1, h2 {
    font-weight: normal;
  }

  ul {
    list-style-type: none;
    padding: 0;
    li {
      display: inline-block;
      margin: 0 10px;
    }
  }

  a {
    color: #42b983;
  }
</style>
{{/if_eq}}
{{#if_eq css "less"}}
<style scoped lang="less">
  h1, h2 {
    font-weight: normal;
  }

  ul {
    list-style-type: none;
    padding: 0;
    li {
      display: inline-block;
      margin: 0 10px;
    }
  }

  a {
    color: #42b983;
  }
</style>
{{/if_eq}}
{{#if_eq css "stylus"}}
<style scoped lang="stylus">
  h1, h2
    font-weight normal

  ul
    list-style-type none
    padding 0
    li
      display inline-block
      margin 0 10px

  a
    color #42b983

</style>
{{/if_eq}}
{{#if_eq css "none"}}
<style scoped type="text/css">
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
{{/if_eq}}
