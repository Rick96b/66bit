import { CircularProgress } from '@mui/material'
import React from 'react'

const Loader = () => {
  return (
    <div style={{
        width: '100%',
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    }}>
        <CircularProgress sx={{color: '#155DA4'}} />
    </div>
  )
}

export default Loader