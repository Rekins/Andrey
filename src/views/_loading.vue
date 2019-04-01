<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import Layout from '@/layouts/default.vue'

@Component({
  components: { Layout },
})
export default class _loading extends Vue {}
</script>

<template>
  <Layout>
    <h3>Loading...</h3>
  </Layout>
</template>
