import React from 'react';
import { connect } from '../../redux/react-redux';

class Role extends React.Component {
    render() {
        console.log('props', this.props);
        return (
            <div>对的现在是Role
                <div onClick={() => {
                    this.props.dispatch({
                        type: 'TOOGLE_MODAL',
                        payload: true
                    })
                }}>dispatch</div>
            </div>
        )
    }
}

export default connect()(Role);
