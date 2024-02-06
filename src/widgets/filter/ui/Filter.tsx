import { SelectChangeEvent, TextField, styled } from '@mui/material'
import React, { useState } from 'react'

import styles from './Filter.module.scss'
import SelectedFilters from './selected-filters/SelectedFilters'
import { FilterSelect } from './select/FilterSelect'

const positionsList = [
  'Frontend-разработчик',
  'Backend-разработчик',
  'Аналитик',
  'Менеджер',
  'Дизайнер',
  'Fullstack'
]

const genderList = [
  'Мужчина',
  'Женщина'
]

const stackList = [
  'CSharp', 
  'React', 
  'Java', 
  'PHP', 
  'Figma', 
  'Word'
]

const FilterTextField = styled(TextField)({
  color: '#292929',
  width: '100%',
  height: '43px',
  '& .MuiInputBase-input': {
    padding: '10px'
  }
})

const Filter = () => {
  const [positions, setPositions] = useState<string[]>([])
  const [gender, setGender] = useState('')
  const [name, setName] = useState('')
  const [stack, setStack] = useState<string[]>([])

  const handleChangePositions = (event: SelectChangeEvent<string[]>) => {
    const {
      target: { value },
    } = event;
    setPositions(
      typeof value === 'string' ? value.split(',') : value,
    );
  }

  const handleChangeGender = (event: SelectChangeEvent<string>) => {
    const {
      target: { value },
    } = event;
    setGender(value);
  }

  const handleChangeStack = (event: SelectChangeEvent<string[]>) => {
    const {
      target: { value },
    } = event;
    setStack(
      typeof value === 'string' ? value.split(',') : value,
    );
  }

  const handleRemoveFilter = (filterName: string) => {
    if(filterName === gender) setGender('')
    if(positions.includes(filterName)) setPositions((prevList) => prevList.filter(item => item !== filterName))
    if(stack.includes(filterName)) setStack((prevList) => prevList.filter(item => item !== filterName))
  }

  return (
    <section className={styles.filter}>
        <div className={'container'}>
          <div className={styles.filterHeader}>
              <h2>Список сотрудников</h2>
              <div className={styles.filterSelectsContainer}>
                <FilterSelect 
                  renderValue='Должность'
                  menuItems={positionsList}
                  isMultiple
                  onChange={handleChangePositions}
                  value={positions}
                />
                <FilterSelect 
                   renderValue='Пол'
                   menuItems={genderList}
                   onChange={handleChangeGender}
                   value={gender}
                />
                <FilterSelect 
                  renderValue='Стек технологий'
                  onChange={handleChangeStack}
                  menuItems={stackList}
                  isMultiple
                  value={stack}
                />
              </div>
          </div>
          <FilterTextField 
            placeholder='Поиск'
            value={name}
            onChange={(event) => setName(event.target.value)}
          />
        </div>
        <div className={styles.selectedFiltersContainer}>
          <SelectedFilters 
            selectedFilters={[...positions, gender, ...stack]}
            removeFilter={handleRemoveFilter}
          />
        </div>
    </section>
  )
}

export default Filter