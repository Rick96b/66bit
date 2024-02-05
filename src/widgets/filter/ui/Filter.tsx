import { TextField } from '@material-ui/core'
import React from 'react'

import styles from './Filter.module.scss'

const Filter = () => {
  return (
    <section>
        <div className={styles.filterHeader}>
            <h2>Список сотрудников</h2>
        </div>
        <TextField />
    </section>
  )
}

export default Filter