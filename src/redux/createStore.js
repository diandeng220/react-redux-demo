export default function (reducers, initState = {}) {
    let state = {
        ...initState
    };
    function getState() {
        return state;
    }
    function dispatch(action) {
        state = {
            ...reducers(action, state)
        }
    }
    return {
        dispatch,
        getState,
        _store : state
    }
}
