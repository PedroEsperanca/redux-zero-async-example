import { Connect } from "redux-zero/preact";

import actions from "./actions";

const mapToProps = ({ count, loading, payload }) => ({ count, loading, payload });

export default () => (
  <Connect mapToProps={mapToProps} actions={actions}>
    {({ count, loading, payload, increment, decrement, getTodos }) => (
      <div>
        <h1>{count} - {loading.toString()} </h1>

        <p>getTodos response (not actually todos :p):</p>
        <pre>{ JSON.stringify(payload, null, 2) }</pre>

        <div>
          <button onClick={decrement}>decrement</button>
          <button onClick={increment}>increment</button>
          <button onClick={getTodos}>getTodos</button>
        </div>
      </div>
    )}
  </Connect>
);
