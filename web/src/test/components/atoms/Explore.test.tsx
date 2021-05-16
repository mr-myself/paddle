import React from 'react'
import { render, screen } from '@testing-library/react'
import Explore from 'src/components/atoms/Explore'

describe('atoms/Explore', () => {
  test('should render the component', () => {
    render(<Explore isActive onClick={jest.fn()} />)
    expect(screen.getByAltText('explore-icon')).toBeInTheDocument()
  })
})
