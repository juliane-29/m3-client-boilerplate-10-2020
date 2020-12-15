import React from 'react'
import Teaser from './../components/Teaser/Teaser';
import Category from './../components/Category/Category';
import ShopList from '../components/ShopList/ShopList';
import SearchResults from '../components/SearchResults/SearchResults';
import NewIn from '../components/NewIn/NewIn';

function Home() {
  return (
    <div> 
      <SearchResults/>
      <Teaser image="/splash_screen_image.png" opacity="0.9" title="Streetstyle" subtitle="Shop the new in products" />
      <h5>Categories</h5>
      <Category />
      <h5>New in</h5>
      <NewIn />
      <Teaser image="https://res.cloudinary.com/daj2fsogl/image/upload/v1608063056/teaser_1_to7ijf.png" title="Shop" subtitle="Check out the newest shops" color="black" opacity="0.8" fontSizeh1="40px"/>
      <h5>Discover all the shops</h5>
      <ShopList />
    </div>
  )
}

export default Home;