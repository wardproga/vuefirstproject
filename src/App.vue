<template>
  <div id="app">
    <nav>
    <NavView />
    </nav>
    <router-view/>
  </div>
</template>



<script>

import NavView from './views/NavView'
export default {
  components:{
    NavView
  },
}
</script>

<style>

@import '~assets/mystyle.cs';
</style>

