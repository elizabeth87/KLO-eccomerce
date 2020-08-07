import React, { Component } from 'react';
import Product from './Product';
import Title from './Title';
//import {storeProducts} from '../data';
import { ProductConsumer } from '../context'

class ProductList extends Component {
    // state={
    //     //products: [],
    //     products: storeProducts
    // };
    // componentDidMount() {
    //     this.setProducts();
    // }
    // setProducts = () => {
    //     let products = [];
    //     storeProducts.forEach(item=>{
    //         const singleItem = {...item}
    //         products = [...products, singleItem]
    //     })
    // }
    render() {
        return (
            <React.Fragment>
                <div className="py-5">
                    <div className="container">
                      <Title name="sweets of the " title=" month" />  
                                            
                      <div className="row">
                          <ProductConsumer>
                              {value => {
                                  return value.products.map(product => {
                                      return <Product key={product.id}product={product} />
                                  })
                              }}
                          </ProductConsumer>
                     </div>
                    </div>
                </div>
            </React.Fragment>

        )
    }

}

export default ProductList;