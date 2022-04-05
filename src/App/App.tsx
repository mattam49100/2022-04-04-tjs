import React, { Component } from "react";
import style from "./App.module.css";

import FlexWLayout from "./components/layouts/FlexWLayout/FlexWLayout";
import MemeForm from "./components/MemeForm/MemeForm";
import MemeViewer from "./components/MemeViewer/MemeViewer";

// On défini les types des variables de notre App
interface I_AppProps {
  AppName?: string;
}

// On défini les types des états de notre App
interface I_AppState {
  counter: number; 
  textButton: string;
}

class App extends Component<I_AppProps, I_AppState> {
  // Constructeur de notre App avec états initiaux
  constructor(props: I_AppProps) {
    super(props);
    this.state = { counter: 0, textButton: "Push the Button" };
  }

  // Fonction d'affichage du composant

  render(): React.ReactNode {
    return (
      <div className={style.App}>
        <FlexWLayout>
          <MemeViewer></MemeViewer>
          <MemeForm></MemeForm>
        </FlexWLayout>
      </div>
    );
  }

  componentDidMount() {
    // Affichage en console avec prise en compte de styles
    console.log(
      "%c%s",
      "font-size:24px;color:green;font-weight:900",
      "Le component APP est MONTÉ"
    );
  }

  componentDidUpdate(oldProps:I_AppProps, oldState:I_AppState){
    console.log('props =>', oldProps, this.props);
    console.log('states =>', oldState, this.state);
    console.log(
      "%c%s",
      "font-size:24px;color:blue;font-weight:600",
      "Le component APP est MIS A JOUR"
    );
  }
}

export default App;