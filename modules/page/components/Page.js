export default ({ pageNumber, increment, decrement }) =>
  <div>
    <h1>{ pageNumber }</h1>
    <button onClick={increment}>Increment</button>
    <button onClick={decrement}>Decrement</button>
  </div>
