import React from 'react'

import styles from './Header.module.scss'
import ThemeSwitch from './switch/Switch'
import classNames from 'classnames'

const Header = () => {
  return (
    <header className={classNames(styles.header, 'container')}>
        <img src='img/logo.png' />
        <div className={styles.contactsContainer}>
            <p>+7 343 290 84 76</p>
            <p>info@66bit.ru</p>
        </div>
        <ThemeSwitch />
    </header>
  )
}

export default Header