import React, { useState } from 'react'
import { Switch, styled } from '@mui/material';

import DarkThemeIcon from './assets/dark.png'
import LightThemeIcon from './assets/light.png'

const MuiSwitch = styled(Switch)({
  display: 'flex',
  alignItems: 'center',
  width: 55,
  height: 26,
  padding: 0,
  '& .MuiSwitch-switchBase': {
    padding: '3px !important',
    '&.Mui-checked': {
      transform: 'translateX(29px)',
      '& + .MuiSwitch-track': {
        backgroundColor: '#155DA4',
        opacity: 1,
        border: 'none',
      },
    },
  },
  '& .MuiSwitch-track': {
    display: 'block',
    borderRadius: '30px',
    opacity: 1,
    backgroundColor: '#155DA4 !important',
    boxShadow: '0px 4px 4px 0px #00000040 inset !important',
  }
});

const ThemeSwitch = () => {
    const [checked, setChecked] = useState(false)
  return (
    <MuiSwitch 
        checked={checked}
        onChange={() => setChecked(!checked)}
        icon={<img src={LightThemeIcon} />}
        checkedIcon={<img src={DarkThemeIcon} />}
        color='primary'
    />
  )
}

export default ThemeSwitch;