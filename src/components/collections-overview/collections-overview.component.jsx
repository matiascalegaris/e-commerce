import React from "react";
import { connect } from "react-redux";
import './collections-overview.styles.scss'
import CollectionPreview from "../collection-preview/collection-preview.component";
import { selectCollectionsForPreview } from "../../redux/shop/shop.selector";
import { createStructuredSelector } from 'reselect';

const CollectionsOverview = ({collections}) => (
    <div className='collections-overview'>
        {collections.map( ({id, ...collection}) => (
            <CollectionPreview key={id} {...collection} />    
         ))
        }
    </div>
);

const mapStateToProps = createStructuredSelector({
    collections: selectCollectionsForPreview
});

export default connect(mapStateToProps)(CollectionsOverview);