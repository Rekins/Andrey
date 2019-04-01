<script lang="ts">
import { Component, Vue, Watch } from 'vue-property-decorator'

@Component
export default class TwosComplement extends Vue {
  target: string = '11111111'

  errors: string[] = []

  message: string = ''

  res: number = 0

  resKatex: string = ''

  steps: string[] = []

  mounted() {
    this.calculate()
  }

  calculate() {
    this.steps = []
    this.message = ''
    this.errors = []
    if (!/^[01]{8}$/.test(this.target)) {
      this.errors.push(
        'Число должно состоять только из цифр 0, 1 и быть длинной в 8 цифр',
      )
    }
    if (this.errors.length) return

    if (this.target[0] === '1') {
      this.message = 'Страший разряд равен 1, число отрицательное'
      this.res = parseInt(`${this.target.slice(1)}`, 2)
      this.resKatex = `1${this.target}_2 (-${this.res}_{10})`
      return
    }

    console.log(this.target, invert(this.target), inc(invert(this.target)))

    const inverted = invert(this.target)
    const incremented = inc(inverted)

    this.steps.push(String.raw`${this.target} \to ${inverted}`)
    this.steps.push(String.raw`${inverted} + 1 = ${incremented}`)

    this.res = -(~parseInt(this.target, 2) + 1)
    this.resKatex = `${incremented}_2 (-${this.res}_{10})`
  }
}

function invert(x: string) {
  return x
    .split('')
    .map(c => (c === '0' ? '1' : '0'))
    .join('')
}

function inc(x: string, step: number = 0): string {
  if (x.length < 2 || !x.split('').every(c => c === '1' || c === '0')) {
    return x
  }
  if (x.split('').every(c => c === '1')) return '1'.padEnd(x.length + 1, '0')
  return x[x.length - 1 - step] === '0'
    ? `${x.substr(0, x.length - 1 - step)}1`.padEnd(x.length, '0')
    : inc(x.substr(0, x.length - 1 - step).padEnd(x.length, '0'), step + 1)
}
</script>

<template>
  <div :class="$style.complement">
    <h5>Дополнительный код</h5>
    <p>Для примера здесь показано преобразование целых чисел, помещающихся в 1 байт, т.е от -128 до 127</p>
    <p>Старший разряд показывает знак числа (0 - положительное число, 1 - отрицательное)</p>

    <BaseForm :errors="errors" @submit.prevent="calculate">
      <template v-slot:header>
        <h5>Перевод из положительного двоичного числа в отрицательное</h5>
      </template>

      <BaseInput placeholder="Число (1 байт)" v-model="target"/>
      <BaseButton type="submit">Перевести</BaseButton>
    </BaseForm>

    <ol :class="$style.complement__steps">
      <li :class="$style.complement__step" v-for="step in steps" :key="step">
        <KatexElement :expression="step"/>
      </li>
    </ol>

    <span>
      <p v-if="message">{{ message }}</p>Результат:
      <div :class="$style.complement__output">
        <KatexElement :expression="resKatex"/>
      </div>
    </span>
  </div>
</template>

<style module lang="scss">
.complement {
  &__output {
    display: inline-block;
    padding: $sz-input-padding;
    border-bottom: 2px solid $c-text-dark;
  }
}
</style>
