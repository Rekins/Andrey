<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator'

@Component
export default class BaseButton extends Vue {
  @Prop({ default: 'button' }) type?: string
}
</script>

<template>
  <div :class="$style.button">
    <button :type="type" :class="$style.button__button" v-on="$listeners" v-bind="$attrs">
      <slot/>
    </button>
  </div>
</template>

<style module lang="scss">
.button {
  &__button {
    padding: $sz-button-padding;
    font-family: $typ-sans-serif;
    background-color: transparent;
    border: 2px solid $c-text-dark;
    transition: $tran-default;

    &:hover {
      color: $c-text-light;
      background-color: $c-text-dark;
    }
  }
}
</style>
