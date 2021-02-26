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