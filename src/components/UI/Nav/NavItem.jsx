import React from 'react'
import PropTypes from 'prop-types'

const NavItem = ({
  children,
  className = '',
  brand = false,
  brandIcon = null,
  iconClasses = '',
  ...props
}) => {
  const BrandIcon = brandIcon

  const getNavItemClasses = (defaultClass) => {
    let classes = defaultClass

    if (brand) {
      classes +=
        ' h-10 w-10 flex items-center justify-center rounded-full bg-primary-900 text-white p-2 mx-2'
    } else {
      classes +=
        ' flex items-center justify-center text-neutral-800 mx-2 text-lg p-2'
    }

    return classes
  }

  const getIconClasses = (defaultClass) => {
    let classes = defaultClass

    classes += ' fill-current w-full h-full '

    return classes
  }

  return (
    <span className={getNavItemClasses(className)} {...props}>
      {brandIcon ? (
        <BrandIcon className={getIconClasses(iconClasses)}  />
      ) : (
        children
      )}
    </span>
  )
}

NavItem.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  brand: PropTypes.bool,
  brandIcon: PropTypes.any,
  iconClasses: PropTypes.string
}

export default NavItem
