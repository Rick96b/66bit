import React from 'react'

import styles from './Header.module.scss'
import ThemeSwitch from './switch/Switch'
import classNames from 'classnames'
import { useMediaQuery } from '@mui/material'
import { laptop } from 'shared/utils/breakpoints'

const Header = () => {
  const isLaptop = useMediaQuery(`(min-width: ${laptop}px)`)

  return (
    <header className={classNames(styles.header, 'container')}>
        <img src={isLaptop ? 'img/logo.png' : 'img/logoMini.png'} />
        <div className={styles.contactsContainer}>
            <p>+7 343 290 84 76</p>
            <p>info@66bit.ru</p>
        </div>
        <ThemeSwitch />
    </header>
  )
}

export default Header