import React from 'react'

import styles from './SelectedFilters.module.scss'
import cancel from './assets/cancel.png'
import classNames from 'classnames'

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
        <div className={styles.selectedFilters}> 
            <span className={styles.selectedFiltersTitle}>Выбранные фильтры:</span>
            <div className={styles.selectedFiltersContainer}>
                {selectedFilters.map(selectedFilterName => selectedFilterName &&
                    <span className={styles.filterCard}>
                        <button className={styles.cancelButton} onClick={() => removeFilter(selectedFilterName)}>
                            <img src={cancel} alt='cancel'/>
                        </button>
                        {selectedFilterName}
                    </span>
                )}
            </div>
        </div>
    )
}

export default SelectedFilters