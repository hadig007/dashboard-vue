<template>
  <div>
    <template-dashboard></template-dashboard>
  </div>
</template>

<script>
import TemplateDashboard from './components/dashboard/TemplateDashboard.vue'
export default {
  components: { TemplateDashboard },
}
</script>

<style>
html{
  width: 100%;
  height: 100vw;
  box-sizing: border-box;
}
body{
  margin: 0;
  padding: 0;
}
</style>