import React, {createElement} from 'react';
import PropTypes from 'prop-types'

export class Provider extends React.Component {
    static childContextTypes = {
        store: PropTypes.object,
    }
    getChildContext() {
        return {
            store: this.props.store
        };
    };
    render() {
        return this.props.children
    }
}

const defaultMapStateToProps = (state) => {};
const defaultMapDispatchToProps = (dispatch) => {};

export const connect = (
    mapStateToProps = defaultMapStateToProps,
    mapDispatchToProps = defaultMapDispatchToProps
) => (Components) => {
    class WarpComponent extends React.Component {
        static contextTypes = {
            store: PropTypes.object
        }
        state = {
            mergeProps: {}
        }
        componentDidMount() {
            const { store } = this.context;
            this.removeListen = store.observable(() => this.update());
            this.update();
        }

        componentWillUnmount() {
            this.removeListen();
        }

        update = () => {
            const { store } = this.context;
            this.setState({
                mergeProps: {
                    dispatch: store.dispatch,
                    getState: store.getState,
                    ...this.props,
                    ...mapStateToProps(store.getState())
                }
            })
        }

        render() {
            const { mergeProps } = this.state;
            return createElement(Components, {...mergeProps})
        }
    }
    return WarpComponent;
}
