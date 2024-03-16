import React from 'react'
import { Button } from './Button';
import { cleanup, fireEvent, render, screen } from '@testing-library/react';

const text = 'children'
const classes = ['_light', '_xs_size', '_md_radius', '_lg_fw', '_styles']
const color = 'rgb(255, 255, 255)'
const hoverColor = 'rgb(204, 204, 204)'

describe('Button', () => {
  afterEach(cleanup)

  test('is rendered', () => {
    render(<Button></Button>)
  })

  test('children text is rendered correctly', () => {
    render(<Button>{text}</Button>)
    
    expect(screen.getByText(text).textContent).toBe(text)
  })

  test('has 5 classes', () => {
    render(<Button>{text}</Button>)

    expect(screen.getByText(text).classList.length).toBe(5)
  })

  test('classes are integrated correctly', () => {
    render(<Button variant='light' size='xs' radius='md' fw='700'>{text}</Button>)

    classes.forEach(classname => {
      expect(screen.getByText(text).className.includes(classname)).toBe(true)
    })
  })

  test('isLoading attribute disables the button and adds an svg', () => {
    render(<Button isLoading>{text}</Button>)

    const buttonLoader = screen.getByText(text)
    expect(buttonLoader.disabled).toBe(true)
    expect(buttonLoader.firstChild?.nodeName).toBe('svg')
  })

  test('disable attribute disables the button', () => {
    render(<Button disabled>{text}</Button>)

    const buttonLoader = screen.getByText(text)
    expect(buttonLoader.disabled).toBe(true)
  })

  test("the color of the attribute is assigned and changes when hovered", () => {
    render(<Button color={color} >{text}</Button>)

    const button = screen.getByText(text)
    expect(button.style.background).toBe(color)

    fireEvent.mouseEnter(button)
    expect(button.style.background).toBe(hoverColor)
  })
})