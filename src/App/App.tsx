import React, { Component } from "react";
import style from "./App.module.css";
import Button from "./components/Button/Button";

interface I_AppProps {
  AppName?: string;
}
interface I_AppState {
  counter: number;
  uneValue: string;
}

class App extends Component<I_AppProps, I_AppState> {
  constructor(props: I_AppProps) {
    super(props);
    this.state = { counter: 0, uneValue: "Hello" };
  }
  componentDidMount() {
    console.log(
      "%c%s",
      "font-size:24pt; color:gree; font-weight:900",
      "le component App est monté"
    );
  }
  componentDidUpdate(oldProps:I_AppProps,oldState:I_AppState){
    console.log(
      "%c%s",
      "font-size:24pt; color:gree; font-weight:900",
      "====== cmp updated======="
    );
    console.log('props->',oldProps,this.props);
    console.log('props->',oldState,this.state);
    console.log(
      "%c%s",
      "font-size:24pt; color:blue; font-weight:900",
      "============="
    );
  }

  render(): React.ReactNode {
    return (
      <div className={style.App}>
        value du compteur : {this.state.counter}
        <br />
        <Button
          lorsqueLeButtonEstClicked={() => {
            this.setState({ counter: this.state.counter + 1 });
          }}
        >
          {this.state.uneValue}
        </Button>
      </div>
    );
  }
}
export default App;
