> Demo for https://stackoverflow.com/q/66348369/6277151

This shows how to use `vue-i18n` with `@vue/test-utils` in Vue 3:

```js
import { mount } from '@vue/test-utils'
import { createI18n } from 'vue-i18n'
import Home from '@/components/Home.vue'

describe('Home.vue', () => {
  it('i18n', () => {
    const i18n = createI18n({
      // vue-i18n options here ...
    })

    const wrapper = mount(Home, {
      global: {
        plugins: [i18n]
      }
    })

    expect(wrapper.vm.t).toBeTruthy()
  })
})
```