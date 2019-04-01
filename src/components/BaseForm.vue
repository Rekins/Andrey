<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator'

@Component
export default class BaseForm extends Vue {
  @Prop({ default: () => [] }) errors!: string[]
}
</script>

<template>
  <form :class="$style.form" v-on="$listeners" v-bind="$attrs">
    <div :class="$style.form__header">
      <slot name="header"/>
    </div>
    <div :class="$style.form__group">
      <slot/>
    </div>
    <div v-if="errors.length" :class="$style.form__errros">
      <div :class="$style.form__error" v-for="error in errors" :key="error">{{ error }}</div>
    </div>
  </form>
</template>

<style module lang="scss">
.form {
  display: flex;
  flex-direction: column;
  margin: $sz-inner-gap 0;

  & > :not(:last-child) {
    margin-bottom: $sz-inner-gap;
  }

  &__group {
    display: flex;

    & > :not(:last-child) {
      margin-right: $sz-inner-gap;
    }
  }

  &__error {
    color: $c-soft-red;
  }
}
</style>
