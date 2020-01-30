import React from 'react';
import { connect } from 'react-redux';

import CollectionItem from '../../components/collection-item/colection-item.component';

import { selectCollection } from '../../redux/shop/shop.selector';

import { CollectionPageContainer, TitleContainer, ItemsContainer } from './collection.styles';

const Collection = ({ collection }) => {
    const { title, items } = collection;
    return (
        <CollectionPageContainer>
            <TitleContainer>{title}</TitleContainer>
            <ItemsContainer>
                {
                    items.map(item =>
                        <CollectionItem key={item.id} item={item} />
                    )
                }
            </ItemsContainer>
        </CollectionPageContainer>
    )
};

const mapToStateProps = (state, ownProps) => ({
    collection: selectCollection(ownProps.match.params.collectionId)(state)
});

export default connect(mapToStateProps)(Collection);