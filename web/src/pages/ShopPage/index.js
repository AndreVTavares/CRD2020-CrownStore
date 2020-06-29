import React, { useState, useEffect } from 'react';

import SHOP_DATA from './shop.data';

import CollectionPreview from '../../components/Collection-preview';

const ShopPage = () => {

    const [colletions, setColletions] = useState([]);

    useEffect(() => {

        setColletions(SHOP_DATA);

    }, [])

    return (
        <div className='shop-page'>
            {colletions.map(({id, ...otherCollectionProps}) => (
                <CollectionPreview key={id} {...otherCollectionProps}/>
            ))}
        </div>
    )
    
}

export default ShopPage;