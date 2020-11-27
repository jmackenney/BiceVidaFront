import { render, screen } from '@testing-library/react'
import InsuranceDetail from './insuranceDetail'
import '@testing-library/jest-dom/extend-expect'

const data = { data: { image: 'test/image', title: 'test' } }

test('Component <InsuranceDetail/> dont render without data', () => {
  render(<InsuranceDetail />)
  expect(screen.queryByTestId('insurance-detail__container')).toBeNull()
})

test('Component <InsuranceDetail/> render with data', () => {
  render(<InsuranceDetail data={data} />)

  const title = screen.getByTestId('title')
  expect(screen.getByTestId('image').tagName).toBe('IMG')
  expect(title.tagName).toBe('DIV')
  expect(title.classList.contains('insurance-detail__title')).toBe(true)
})
