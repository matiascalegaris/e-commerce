import React from "react";
import { connect } from "react-redux";
import { Route, Routes } from 'react-router-dom';
import CollectionsOverview from "../../components/collections-overview/collections-overview.component";
import WithSpinner from "../../components/with-spinner/with-spinner.component";
import { convertCollectionSnapshotToMap, firestore } from "../../firebase/firebase.utils";
import { updateCollection } from "../../redux/shop/shop.actions";
import Collection from "../collection/collection.component";

const CollectionWithSpinner = WithSpinner(Collection);
const CollectionOverviewWithSpinner = WithSpinner(CollectionsOverview);

class ShopPage extends React.Component {
  state = {
    loading: true
  };

  unsubscribeFromSnapshot = null;

  componentDidMount() {
    const collectionRef = firestore.collection('collections');
    const { updateCollection } = this.props;
    this.unsubscribeFromSnapshot = collectionRef.onSnapshot( async snapshot => {
      const collections = convertCollectionSnapshotToMap(snapshot);
      updateCollection(collections);
      this.setState( {loading: false});
    });
  };

  render() {
    const { loading} = this.state;
    return ( 
      <div className='shop-page'> 
      <Routes>
        <Route path="/" element={<CollectionOverviewWithSpinner isLoading={loading} props />} />
        <Route path=":categoryId" element={<CollectionWithSpinner isLoading={loading} props />} />
      </Routes>
      </div>
    )
  }
};

const mapDispatchToProps = dispatch => ({
  updateCollection: collection => dispatch(updateCollection(collection))
})

export default connect(null, mapDispatchToProps)(ShopPage);