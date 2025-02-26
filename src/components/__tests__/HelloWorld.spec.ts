import { describe, it, expect } from 'vitest'
import Navbar from '../Navbar.vue'

import { mount } from '@vue/test-utils'

describe('Navbar', () => {
  it('renders properly', () => {
    const wrapper = mount(Navbar)
    expect(wrapper.text()).toContain('Hello Vitest')
  })
})
