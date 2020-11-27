import { fireEvent, render, screen } from '@testing-library/react'
import Button from './button'
import '@testing-library/jest-dom/extend-expect'

const onClick = jest.fn()

it('Component <Button/> render and click', () => {
  render(<Button onClick={onClick}>text</Button>)

  const button = screen.getByTestId('button')
  expect(button.tagName).toBe('BUTTON')

  fireEvent.click(button)
})
