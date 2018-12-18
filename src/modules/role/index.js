import React from 'react';
import { connect } from '../../redux/react-redux';

class Role extends React.Component {
    render() {
        console.log('RoleProps', this.props);
        return (
            <div>对的现在是Role
                <div onClick={() => {
                    this.props.dispatch({
                        type: 'TOOGLE_MODAL',
                        payload: !this.props.modalVisble
                    })
                }}><input type='button' value='dispatch'/></div>
            </div>
        )
    }
}

export default connect(({modalVisble}) => {
    return {
        modalVisble
    };
})(Role);
