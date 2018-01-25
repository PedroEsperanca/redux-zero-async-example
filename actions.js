import store from './store';
import { bindActions }  from 'redux-zero/utils';

const mapActions = (store) => ({
  decrement: state => ({ count: state.count - 1 }),
  increment: state => ({ count: state.count + 1 }),
  asyncAction1() {
    store.setState({ loading1: true });

    return fetch("https://jsonplaceholder.typicode.com/posts/1")
      .then(res => res.json())
      .then(payload => {
        store.setState({ payload, loading1: false });
        asyncAction2('test param');
        return {};
      })
      .catch(error => ({ error, loading1: false }))
  },
  asyncAction2(state, param) {
    store.setState({ loading2: true });

    return fetch("https://jsonplaceholder.typicode.com/posts/1")
      .then(res => res.json())
      .then(payload2 => {
        return { payload2, loading2: false, param }
      })
      .catch(error => ({ error, loading2: false }))
  }
});

const { asyncAction2 } = bindActions(mapActions, store);

export default mapActions;