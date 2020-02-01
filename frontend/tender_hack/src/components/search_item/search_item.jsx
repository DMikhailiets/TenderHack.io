import React from 'react';
import '../../App.css';
import style from './style.module.css';

const Search_item = (props) => {
    return (
      <div class="product-item col-sm-6 col-md-4">
         <img src="./photo.jpg">
         <div class="product-list">
            <h3>{}</h3>
            <span class="price">{}</span></span>
            <a href="" class="button">{}</a>
         </div>
      </div>
    )
}  

export default Search_item;