import React from 'react'
import { render, screen } from '@testing-library/react'
import Home from 'src/components/atoms/Home'

describe('atoms/Home', () => {
  test('should render the component', () => {
    render(<Home isActive onClick={jest.fn()} />)
    expect(screen.getByAltText('home-icon')).toBeInTheDocument()
  })
})
