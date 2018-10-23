<template>
    <div id="app">
        {{msg}}
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
