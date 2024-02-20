import { useSelector, useDispatch, connect } from "react-redux";
import classes from "./Counter.module.css";
import { CounterActions } from "../store/store";
const Counter = () => {
  const currCount = useSelector((state) => state.counter.counter);
  const storeDispatch = useDispatch();
  const toggleCounterHandler = () => {
    storeDispatch(CounterActions.toggleCounter());
  };

  const incrementHandler = () => {
    storeDispatch(CounterActions.increment());
  };
  const decrementHandler = () => {
    storeDispatch(CounterActions.decrement());
  };
  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      <div className={classes.value}>{currCount}</div>
      <div>
        <button onClick={decrementHandler}>-</button>{" "}
        <button onClick={incrementHandler}>+</button>{" "}
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};
export default Counter;
// class Counter extends Component {
//   incrementHandler() {
//     this.props.increment();
//   }
//   decrementHandler() {
//     this.props.decrement();
//   }
//   toggleCounterHandler() {}

//   render() {
//     return (
//       <main className={classes.counter}>
//         <h1>Redux Counter</h1>
//         <div className={classes.value}>{this.props.counter}</div>
//         <div>
//           <button onClick={this.decrementHandler.bind(this)}>-</button>
//           <button onClick={this.incrementHandler.bind(this)}>+</button>
//         </div>
//         <button onClick={this.toggleCounterHandler}>Toggle Counter</button>
//       </main>
//     );
//   }
// }

// const maspStateToProps = (state) => {
//   return {
//     counter: state.counter,
//   };
// };

// const mapDispatchToProps = (disp) => {
//   return {
//     increment: () => dispatchEvent({ type: "PLUS" }),
//     decrement: () => dispatchEvent({ type: "MINUS" }),
//   };
// };

// export default connect(maspStateToProps, mapDispatchToProps)(Counter);
