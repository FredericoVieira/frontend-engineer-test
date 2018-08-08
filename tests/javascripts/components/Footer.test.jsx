import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import Footer from 'components/Footer'

Enzyme.configure({ adapter: new Adapter() })

describe('<Footer />', () => {
  it('renders footer element', () => {
    const wrapper = shallow(<Footer />)
    expect(wrapper.find('.footer').length).toBe(1)
  })

  it('renders footer paragraph element', () => {
    const wrapper = shallow(<Footer />)
    expect(wrapper.find('p').length).toBe(1)
  })

  it('renders footer links elements', () => {
    const wrapper = shallow(<Footer />)
    expect(wrapper.find('a').length).toBe(2)
  })

  it('checks if footer links elements has target attribute', () => {
    const wrapper = shallow(<Footer />)
    const targets = wrapper.find('a').map(a => a.prop('target'))
    expect(targets).toEqual(['_blank', '_blank'])
  })
})
