export default ({setState}) => ({
  decrement: state => ({ count: state.count - 1 }),
  increment: state => ({ count: state.count + 1 }),
  getTodos() {
    setState({ loading: true });

    return fetch("https://jsonplaceholder.typicode.com/posts/1")
      .then(res => res.json())
      .then(payload => {
        return { payload, loading: false }
      })
      .catch(error => ({ error, loading: false }))
  }
});
