import React, {createElement} from 'react';
const Context = React.createContext({});
const ReduxProvider = Context.Provider;
const ReduxConsumer = Context.Consumer;
export function Provider(props) {
    return (
        <ReduxProvider value={props.store}>
            {
                props.children
            }
        </ReduxProvider>
    );
}
const defaultMapStateToProps = (state) => {};
const defaultMapDispatchToProps = (dispatch) => {};

export function connect(
    mapStateToProps = defaultMapStateToProps,
    mapDispatchToProps = defaultMapDispatchToProps
) {
    return Components => props => (
        <ReduxConsumer>
            {
                (store) => {
                    const mergeProps = {
                        dispatch: store.dispatch,
                        getState: store.getState,
                        ...mapStateToProps(store.getState()),
                        ...props
                    };
                    return createElement(Components, {...mergeProps})
                }
            }
        </ReduxConsumer>
    )
}
