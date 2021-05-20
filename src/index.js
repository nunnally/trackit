import React from 'react';
import ReactDOM from 'react-dom';
import Row from './components/UI/Row'


const App = () => {
    return (
        <Row center>Teste</Row>
    );
}

ReactDOM.render(
    <App/>,
    document.querySelector('.root')
);