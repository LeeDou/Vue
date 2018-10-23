<template>
    <div id="app">
        {{msg}}
        <div class="main">你好 vue</div>
    </div>
</template>
<script>
  export default {
      name:'app',
      data() {
        return {
          msg: 'hello world！'
        }
      }
  }
</script>
<style lang="scss" scoped>
.main {
  background-color: pink;
}
</style>

