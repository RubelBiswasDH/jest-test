import { render, screen } from '@testing-library/react'
import { describe, expect, test } from '@jest/globals'

import About from '@/pages/about'
import { sum } from '@/pages/about'


describe('sum module', () => {
  test('adds 1 + 2 to equal 3', () => {
    expect(sum(1, 2)).toBe(3)
    expect(sum(2, 2)).not.toBe(3)
    expect(sum(4, 2)).toBe(6)
  })
})


describe('About', () => {
  it('Contains "about"', () => {
    render(<About />)
    const text: any = screen.getByText(/about/i)
    // @ts-ignore
    // expect(text).toBeInTheDocument()
  })
})
