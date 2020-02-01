import React from 'react';
import '../../App.css';
import style from './style.module.css';

let state = {
   noteData:  [
      {id: 0, nickname: "Стол", maker: "Россия", title: 'Стол', weight: "31"},
      {id: 1, nickname: "Стул", maker: "США", title: 'Стул', weight: "12312"},
      {id: 2, nickname: "Ложка", maker: "Канада", title: 'Ложка', weight: "3123"},
      {id: 3, nickname: "Вилка", maker: "Киргизия", title: 'Вилка', weight: "435"},
      {id: 4, nickname: "Шкаф", maker: "Япония", title: 'Шкаф', weight: "257"},
      {id: 5, nickname: "Нож", maker: "Италия", title: 'Нож', weight: "834"},
      {id: 6, nickname: "Верстак", maker: "Великобритания", title: 'Верстак', weight: "342423"},
      {id: 7, nickname: "Розетка", maker: "Нидерланды", title: 'Розетка', weight: "4545543543354"},
  ],
 
};

const Search_item = (props) => {
    return (
      <div class="product-item col-sm-6 col-md-4">
         <img src="./photo.jpg">
         <div class="product-list">
            <h3>{props.title}</h3>
            <span class="price">{props.maker}</span></span>
            <span class="price">{props.nickname}</span></span>
            <span class="price">{props.weight}</span></span>
            <a href="" class="button">bla</a>
         </div>
      </div>
    )
}  

export default Search_item;