import React, { useState, useEffect } from 'react';

import './styles.scss';

import SECTIONS_DATA from './sections.data';

import MenuItem from '../Menu-Item';

const Directory = () => {

    const [sections, setSections] = useState([]);

    useEffect(() => {
        setSections(SECTIONS_DATA)
    }, [])


    return (
        <div className="directory-menu">
            {sections.map(({ id, ...otherSectionProps}) => (
                <MenuItem key={id} {...otherSectionProps}/>
            ))}
        </div>
    )
}


export default Directory;