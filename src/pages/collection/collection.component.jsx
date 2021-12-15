import React from "react";
import './collection.styles.scss'
import CollectionItem from '../../components/collection-item/collection-item.component'
import { useParams } from "react-router";
import { useSelector } from "react-redux";
import { selectedCollection, selectCollections } from "../../redux/shop/shop.selector";


const Collection = () => {
    let { categoryId } = useParams();
    const collection = useSelector(selectedCollection(categoryId));
    const { title, items} = collection;
    return (
    <div className='collection-page'>
        <h2 className='title'> {title} </h2>
        <div className='items'>
            {
                items.map( item => (
                    <CollectionItem key={item.id} item={item} />
                ))
            }
        </div>
    </div>
)}


export default Collection;