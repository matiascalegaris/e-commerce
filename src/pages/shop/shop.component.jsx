import React from "react";
import CollectionPreview from "../../components/collection-preview/collection-preview.component.jsx";
import SHOP_DATA from './ShoppingData.js'

export class ShopPage extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      collections : SHOP_DATA
    };
  }

  render() {
    const {collections} = this.state;
    return ( 
    <div className='shop-page'> 
    {
      collections.map( ({id, ...collection}) => (
        <CollectionPreview key={id} {...collection} />    
      ))
    }
    </div>
    );
  }
}