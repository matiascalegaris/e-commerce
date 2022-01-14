import React from "react";
import './collections-overview.styles.scss'
import CollectionPreview from "../collection-preview/collection-preview.component";
import { selectCollectionsForPreview } from "../../redux/shop/shop.selector";
import { useSelector } from "react-redux";

const CollectionsOverview = () => {
  const collections = useSelector(selectCollectionsForPreview)
  return (
    <div className='collections-overview'>
        {collections.map( ({id, ...collection}) => (
            <CollectionPreview key={id} {...collection} />    
         ))
        }
    </div>
)};

export default CollectionsOverview;