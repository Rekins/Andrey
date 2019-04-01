<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator'
import Layout from '@/layouts/default.vue'

@Component({
  components: { Layout },
})
export default class _404 extends Vue {
  @Prop() resource: string = ''
}
</script>

<template>
  <Layout>
    <h1>
      404
      <template v-if="resource">{{ resource }}</template> Not found
    </h1>
  </Layout>
</template>
