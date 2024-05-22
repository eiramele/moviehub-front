import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'

import { SearchBar } from '@/components'
 
describe('SearchBar', () => {
  it('renders search bar successfully', () => {
    render(<SearchBar />)
 
    const input = screen.getByRole('input', { level: 1 })
 
    expect(input).toBeInTheDocument()
  })
})