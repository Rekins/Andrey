<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import Layout from '@/layouts/default.vue'
import InDec from '@/components/InDec.vue'
import FromDec from '@/components/FromDec.vue'
import TwosComplement from '@/components/TwosComplement.vue'

@Component({
  components: {
    Layout,
    InDec,
    FromDec,
    TwosComplement,
  },
})
export default class Home extends Vue {}
</script>

<template>
  <div :class="$style.home">
    <Layout :class="$style.home__inner">
      <header :class="$style.title">
        <h3 :class="$style.title__title">Практическая часть проекта по системам счисления</h3>
        <p :class="$style.title__subtitle">Выполнена учеником ........ Андреем(бро)</p>
      </header>
      <InDec/>
      <FromDec/>
      <TwosComplement/>
    </Layout>
  </div>
</template>

<style module lang="scss">
.title {
  &__title {
    text-align: center;
  }

  &__subtitle {
    text-align: right;
  }
}

.home {
  display: flex;
  flex: auto;
  flex-direction: column;
  min-height: 100vh;

  &__inner {
    display: flex;
    flex: 1 1 0;
    flex-direction: column;
    padding: $sz-outer-gap 0;

    > :not(:last-child) {
      margin-bottom: $sz-outer-gap;
    }
  }
}
</style>
