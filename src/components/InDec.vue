<script lang="ts">
import { Component, Vue, Watch } from 'vue-property-decorator'

@Component
export default class InDec extends Vue {
  target: string = 'A123'

  radix: number = 0xf

  res: number = parseInt(this.target, this.radix)

  resKatex: string = `{${this.res}}_{10}`

  errors: string[] = []

  sumSteps: string[] = []

  gornerSteps: string[] = []

  mounted() {
    this.calculate()
  }

  calculate() {
    this.errors = []

    if (!/^[A-Za-z0-9]+$/.test(this.target)) {
      this.errors.push('Число должно состоять только из цифр 0-9, a-z и A-Z')
    }
    if (!/^([2-9]|[12]\d|3[0-6])$/.test(this.radix.toString())) {
      this.errors.push(
        'Основание системы счисления должно входить в интервал от 2 до 36',
      )
    }
    if (this.errors.length) return

    const res = parseInt(this.target, this.radix)

    if (Number.isNaN(res)) {
      this.errors.push('Цифры должны быть меньше основания')
      return
    }

    this.res = res
    this.resKatex = `{${this.res}}_{10}`

    this.calculateSumSteps()
    this.calculateGornerSteps()
  }

  calculateSumSteps() {
    const n = this.target.length
    this.sumSteps = this.target
      .split('')
      /* eslint-disable indent */
      .reduce(
        (acc: { prev: number; expr: string }[], a, i) =>
          i === 0
            ? [
                {
                  prev: parseInt(a, this.radix) * this.radix ** (n - i - 1),
                  expr: `${parseInt(a, this.radix)} * ${this.radix}^{${n -
                    i -
                    1}} = ${parseInt(a, this.radix) *
                    this.radix ** (n - i - 1)}`,
                },
              ]
            : [
                ...acc,
                {
                  prev:
                    parseInt(a, this.radix) * this.radix ** (n - i - 1) +
                    acc[i - 1].prev,
                  expr: `${acc[i - 1].prev} + ${parseInt(a, this.radix)} * ${
                    this.radix
                  }^{${n - i - 1}} = ${acc[i - 1].prev +
                    parseInt(a, this.radix) * this.radix ** (n - i - 1)}`,
                },
              ],
        [],
      )
      /* eslint-enable indent */
      .map(o => o.expr)
  }

  calculateGornerSteps() {
    this.gornerSteps = this.target
      .split('')
      .map(a => parseInt(a, this.radix))
      /* eslint-disable indent */
      .reduce(
        (acc: { res: number; expr: string }[], a, i, arr) =>
          i === 0
            ? [{ res: a * this.radix, expr: `${a}*${this.radix}` }]
            : i === arr.length - 1
            ? [
                ...acc,
                {
                  res: acc[i - 1].res + a,
                  expr: `${acc[i - 1].expr}+${a}`,
                },
              ]
            : [
                ...acc,
                {
                  res: (acc[i - 1].res + a) * this.radix,
                  expr: `(${acc[i - 1].expr}+${a})*${this.radix}`,
                },
              ],
        [],
      )
      /* eslint-enable indent */
      .map(o => `${o.expr} = ${o.res}`)
  }
}
</script>

<template>
  <div :class="$style.inDec">
    <h5>Перевод в десятичную из другой системы счисления:</h5>

    <BaseForm :errors="errors" @submit.prevent="calculate">
      <BaseInput v-model.trim="target" placeholder="Число"/>
      <BaseInput type="number" min="2" max="36" placeholder="Основание" v-model.number="radix"/>
      <BaseButton type="submit">Перевести</BaseButton>
    </BaseForm>

    <div :class="$style.inDec__sum">
      По формуле
      <KatexElement expression="\displaystyle \sum_{k=0}^{n-1}a_kb^k"/>:
      <ol :class="$style.inDec__stepsList">
        <li :class="$style.inDec__step" v-for="step in sumSteps" :key="step">
          <KatexElement :expression="step"/>
        </li>
      </ol>

      <span>
        Результат:
        <div :class="$style.inDec__output">
          <KatexElement :expression="resKatex"/>
        </div>
      </span>
    </div>

    <div :class="$style.inDec__gorner">
      Либо используя схему Горнера
      <KatexElement
        expression="\Big( \big( ... ( a_{n-1}b + a_{n-2} ) b + a_{n-3} \big) ... \Big ) b + a_0"
      />:
      <ol :class="$style.inDec__stepsList">
        <li :class="$style.inDec__step" v-for="step in gornerSteps" :key="step">
          <KatexElement :expression="step"/>
        </li>
      </ol>

      <span>
        Результат:
        <div :class="$style.inDec__output">
          <KatexElement :expression="resKatex"/>
        </div>
      </span>
    </div>
  </div>
</template>

<style module lang="scss">
.inDec {
  &__output {
    display: inline-block;
    padding: $sz-input-padding;
    border-bottom: 2px solid $c-text-dark;
  }

  &__steps {
    margin: $sz-inner-gap/2 0;
  }

  &__stepsList {
    padding-left: 2rem;
    list-style-type: decimal;
  }
}
</style>
