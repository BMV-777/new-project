// import React from 'react';
import ReactDom from 'react-dom';
import App from './App';

// const element = React.createElement('div', {
//   a: 5,
//   b: 10,
//   children: 'Hello Mir',
// });
// console.log(pointer);

// const data = {
//   id: 'id-1',
//   url: 'https://www.iphones.ru/wp-content/uploads/2021/09/%D0%A1%D0%BD%D0%B8%D0%BC%D0%BE%D0%BA-%D1%8D%D0%BA%D1%80%D0%B0%D0%BD%D0%B0-2021-09-07-%D0%B2-19.48.05.jpg',
//   title: 'Feathers. Art abstract',
//   price: 500,
//   author: {
//     tag: 'ractapopulous',
//     url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4FKUBzoq95T3boJnHhgLL3lVTCAfVEMb26lGAcTMn&s',
//   },
//   quantity: 10,
// };

// const pointer = (
//   <div>
//     <img src={data.url} alt={data.title} width="480" />
//     <h2>{data.title}</h2>
//     <p>
//       Автар: <a href={data.author.url}>{data.author.tag}</a>
//     </p>
//     <p>Цена: {data.price} крредитов</p>
//     <p>Доступность: {data.quantity} заканчивается или есть в наличии</p>
//     <button type="button">Добавить в карзину</button>
//   </div>
// );

// const point = pointer[1];

// ReactDom.render(
//   <Pointer
//     url={point.url}
//     title={point.title}
//     authorName={point.author.tag}
//     profileUrl={point.author.url}
//     price={point.price}
//   />,
//   document.querySelector('#root')
// );

ReactDom.render(<App />, document.querySelector('#root'));
// const root = ReactDom.createRoot(<App />, document.querySelector('#root'));
// root.render(<App />);
// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
