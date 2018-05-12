// higher order componenet (HOC) - A component (HOC) which renders another component (regular component)
// Goal = reuse code
// Render hijacking
// Abstract state

import React from 'react';
import ReactDOM from 'react-dom';

const Info = (props) => (
    <div>
        <h1>Info</h1>
        <p>This info is {props.info}</p>
    </div>
);

const withAdminWarning = (WrapperComponent) => {
    return (props) => (
        <div>
            {props.isAdmin && <p>This is private info. Please do not share.</p>}
            <WrapperComponent {...props}/>
        </div>
    );
};

const requireAuthentication = (WrapperComponent) => {
    return (props) => (
        <div>
            {props.isAuthenticated ? <WrapperComponent {...props}/> : <p>Please log in to view the info</p>}            
        </div>
    )
}

const AdminInfo = withAdminWarning(Info);
const AuthInfo = requireAuthentication(Info);

console.log(AdminInfo);

//ReactDOM.render(<AdminInfo isAdmin={true} info="This are the details" />, app)
ReactDOM.render(<AuthInfo isAuthenticated={true} />, app)