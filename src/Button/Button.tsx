import React, { useEffect, useState } from "react"
import styles from './Button.module.css'
import { setSize, setRadius, setFw, setVariant } from './styles'
import setColor from "../color"

interface Props {
  children?: any | string
  variant?: string
  size?: string
  radius?: string
  fw?: string
  color?: string
  disabled?: boolean
  isLoading?: boolean
}

const Button: React.FC<Props> = ({
  children,
  variant='default',
  size='sm',
  radius='sm',
  fw='700',
  color,
  disabled,
  isLoading
}) => {

  const [isHover, setIsHover] = useState(false)
  const [lightColor, setLightColor] = useState<string>()
  const [darknesColor, setDarknesColor] = useState<string>()
  const [originialColor, setOriginalColor] = useState<string>()
  const [isLightColor, setIsLightColor] = useState<boolean>(true)
  const elements = `
  ${setVariant(variant, styles)} 
  ${setSize(size, styles)} 
  ${setRadius(radius, styles)} 
  ${setFw(fw, styles)} 
  ${styles.styles}
  `

  function setStyles () {
    const string = variant?.toLowerCase()
    if (!originialColor) return

    // DEFAULT
    if (string === 'default') {
      return {
        background: isHover&&!isLoading&&!disabled ?darknesColor :originialColor, 
        border: 'none', 
        color: isLightColor ?'rgb(14, 14, 1)' :'rgb(236, 236, 236)'
      }
    }

    // LIGHT
    if (string === 'light') {
      const lightColorOpacity = lightColor?.substring(0, lightColor.length -1) + ', 0.5)'
      const colorOpacity = darknesColor?.substring(0, darknesColor.length -1) + ', 0.3)'
      return {
        background: isHover&&!isLoading&&!disabled ?lightColorOpacity :colorOpacity, 
        border: 'none', 
        color: originialColor
      }
    }

    // LINE
    if (string === 'line') {
      const lightColorOpacity = originialColor?.substring(0, originialColor.length -1) + ', 0.4)'
      return {
        background: isHover&&!isLoading&&!disabled ?lightColorOpacity :'transparent', 
        border: `solid 2px ${originialColor}`, 
        color: originialColor
      }
    }
    
    // SUBTLE
    if (string === 'subtle') {
      const lightColorOpacity = originialColor?.substring(0, originialColor.length -1) + ', 0.2)'
      return {
        background: isHover&&!isLoading&&!disabled ?lightColorOpacity :'transparent', 
        border: `none`, 
        color: originialColor
      }
    }

    // DASH
    if (string === 'dash') {
      return {
        background: isHover&&!isLoading&&!disabled ?darknesColor :originialColor, 
        border: 'none', 
        color: isLightColor ?'rgb(14, 14, 1)' :'rgb(236, 236, 236)'
      }
    }
  }

  useEffect(() => {
    if (color) {
      const {originalColor, lightColor, darkestColor, isLightColor} = setColor(color)
      setLightColor(lightColor)
      setDarknesColor(darkestColor)
      setIsLightColor(isLightColor)
      setOriginalColor(originalColor)
    }
  }, [color])

  return (
    <div className={styles.buttonContainer} onMouseEnter={() => setIsHover(true)} onMouseLeave={() => setIsHover(false)}>
      <button 
      className={elements} 
      style={setStyles()} 
      disabled={disabled || isLoading}
      >
        <>
        {
          isLoading
           ? <svg className={styles.loaderIcon} width="200px" height="200px" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid" ><circle cx="50" cy="50" fill="none" stroke="#85a2b6" strokeWidth="12" r="35" strokeDasharray="164.93361431346415 56.97787143782138" transform="matrix(1,0,0,1,0,0)" /></svg>
           : ''
        }
        {children}
        </>
      </button>
    </div>
  )
}

export {Button}