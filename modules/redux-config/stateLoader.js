import initialState from './initialState'
export default class StateLoader {

    loadState() {
        try {
            let serializedState = localStorage.getItem("http://hello-next-redux-rxjs-b44.vrecle.com:state");

            if (serializedState === null) {
                return this.initializeState();
            }

            return JSON.parse(serializedState);
        }
        catch (err) {
            return this.initializeState();
        }
    }

    saveState(state) {
        try {
            let serializedState = JSON.stringify(state);
            localStorage.setItem("http://hello-next-redux-rxjs-b44.vrecle.com:state", serializedState);

        }
        catch (err) {
        }
    }

    initializeState() {
        return initialState
    }
  }
