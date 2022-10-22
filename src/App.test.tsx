import { describe } from 'vitest'
import {render, screen} from '@testing-library/react'
import App from './App';

describe('App', () => { 
  it("should render", ()=>{
    render(<App />)
  })

  it("should have title Mi DUI es valido?", ()=>{
    render(<App />)
    expect(screen.getByRole('heading', {name: /mi dui es valido\?/i})).toBeInTheDocument()
  })

  it("should have an input text", ()=>{
    render(<App />)
    expect(screen.getByRole('textbox')).toBeInTheDocument()
  })

  it("must have an specific input text for DUI", ()=>{
    render(<App />)
    expect(screen.getByPlaceholderText("000000000")).toBeInTheDocument()
  })

  it("should have an input text", ()=>{
    render(<App />)
    expect(screen.getByRole('button', {name: /validar/i})).toBeInTheDocument()
  })

})
