<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import Layout from '@/layouts/default.vue'

@Component({
  components: { Layout },
})
export default class _timeout extends Vue {}
</script>

<template>
  <Layout>
    <h3>The page timed out while loading. Are you sure you're still connected to the Internet?</h3>
  </Layout>
</template>
