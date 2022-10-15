import React, { useState } from 'react';
import ReactDOM from 'react-dom';

class ToggleButton extends React.Component {
    constructor(props) {
        super(props);
        this.buttonClick = this.buttonClick.bind(this);
        this.state = { isOff: false };
    }

    buttonClick() {
        this.setState({ isOff: !this.state.isOff });
    }

    render() {
        const { isOff } = this.state;
        let buttonText = this.state.isOff ? "ON" : "OFF";
        return (
            <button onClick={this.buttonClick}>{buttonText}</button>
        );
    }
}

// // ReactDOM.render(
// //     <ToggleButton />,
// //     document.getElementById('root')
// // );

// import React, { useState } from 'react';
// import ReactDOM from 'react-dom';

// const buttonToggle = () => {
//     const [isOff, setIsOff] = useState(true);

//     return (
//         <button onClick={() => setIsOff(!isOff)}>{isOff ? 'ON' : 'OFF'}</button>
//     );
// }

// // ReactDOM.render(
// //     <buttonToggle />,
// //     document.getElementById('root')
// );