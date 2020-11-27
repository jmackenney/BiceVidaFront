import { render, screen } from '@testing-library/react'
import Select from './select'
import '@testing-library/jest-dom/extend-expect'

const options = []
const setValue = jest.fn()

test('Component <Select/> render', () => {
  render(<Select options={options} setValue={setValue} />)
})
