import React, { Component } from 'react';
import logo from '../../logo.svg';


const MainPage = () => (
    <div>
        <h1>Добро пожаловать в наше приложение!</h1>

        <span className="App-logo-box">I love <img src={logo} className="App-logo" alt="React" title="React" />.js</span>
        <p>Здесь можно посмотреть список задач и пользователей с сервера, а так же, добавить или удалить задачу!</p>

    </div>
);

export default MainPage;
