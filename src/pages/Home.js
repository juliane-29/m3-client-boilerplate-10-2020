import React from 'react'
import Teaser from './../components/Teaser/Teaser';
import Category from './../components/Category/Category';
import EditShop from '../components/EditShop/EditShop';
import Searchbar from '../components/Searchbar/Searchbar';
import ShopList from '../components/ShopList/ShopList';
import ListPage from '../components/ListPage/ListPage';

import styled from "styled-components";

const Heading5 = styled.h5 `
 margin: 15px 25px
`


function Home() {
  return (
    <div> 
      <Searchbar/>
      <Teaser image="/splash_screen_image.png" opacity="0.5" title="Streetstyle" subtitle="Shop the new in products" />
      <Heading5>Categories</Heading5>
      <Category />
      <Heading5>New in</Heading5>
      <ListPage/>
      <Teaser image="https://res.cloudinary.com/daj2fsogl/image/upload/v1607550394/second-hand/Screenshot_2020-12-09_at_22.46.16_web6iw.png" title="Shop" subtitle="Check out the newest shops"/>
      <Heading5>Discover all the shops</Heading5>
      <ShopList />




    </div>
  )
}

export default Home;