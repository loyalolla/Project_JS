<template>
<div>
    <Header />
    <slot></slot>
    <Footer />
</div>
</template>

<script>
// @ is an alias to /src
import Header from '@/views/Header.vue'
import Footer from '@/views/Footer.vue'

export default {
  name: 'Page',
  components: {
    Header,
    Footer,
  }
}
</script>

<style lang="scss">
@import '../styles/style.scss';
</style>
