'use strict'

import { storiesOf } from '@storybook/react'
import React from 'react'
import Pagination from './index'

const stories = storiesOf('Pagination Desktop', module)

stories.add('without props', () => (
  <Pagination total={1} pageLink='/page/%page%/' onClick={(page) => {
    window.alert(page)
  }} />

))

stories.add('total 20 and activePage 1', () => (
  <Pagination activePage={1} total={20} pageLink='/page/%page%/' onClick={(page) => {
    window.alert(page)
  }} />
))

stories.add('total 20 and activePage 6', () => (
  <Pagination activePage={6} total={20} pageLink='/page/%page%/' onClick={(page) => {
    window.alert(page)
  }} />
))

stories.add('total 20 and activePage 7', () => (
  <Pagination activePage={7} total={20} pageLink='/page/%page%/' onClick={(page) => {
    window.alert(page)
  }} />
))
