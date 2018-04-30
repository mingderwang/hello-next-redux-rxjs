export default ({ pageNumber = 0, increment, decrement, page }) => {

      return (
        <div>
          <h1>{ pageNumber } {page}</h1>
          <button onClick={increment}>Increment</button>
          <button onClick={decrement}>Decrement</button>
        </div>
      )

}
