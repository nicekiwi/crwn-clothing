import React from 'react';
import { connect } from 'react-redux';

import CollectionItem from '../../components/collection-item/colection-item.component';

import { selectCollection } from '../../redux/shop/shop.selector';

import './collection.styles.scss';

const Collection = ({ collection }) => {
    const { title, items } = collection;
    return (
        <div className='collection-page'>
            <h2 className='title'>{title}</h2>
            <div className='items'>
                {
                    items.map(item =>
                        <CollectionItem key={item.id} item={item} />
                    )
                }
            </div>
        </div>
    )
};

const mapToStateProps = (state, ownProps) => ({
    collection: selectCollection(ownProps.match.params.collectionId)(state)
});

export default connect(mapToStateProps)(Collection);