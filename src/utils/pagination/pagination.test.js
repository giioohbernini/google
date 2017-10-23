'use strict'

import { expect } from 'chai'
import pagination from './index'

test('pagination should be a function', () => {
  expect(pagination).to.be.a('function')
})

test('pagination() should return []', () => {
  const result = []
  expect(pagination()).to.be.deep.equal(result)
})

test('pagination({ total: 0 }) should return []', () => {
  const params = { total: 0 }
  const result = []
  expect(pagination(params)).to.be.deep.equal(result)
})

test('pagination({ total: 1 }) should return []', () => {
  const params = { total: 1 }
  const result = []
  expect(pagination(params)).to.be.deep.equal(result)
})

test('pagination({ total: 2 }) should return [1, 2]', () => {
  const params = { total: 2 }
  const result = [1, 2]
  expect(pagination(params)).to.be.deep.equal(result)
})

test('pagination({ total: 2 }) should return [1, 2, 3]', () => {
  const params = { total: 3 }
  const result = [1, 2, 3]
  expect(pagination(params)).to.be.deep.equal(result)
})

test('pagination({ total: 10 }) should return [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]', () => {
  const params = { total: 10 }
  const result = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
  expect(pagination(params)).to.be.deep.equal(result)
})

test('pagination({ total: 11 }) should return [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]', () => {
  const params = { total: 11 }
  const result = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
  expect(pagination(params)).to.be.deep.equal(result)
})

test('pagination({ total: 12, activePage: 6 }) should return [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]', () => {
  const params = { total: 12, activePage: 6 }
  const result = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
  expect(pagination(params)).to.be.deep.equal(result)
})

test('pagination({ total: 12, activePage: 7 }) should return [2, 3, 4, 5, 6, 7, 8, 9, 10, 11]', () => {
  const params = { total: 12, activePage: 7 }
  const result = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11]
  expect(pagination(params)).to.be.deep.equal(result)
})

test('pagination({ total: 12, activePage: 8 }) should return [3, 4, 5, 6, 7, 8, 9, 10, 11, 12]', () => {
  const params = { total: 12, activePage: 8 }
  const result = [3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
  expect(pagination(params)).to.be.deep.equal(result)
})

test('pagination({ total: 12, activePage: 9 }) should return [3, 4, 5, 6, 7, 8, 9, 10, 11, 12]', () => {
  const params = { total: 12, activePage: 9 }
  const result = [3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
  expect(pagination(params)).to.be.deep.equal(result)
})

test('pagination({ total: 12, activePage: 12 }) should return [3, 4, 5, 6, 7, 8, 9, 10, 11, 12]', () => {
  const params = { total: 12, activePage: 12 }
  const result = [3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
  expect(pagination(params)).to.be.deep.equal(result)
})

test('pagination({ total: 20, activePage: 10 }) should return [5, 6, 7, 8, 9, 10, 11, 12, 13, 14]', () => {
  const params = { total: 20, activePage: 10 }
  const result = [5, 6, 7, 8, 9, 10, 11, 12, 13, 14]
  expect(pagination(params)).to.be.deep.equal(result)
})

test('pagination({ total: 20, activePage: 20 }) should return [11, 12, 13, 14, 15, 16, 17, 18, 19, 20]', () => {
  const params = { total: 20, activePage: 20 }
  const result = [11, 12, 13, 14, 15, 16, 17, 18, 19, 20]
  expect(pagination(params)).to.be.deep.equal(result)
})
