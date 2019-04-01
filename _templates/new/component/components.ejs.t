---
to: src/components/<%= h.inflection.camelize(name) %>.vue
---
<%
  const Name = h.inflection.camelize(name)
  const bindClassName = Name.split(/(?=[A-Z])/).length > 1 
    ? '$style.' 
    : `$style.${Name.toLowerCase()}`
  const className = Name.split(/(?=[A-Z])/).length > 1 
    ? ''
    : name.toLowerCase()
%><script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component
export default class <%= Name %> extends Vue {}
</script>

<template>
  <div :class="<%= bindClassName %>">
  </div>
</template>

<style module lang="scss">
.<%= className %> {
  
}
</style>
