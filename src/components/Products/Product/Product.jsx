import React, { useContext, useEffect } from 'react'
import { FirebaseContext } from '../../../context/firebase/firebaseContext'
import { SpinnerLoader } from 'UI/SpinnerLoader'
const Product = () => {
  const { loading, products, fetchProducts } = useContext(FirebaseContext)
  useEffect(() => {
    fetchProducts()
  }, [])
  return <>{loading ? <SpinnerLoader /> : <p>{products}</p>}</>
}
export default Product
