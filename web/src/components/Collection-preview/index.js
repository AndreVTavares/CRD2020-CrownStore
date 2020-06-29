import React from 'react';
import './styles.scss';

import CollectionItem from '../Collection-item';

const CollectionPreview = ({ title, items }) => {
    
    return (
        <div className='collection-preview'>
            <h1 className='title'>{title.toUpperCase()}</h1>
            <div className="preview">
                {
                    items
                    .filter((item, index) => index < 4)
                    .map(({ id, ...otherCollectionItemProps }) => (
                        <CollectionItem key={id} {...otherCollectionItemProps} />
                    ))
                }
            </div>
        </div>
    )
}

export default CollectionPreview;