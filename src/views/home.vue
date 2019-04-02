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
        <!-- <p :class="$style.title__subtitle">Выполнена учеником ........ Андреем(бро)</p> -->
      </header>
      <InDec :class="$style.home__section"/>
      <FromDec :class="$style.home__section"/>
      <TwosComplement :class="$style.home__section"/>
      <section :class="$style.home__section">
        Весь код этого сайта можно посмотреть в репозитории
        <a
          target="_blank"
          href="https://github.com/Rekins/Andrey"
          title="github"
        >github</a>.
      </section>
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
    // flex: 1 1 0;
    flex-direction: column;
    padding-top: $sz-outer-gap;
    padding-bottom: $sz-outer-gap;

    > :not(:last-child) {
      margin-bottom: $sz-outer-gap/2;
    }
  }

  &__section {
    padding: $sz-inner-gap;
    border: 2px solid $c-text-dark;
  }
}
</style>
