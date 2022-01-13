import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Route, Routes } from 'react-router-dom';
import CollectionsOverview from "../../components/collections-overview/collections-overview.component";
import WithSpinner from "../../components/with-spinner/with-spinner.component";
import { fetchCollectionStart } from "../../redux/shop/shop.actions";
import { selectIsCollectionFetching, selectIsCollectionLoaded } from "../../redux/shop/shop.selector"
import Collection from "../collection/collection.component";
import { createStructuredSelector } from "reselect";

const CollectionWithSpinner = WithSpinner(Collection);
const CollectionOverviewWithSpinner = WithSpinner(CollectionsOverview);

const ShopPage = ({fetchCollectionStart,isFetching, isCollectionLoaded}) => {

  useEffect( ()=> {
    if (!isFetching && !isCollectionLoaded)
    {
      fetchCollectionStart();
    } 
  });

  const loading = isFetching || !isCollectionLoaded;
  return ( 
    <div className='shop-page'> 
    <Routes>
      <Route path="/" element={<CollectionOverviewWithSpinner isLoading={loading} props />} />
      <Route path=":categoryId" element={<CollectionWithSpinner isLoading={loading} props />} />
    </Routes>
    </div>
  )
};

const mapStateToProps = createStructuredSelector({
  isFetching: selectIsCollectionFetching,
  isCollectionLoaded: selectIsCollectionLoaded
}

)

const mapDispatchToProps = dispatch => ({
  fetchCollectionStart: () => dispatch(fetchCollectionStart())
})

export default connect(mapStateToProps, mapDispatchToProps)(ShopPage);