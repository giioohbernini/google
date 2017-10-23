'use strict'

import React from 'react'
import pagination from 'utils/pagination'

import './googlenav.sass'

const hasLink = callback => callback ? 'span' : 'a'

const Helper = ({ total, activePage, onClick, pageLink, children, type }) => {
  const Target = type === 'first' ? activePage - 1 : activePage + 1

  children = type === 'first'
    ? activePage > 1
      ? children
      : ''
    : activePage < total
      ? children
      : ''

  const Component = hasLink(children === '')

  return (
    <li key={type} className={`navitem -${type}`}>
      <Component className='link' href={pageLink.replace('%page%', Target)} onClick={Component === 'a' ? onClick : ''}>
        <span className={`spacer -${type}`}>{children}</span>
      </Component>
    </li>
  )
}

const Pagination = ({ total, activePage, pageLink, onClick }) => {
  if (total <= 1) return null

  const handleClick = (e, page) => {
    e.preventDefault()
    onClick(page)
  }

  return (
    <ul className='nav-content'>
      <Helper
        activePage={activePage}
        onClick={(e) => handleClick(e, activePage - 1)}
        pageLink={pageLink}
        total={total}
        type='first'
      >Anterior</Helper>

      {pagination({ total, activePage }).map((page, index) => {
        let Component = hasLink(page === activePage)

        return (
          <li className={`navitem ${page === activePage ? '-selected' : ''}`} key={index}>
            <Component className='link' href={pageLink.replace('%page%', page)} onClick={(e) => handleClick(e, page)}>{page}</Component>
          </li>
        )
      })}

      <Helper
        activePage={activePage}
        onClick={(e) => handleClick(e, activePage + 1)}
        pageLink={pageLink}
        total={total}
        type='last'
      >Mais</Helper>
    </ul>
  )
}

export default Pagination
