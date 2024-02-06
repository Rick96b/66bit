import { Button, SelectChangeEvent, TextField, styled } from '@mui/material'
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

interface FilterProps {
  changeFilters?: Function
}

const Filter:React.FC<FilterProps> = props => {
  const {
    changeFilters = () => {}
  } = props

  const [position, setPositions] = useState('')
  const [gender, setGender] = useState('')
  const [name, setName] = useState('')
  const [stack, setStack] = useState<string[]>([])

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
    if(position.includes(filterName)) setPositions('')
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
                  onChange={(event) => setPositions(event.target.value)}
                  value={position}
                />
                <FilterSelect 
                   renderValue='Пол'
                   menuItems={genderList}
                   onChange={(event) => setGender(event.target.value)}
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
          <div className='container'>
            <SelectedFilters 
              selectedFilters={[position, gender, ...stack]}
              removeFilter={handleRemoveFilter}
            />
            <Button
              className={styles.submitButton}
              onClick={() => changeFilters({
                gender: gender,
                name: name,
                position: position,
                stack: stack
              })}
            >
              Найти
            </Button>
          </div>
        </div>
    </section>
  )
}

export default Filter