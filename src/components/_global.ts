import Vue from 'vue'
import upperFirst from 'lodash/upperFirst'
import camelCase from 'lodash/camelCase'


// Get all files starting with Base and ending with .vue
const requireComponent = require.context('.', false, /Base[\w-]+\.vue$/)

requireComponent.keys().forEach(fileName => {
  const componentConfig = requireComponent(fileName)

  // Get file name without extension and conver it to PascalCase
  const componentName = upperFirst(camelCase(fileName.replace(/\.\w+$/, '')))

  // Register the component
  Vue.component(componentName, componentConfig.default || componentConfig)
})
