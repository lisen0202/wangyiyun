<template>
  <div class="home">
    <TopNav></TopNav>
    <SwpierTop></SwpierTop>
    <IconList></IconList>
  </div>
</template>

<script>
// @ is an alias to /src
import TopNav from '@/components/home/TopNav.vue';
import SwpierTop from '@/components/home/SwpierTop.vue'
import IconList from '@/components/home/IconList.vue'
export default {
  name: 'HomeView',
  components: {
    TopNav,
    SwpierTop,
    IconList,
  }
}
</script>
