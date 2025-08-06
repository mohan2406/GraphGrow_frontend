'use client'

function Button({ styles, text, handler }) {
  return (
    <button className={`${styles} cursor-pointer`} onClick={handler}>{text}</button>
  )
}

export default Button;