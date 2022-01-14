import React, { useEffect } from "react";
import { Route, Routes } from 'react-router-dom';
import CollectionsOverview from "../../components/collections-overview/collections-overview.component";
import WithSpinner from "../../components/with-spinner/with-spinner.component";
import { fetchCollectionStart } from "../../redux/shop/shop.actions";
import { selectIsCollectionFetching, selectIsCollectionLoaded } from "../../redux/shop/shop.selector"
import Collection from "../collection/collection.component";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

const CollectionWithSpinner = WithSpinner(Collection);
const CollectionOverviewWithSpinner = WithSpinner(CollectionsOverview);

const ShopPage = () => {

  const isFetching = useSelector(selectIsCollectionFetching);
  const isCollectionLoaded = useSelector(selectIsCollectionLoaded);
  useEffect( ()=> {
    if (!isFetching && !isCollectionLoaded)
    {
      dispatch(fetchCollectionStart());
    } 
  });
  const dispatch = useDispatch();
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

export default ShopPage;