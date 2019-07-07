<template>
  <div class="container">
    <Headers />
    <Insert />
    <Background />
    <UlList />
    <Mine />
    <Footers />
  </div>
</template>

<script>
import Headers from "../components/Headers"
import Insert from "../components/Insert"
import Background from "../components/Background"
import UlList from "../components/UlList"
import Mine from "../components/Mine"
import Footers from "../components/Footers"

export default {
  components: {
    Headers,
    Insert,
    Background,
    UlList,
    Mine,
    Footers
  }
}
</script>

<style>
*{margin: 0;padding: 0;list-style-type: none;}
.container,#__nuxt,#__layout{
  width: 100%;
}
</style>
