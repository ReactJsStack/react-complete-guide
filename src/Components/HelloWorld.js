import React from 'react';
const HelloWorld = (props) => {
    return (
        <div>
            <h1>Hello <b>{props.name}</b></h1>
        </div>
    );
}

export default HelloWorld;