<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator'

@Component({ model: { event: 'update' } })
export default class BaseInput extends Vue {
  @Prop({ default: 'text' }) type?: string

  @Prop({ default: '' }) value?: number | string
}
</script>

<template>
  <div :class="$style.input">
    <input
      :type="type"
      :value="value"
      :class="$style.input__input"
      v-on="$listeners"
      v-bind="$attrs"
      @input="$emit('update', $event.target.value)"
    >
  </div>
</template>

<style module lang="scss">
.input {
  &__input {
    padding: $sz-input-padding;
    font-family: $typ-sans-serif;
    background-color: transparent;
    border: 2px solid $c-text-dark;
  }
}
</style>
