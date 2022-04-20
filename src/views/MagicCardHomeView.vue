<template>
  <div class="home">
    <div id="banner">
      <h2><strong>Magic Card:</strong> Ma collection</h2>
    </div>
    <MagicHome />
  </div>
</template>

<script>
// @ is an alias to /src
import MagicHome from "@/components/MagicHome.vue";

export default {
  name: "MagicCardHomeView",
  components: {
    MagicHome,
  },
};
</script>
<style>

</style>