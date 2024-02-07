import React, { useContext, useState } from 'react'
import { Switch, styled, useMediaQuery } from '@mui/material';

import DarkThemeIcon from './assets/dark.png'
import LightThemeIcon from './assets/light.png'
import DarkThemeIconMini from './assets/darkMini.png'
import LightThemeIconMini from './assets/lightMini.png'
import { laptop } from 'shared/utils/breakpoints';
import { ThemeContext } from 'shared/theme/themeContext';

const MuiSwitch = styled(Switch)({
  display: 'flex',
  alignItems: 'center',
  width: 47,
  height: 22,
  padding: 0,
  '& .MuiSwitch-switchBase': {
    padding: '2px !important',
    '&.Mui-checked': {
      transform: 'translateX(26px)',
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
  const {setTheme, theme} = useContext(ThemeContext)
  const [checked, setChecked] = useState(false)
  const isLaptop = useMediaQuery(`(min-width: ${laptop}px)`)

  return (
    <MuiSwitch 
        checked={theme === 'light' ? false : true}
        onChange={() => setTheme(theme === 'light' ? 'dark' : 'light')}
        icon={<img src={isLaptop ? LightThemeIcon : LightThemeIconMini} />}
        checkedIcon={<img src={isLaptop ? DarkThemeIcon : DarkThemeIconMini} />}
        color='primary'
        sx={isLaptop ? {
          width: 55,
          height: 26,
          '& .MuiSwitch-switchBase': {
            padding: '3px !important',
            '&.Mui-checked': {
              transform: 'translateX(29px)',
            },
          },
        } : {}}
    />
  )
}

export default ThemeSwitch;