<template>
  <div id="app">
    <MagicHeader/>
    <router-view/>
    <MagicFooter/>
  </div>
</template>
<script>
import MagicHeader from "./components/MagicHeader.vue";
import MagicFooter from "./components/MagicFooter.vue";


export default{
components:{
    MagicHeader,
    MagicFooter
}
}

</script>

<style>

</style>
