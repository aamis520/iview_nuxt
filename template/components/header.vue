<template>
  <div class="container">
    <div class="flexBox">
      <div v-for="(item, index) in routerLinks"
        :key="index"
        :class="routeIndex == index ? 'active' : ''"
        @click="goRouter(item.path, index)">
        <span>{{item.name}}</span>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      routerLinks: [],
      routeIndex: 0
    }
  },
  created() {
    this.routerLinks = this.$router.options.routes
  },
  methods: {
    goRouter(path, index) {
      this.routeIndex = index
      this.$router.push(path)
    }
  }
}
</script>
<style scoped>
.container {
  width: 1200px;
  margin: 0 auto;
}
.flexBox {
  width: 100%;
  display: flex;
  text-align: center;
  align-items: center;
  font-size: 20px;
  margin: 30px auto;
}
.flexBox div {
  flex: 1;
  text-align: center;
}
.flexBox .active span {
  padding-bottom: 10px;
  border-bottom: 2px solid blueviolet;
}
</style>
