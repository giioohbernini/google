'use strict'

const pagination = ({ total = 1, activePage = 1 } = {}) => {
  if (total <= 1) return []

  // Array.from retona um array, passando o tamanho total do array e um callback que será executado em um array.map
  const visiblePages = total > 10 ? 10 : total
  let pages = Array.from({ length: visiblePages }, (_, i) => i + 1)

  if (total <= 10) return pages
  let cut = activePage - pages[5]
  if (cut + visiblePages > total) cut = total - visiblePages
  let newPages = Array.from({ length: cut }, (_, i) => i + 1 + pages.length)

  if (cut > 0) {
    pages = [
      ...pages.slice(cut),
      ...newPages
    ]
  }

  return pages
}

export default pagination
