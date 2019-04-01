<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import Layout from '@/layouts/default.vue'

@Component({
  components: { Layout },
})
export default class Typography extends Vue {}
</script>

<template>
  <Layout :class="$style.typography">
    <h1>Title</h1>
    <h2>Title</h2>
    <h3>Title</h3>
    <h4>Title</h4>
    <h5>Title</h5>
    <h6>Title</h6>
    <BaseInput placeholder="sdfs"/>
    <BaseTextarea placeholder="Textarea"/>
  </Layout>
</template>

<style module lang="scss">
.typography {
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  & > :not(:last-child) {
    margin-bottom: $sz-inner-gap;
  }
}
</style>
