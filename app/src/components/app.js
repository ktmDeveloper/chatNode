import React from 'react';

import Messanger from './messager';

export default class App extends React.Component{

    render(){
        return <div className='app-wrapper'>
            <Messanger />
        </div>
    }
}