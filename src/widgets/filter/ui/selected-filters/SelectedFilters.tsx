import React from 'react'

import styles from './SelectedFilters.module.scss'
import cancel from './assets/cancel.png'
import classNames from 'classnames'
import { Button } from '@mui/material'

interface SelectedFiltersProps {
    selectedFilters: string[]
    removeFilter: (filterName: string) => void
}

const SelectedFilters:React.FC<SelectedFiltersProps> = props => {
    const {
        selectedFilters,
        removeFilter
    } = props

    return (
        <div className={classNames(styles.selectedFilters, 'container')}> 
            <div className={styles.selectedFiltersContainer}>
                <span className={styles.selectedFiltersTitle}>Выбранные фильтры:</span>
                {selectedFilters.map(selectedFilterName => selectedFilterName &&
                    <span className={styles.filterCard}>
                        <button className={styles.cancelButton} onClick={() => removeFilter(selectedFilterName)}>
                            <img src={cancel} alt='cancel'/>
                        </button>
                        {selectedFilterName}
                    </span>
                )}
            </div>
            <Button
                sx={{
                    backgroundColor: '#155DA4',
                    padding: '12px 48px',
                    borderRadius: '8px',
                    color: '#ffffff',
                    fontFamily: 'var(--main-font)',
                    fontSize: '16px',
                    fontWeight: '600',
                    lineHeight: '21px',
                    letterSpacing: '0.02em',
                    textAlign: 'left',
                    '&:hover': {
                        backgroundColor: '#092847',
                    }
                }}
            >
                Найти
            </Button>
        </div>
    )
}

export default SelectedFilters