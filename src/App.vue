<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<style lang="scss">
  html,
  body {
    height: 100%;
  }

  #app {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
</style>
