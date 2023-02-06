import React from 'react'
import { Link } from 'react-router-dom'
import AllProducts from '../../components/productComponents/all/AllProducts'


const Product = () => {
  return (
    <div className='products'>
        <div className="container">
            <div className="products_main">
                <div className="products_main_title">
                    <h1 className="products_main_text">
                        Oxirgi Maxsulotlarimiz
                    </h1>
                    <div className="products_main_category">
                        <Link to='all-products'>
                            <p className="products_main_category_text">Hammasi</p>
                        </Link>
                    </div>
                    <AllProducts />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Product