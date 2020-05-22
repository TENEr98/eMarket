import React from 'react'
import PropTypes from 'prop-types'

const Nav = ({ children, className = '', ...props }) => {
  const getNavClasses = (defaultClass) => {
    let classes = defaultClass

    classes += ' h-16 w-9/12 flex items-center bg-white '

    return classes
  }

  return (
    <div className={getNavClasses(className)} {...props}>
      {children}
    </div>
  )
}

Nav.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string
}

export default Nav
