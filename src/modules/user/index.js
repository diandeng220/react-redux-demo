import React from 'react';

export default class User extends React.Component {
    render() {
        console.log('UserProps', this.props);
        return (
            <div>没错 现在加载的就是User</div>
        )
    }
}
