import React from 'react';
import ReactDOM from 'react-dom';
import AccountModal from './components/AccountModal';

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<AccountModal />, div);
});
