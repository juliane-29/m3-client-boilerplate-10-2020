import React from 'react'
import Teaser from './../components/Teaser/Teaser';
import Category from './../components/Category/Category';
import AddProduct from '../components/AddProduct/AddProduct';
import AddShop from './AddShop';
import Searchbar from '../components/Searchbar/Searchbar';
import ShopList from '../components/ShopList/ShopList';
import ListPage from '../components/ListPage/ListPage'


function Home() {
  return (
    <div> 
      <Searchbar/>
      <Teaser image="/splash_screen_image.png" title="Teaser" subtitle="teaser-template" />
      <h4>Categories</h4>
      <Category />
      <h4>New in</h4>
      <ListPage/>
      <Teaser image="https://res.cloudinary.com/daj2fsogl/image/upload/v1607550394/second-hand/Screenshot_2020-12-09_at_22.46.16_web6iw.png" title="Shop" subtitle="Check out the newest shops"/>
      <h4>Discover all the shops</h4>
      <ShopList />
      <AddProduct/>
      <Category />
      <AddShop />
      <Category />
      <Category />
      <Category />



    </div>
  )
}

export default Home;