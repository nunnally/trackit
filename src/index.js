import React from 'react';
import ReactDOM from 'react-dom';
import Row from './components/UI/Row'


const App = () => {
    return (
        <Row>Teste</Row>
    );
}

ReactDOM.render(
    <App/>,
    document.querySelector('.root')
);