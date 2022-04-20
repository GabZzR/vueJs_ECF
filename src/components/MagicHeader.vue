<template>
  <div id="header-wrapper">
    <div class="container">
      <!-- Header -->
      <header id="header">
        <div class="inner">
          <!-- Logo -->
          <h1><div id="logo" @click="goToHome()">Magic</div></h1>

          <!-- Nav -->
          <nav id="nav">
            <ul>
              <li><div class="nav-home" @click="goToHome()">Home</div></li>
              <li><div class="nav-home" @click="goToColl()">Ma Collection</div></li>
            </ul>
          </nav>
        </div>
      </header>
    </div>
  </div>
</template>

<script>
export default {
  name: "MagicHeader",
  methods: {
    goToHome() {
      this.$router.push({ name: "home" });
    },
    goToColl() {
      this.$router.push({ name: "coll" });
    },
  },
};
</script>

<style scoped>
.nav-home{
  cursor: pointer;
}
</style>
