import { render, screen, fireEvent } from '@testing-library/react'
import InsuranceSelector from './insuranceSelector'
import '@testing-library/jest-dom/extend-expect'

test('Component <PlanSelector/> render', () => {
  render(<InsuranceSelector />)
  expect(screen.getByTestId('container')).toBeInTheDocument()
})

test('Component <InsuranceSelector/> render component <Button /> and <Select />', () => {
  render(<InsuranceSelector />)

  expect(
    screen.getByTestId('select').classList.contains('bice-vida__select')
  ).toBe(true)
  expect(
    screen.getByText('Consultar').classList.contains('bice-vida__button')
  ).toBe(true)
})

test('Click <Button /> without select insurance', () => {
  render(<InsuranceSelector />)

  const button = screen.getByText('Consultar')
  fireEvent.click(button)
  expect(screen.queryAllByText('Debes seleccionar un Plan').length > 0).toBe(
    true
  )
})
