const mapActions = ({setState, getState}) => ({
  decrement: state => ({ count: state.count - 1 }),
  increment: state => ({ count: state.count + 1 }),
  asyncAction1() {
    setState({ loading1: true });  //this should be logged in redux-devtools as asyncAction1

    return fetch("https://jsonplaceholder.typicode.com/posts/1")
      .then(res => res.json())
      .then(payload => {
        setState({ payload, loading1: false }); //this should be logged in redux-devtools as asyncAction1
        return mapActions({setState, getState}).asyncAction2(getState());
      })
      .catch(error => ({ error, loading1: false }))
  },
  asyncAction2() {
    setState({ loading2: true }); //this should be logged in redux-devtools as asyncAction2

    return fetch("https://jsonplaceholder.typicode.com/posts/1")
      .then(res => res.json())
      .then(payload2 => {
        return { payload2, loading2: false } //this should be logged in redux-devtools as asyncAction2
      })
      .catch(error => ({ error, loading2: false }))
  }
});

export default mapActions;