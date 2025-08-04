

function Button({ styles, text, handler }) {
  return (
    <button className={styles} onClick={handler}>{text}</button>
  )
}

export default Button;