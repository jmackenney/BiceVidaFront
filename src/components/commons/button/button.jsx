import './button.scss'
import React from 'react'
import PropTypes from 'prop-types'

const Button = ({ children, className, onClick }) => {
  return (
    <button className={className} onClick={onClick} data-testid="button">
      {children}
    </button>
  )
}

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
  children: PropTypes.string.isRequired,
}

export default Button
