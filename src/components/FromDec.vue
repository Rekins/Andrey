<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component
export default class FromDec extends Vue {
  target: string = '23'

  radix: number = 0x10

  steps: string[] = []

  res: string = parseInt(this.target, 10)
    .toString(this.radix)
    .toUpperCase()

  resKatex = `\\text{${this.res}}_{${this.radix}}`

  errors: string[] = []

  mounted() {
    this.calculate()
  }

  calculate() {
    this.errors = []

    if (!/^\d+$/.test(this.target)) {
      this.errors.push('Цифры должны входить в интервал от 0 до 9')
    }
    if (!/^([2-9]|[12]\d|3[0-6])$/.test(this.radix.toString())) {
      this.errors.push(
        'Основание системы счисления должно входить в интервал от 2 до 36',
      )
    }
    if (this.errors.length) return

    this.res = parseInt(this.target, 10)
      .toString(this.radix)
      .toUpperCase()
    this.resKatex = `\\text{${this.res}}_{${this.radix}}`

    this.calculateSteps()
  }

  calculateSteps() {
    const target = Number(this.target)
    this.steps = this.res
      .split('')
      /* eslint-disable indent */
      .reduce(
        (acc: { expr: string; quotient: number; excess: number }[], a, i) =>
          i === 0
            ? [
                {
                  quotient: (target / this.radix) | 0,
                  excess: target % this.radix,
                  expr: `${target} : ${this.radix} = ${(target / this.radix) |
                    0} \\text {(ост. ${target % this.radix})}`,
                },
              ]
            : [
                ...acc,
                {
                  quotient: (acc[i - 1].quotient / this.radix) | 0,
                  excess: acc[i - 1].quotient % this.radix,
                  expr: `${acc[i - 1].quotient} : ${this.radix} = ${(acc[i - 1]
                    .quotient /
                    this.radix) |
                    0} \\text {(ост. ${acc[i - 1].quotient % this.radix})}`,
                },
              ],
        [],
      )
      /* eslint-enable indent */
      .map(o => o.expr)
  }
}
</script>

<template>
  <div :class="$style.fromDec">
    <h5>Перевод из десятичной системы</h5>

    <BaseForm :errors="errors" @submit.prevent="calculate">
      <BaseInput v-model.trim="target" placeholder="Число"/>
      <BaseInput type="number" min="2" max="36" placeholder="Основание" v-model.number="radix"/>
      <BaseButton type="submit">Перевести</BaseButton>
    </BaseForm>

    <KatexElement :expression="`${target}_{10} = X_{${radix}}`"/>

    <ol :class="$style.fromDec__steps">
      <li :class="$style.fromDec__step" v-for="step in steps" :key="step">
        <KatexElement :expression="step"/>
      </li>
    </ol>

    <span>
      Записывая остатки снизу вверх получаем результат:
      <div :class="$style.fromDec__output">
        <KatexElement :expression="resKatex"/>
      </div>
    </span>
  </div>
</template>

<style module lang="scss">
.fromDec {
  &__output {
    display: inline-block;
    padding: $sz-input-padding;
    border-bottom: 2px solid $c-text-dark;
  }
}
</style>
