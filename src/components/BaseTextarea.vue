<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator'

@Component
export default class BaseTextarea extends Vue {
  @Prop({ default: '' }) value?: string
}
</script>

<template>
  <div :class="$style.textarea">
    <textarea
      :value="value"
      :class="$style.textarea__textarea"
      v-on="$listeners"
      v-bind="$attrs"
      @input="$emit('update', $event.target.value)"
    />
  </div>
</template>

<style module lang="scss">
.textarea {
  &__textarea {
    padding: $sz-input-padding;
    font-family: $typ-sans-serif;
    background-color: transparent;
    border: 2px solid $c-text-dark;
  }
}
</style>
