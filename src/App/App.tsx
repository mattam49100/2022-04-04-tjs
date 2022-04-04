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
