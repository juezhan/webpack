{{#if_eq htmlTemplate "pug"}}
<template lang="pug">
  div#app
    img(src="./assets/logo.png")
  {{#router}}
    router-view
  {{else}}
    HelloWorld
  {{/router}}
</template>
{{/if_eq}}
{{#if_eq htmlTemplate "none"}}
<template>
  <div id="app">
    <img src="./assets/logo.png">
    {{#router}}
    <router-view/>
    {{else}}
    <HelloWorld/>
    {{/router}}
  </div>
</template>
{{/if_eq}}

<script>
{{#unless router}}
import HelloWorld from './components/HelloWorld'
{{/unless}}
export default {
  name: 'App'{{#router}}{{else}},
  components: {
    HelloWorld
  }{{/router}}
}
</script>
{{#if_eq css "scss"}}
<style lang="scss">
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
</style>
{{/if_eq}}
{{#if_eq css "less"}}
<style lang="less">
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
</style>
{{/if_eq}}
{{#if_eq css "stylus"}}
<style lang="stylus">
  #app
    font-family 'Avenir', Helvetica, Arial, sans-serif
    -webkit-font-smoothing antialiased
    -moz-osx-font-smoothing grayscale
    text-align center
    color #2c3e50
    margin-top 60px

</style>
{{/if_eq}}
{{#if_eq css "none"}}
<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
</style>
{{/if_eq}}
