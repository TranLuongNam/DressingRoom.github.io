import React, { Component } from 'react'
import HeaderComponent from '../../Layout/Header/header'
import FooterComponent from '../../Layout/Footer/footer'
import CategoriesComponent from '../../Components/Categories/categories'
import ProductsComponent from '../../Components/Products/products'
import ModelComponent from '../../Components/Model/model'

class HomeScreen extends Component {
    render() {
        return (
            <div>
                <HeaderComponent />
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-6">
                            <CategoriesComponent />
                            <ProductsComponent />
                        </div>
                        <div className="col-6">
                            <ModelComponent />
                        </div>
                    </div>
                </div>
                <FooterComponent />
            </div>
        )
    }
}
export default HomeScreen;