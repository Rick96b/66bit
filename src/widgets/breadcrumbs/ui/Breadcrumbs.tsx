import { Breadcrumbs, useMediaQuery } from '@mui/material';
import React from 'react'
import { Link, useLocation } from 'react-router-dom';
import classNames from 'classnames';

import chevron_right from './assets/chevron_right.png'
import styles from './Breadcrumbs.module.scss'
import { laptop } from 'shared/utils/breakpoints';


interface BreadcrumbsProps {
    pageName?: string
}

const BreadcrumbsWidget:React.FC<BreadcrumbsProps> = props => {
    const {
        pageName
    } = props

    const location = useLocation()
    const pathnames = location.pathname.split('/').filter((x) => x);
    const isLaptop = useMediaQuery(`(min-width: ${laptop}px)`)

    return (
        <Breadcrumbs 
            className={classNames(styles.breadcrumbs, 'container')}
            separator={<img src={chevron_right} alt='' />}
            aria-label="breadcrumb"
            sx={{
                '.MuiBreadcrumbs-separator': {
                    marginLeft: (isLaptop && '16px !important') || '12px !important',
                    marginRight: (isLaptop && '16px !important') || '12px !important'
                }
            }}
        >
            <span>Главная</span>
            {pathnames.length ? 
            <Link to='/' style={{color: 'inherit'}}>Список сотрудников</Link>
            :
            <span>Список сотрудников</span>
            }
            {pathnames.map((path, index) => {
                const last = index === pathnames.length - 1;
                return last ? (
                    <p key={index}>{pageName || path}</p>
                ) : 
                <Link to={path} key={index}>{path}</Link>
            })}
        </Breadcrumbs>
    )
}

export default BreadcrumbsWidget;