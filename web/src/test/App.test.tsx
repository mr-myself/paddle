import React from 'react'
import { render, screen } from '@testing-library/react'
import FeedsPage from '../containers/pages/FeedsPage'

test('renders learn react link', () => {
  render(<FeedsPage />)
  const linkElement = screen.getByText(/test/i)
  expect(linkElement).toBeInTheDocument()
})
