import React from 'react'
import { Checkbox, ListItemText, MenuItem, Select, styled, SelectChangeEvent } from "@mui/material"

import arrow from './assets/arrow.png'

const StyledSelect = styled(Select)({
    '& .MuiOutlinedInput-notchedOutline': {
      border: 'none !important'
    },
    '& .MuiSelect-select': {
      display: 'flex',
      alignItems: 'center',
      fontFamily: 'var(--main-font)',
      fontSize: '20px',
      fontWeight: '400',
      lineHeight: '23px',
      letterSpacing: '0em',
      textAlign: 'left',
      paddingRight: '8px !important',
      paddingLeft: '0 !important'
    },
    '& .MuiSelect-select[aria-expanded="true"]': {
        color: '#155DA4',
    },
    '& .MuiSelect-select[aria-expanded="true"] ~ img': {
        transform: 'rotate(180deg)',
    },
    '& img': {
        transition: 'all 0.3s'
    }
  })

interface FilterSelectProps {
    menuItems?: string[]
    value?: string[] | string
    renderValue?: string
    onChange?: (event: SelectChangeEvent<any>, child: React.ReactNode) => void
    isMultiple?: boolean
}

export const FilterSelect:React.FC<FilterSelectProps> = props => {
    const {
        menuItems,
        value = [],
        renderValue,
        onChange = () => {},
        isMultiple
    } = props

    return (
        <StyledSelect 
            multiple={isMultiple}
            value={value}
            onChange={onChange}
            displayEmpty
            renderValue={() => <span>{renderValue}</span>}
            IconComponent={() => (
                <img src={arrow} /> 
            )}
        >
            {menuItems?.map(item =>
                <MenuItem key={item} value={item}>
                    { 
                        isMultiple && <Checkbox checked={value.indexOf(item) > -1}/>
                    }
                    <ListItemText primary={item} />
                </MenuItem>
            )}
        </StyledSelect>
    )
}