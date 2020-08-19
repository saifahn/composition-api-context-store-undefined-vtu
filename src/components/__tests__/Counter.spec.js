import { shallowMount, createLocalVue } from '@vue/test-utils'
import Vuex from 'vuex'
import VueCompositionAPI from '@vue/composition-api'
import Counter from '../Counter.vue'

const localVue = createLocalVue();
localVue.use(Vuex);
localVue.use(VueCompositionAPI);

describe('Counter component', () => {
  let store;
  beforeEach(() => {
    store = new Vuex.Store({
      state: {
        count: 0
      },
      mutations: {
        increment (state) {
          state.count++
        }
      }
    })
  })

  it('correctly increases the count on button press', () => {
    const wrapper = shallowMount(Counter, { store, localVue })
    const countSpan = wrapper.find("[data-test='count']")
    expect(countSpan.text()).toBe(0)
    wrapper.find('button').trigger('click')
    expect(countSpan.text()).toBe(1)
  })
})