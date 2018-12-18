export default function (reducers, initState = {}) {
    let state = {
            ...initState
        },
        listeners = [];
    function getState() {
        return state;
    }
    function dispatch(action) {
        state = {
            ...reducers(action, state)
        }
        dispatchListeners();
    }
    function dispatchListeners() {
        listeners.forEach((listen) => {
            listen();
        })
    }
    function observable(listener) {
        listeners.push(listener);
        return () => {
            listeners = listeners.filter((listen) => listen !== listener);
        }
    }
    return {
        dispatch,
        getState,
        observable,
        _store : state
    }
}
