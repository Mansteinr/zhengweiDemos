<template>
  <div id="app">
    <top></top>
    <div class="container">
        <router-view></router-view>
    </div>
  </div>
</template>

<script>
import Top from './components/Top'

export default {
  name: 'app',
  components:{
    Top
  }
}
</script>

<style>

</style>
