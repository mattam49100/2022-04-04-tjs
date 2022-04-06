// On repart sur une version qui passera que par les reducer...
// Plus besoin de State, constructors...
//

import React, { Component, useEffect } from "react";
import style from "./App.module.css";
import FlexVLayout from "./components/layouts/FlexVLayout/FlexVLayout";
import FlexWLayout from "./components/layouts/FlexWLayout/FlexWLayout";
import MemeForm from "./components/MemeForm/MemeForm";
import MemeThumbnail from "./components/MemeThumbnail/MemeThumbnail";
import MemeViewer from "./components/MemeViewer/MemeViewer";
import Navbar from "./components/Navbar/Navbar";
import {
  Route,
  Switch,
  Link,
  useParams,
  useLocation,
  useHistory,
  withRouter,
} from "react-router-dom";
import { connect } from "react-redux";
import { DummyMeme, I_Meme } from "./interfaces/common";
import { CURRENT_ACTIONS } from "./store/store";


interface I_AppProps {
  AppName?: string;
}
// interface I_AppState {
//   currentMeme: I_Meme;
//   images: Array<I_Image>;
//   memes: Array<I_Meme>;
// }
class App extends Component<I_AppProps> {
  // constructor(props: I_AppProps) {
  //   super(props);
  //   // this.state = {
  //   //   currentMeme: initalMemeState,
  //   //   memes: [],
  //   //   images: [],
  //   // };
  // }
  componentDidMount() {
    // console.log(
    //   "%c%s",
    //   "font-size:24pt;color:green;font-weight:900",
    //   "Le component App est monté"
    // );
    // this.setState({memes:store.getState().ressources.memes,images:store.getState().ressources.images});
    // store.subscribe(()=>{
    //   this.setState({memes:store.getState().ressources.memes,images:store.getState().ressources.images})
    // })
  }
  // componentDidUpdate(oldProps: I_AppProps, oldState: I_AppState) {
  //   console.log(
  //     "%c%s",
  //     "font-size:16pt;color:blue;font-weight:900",
  //     "==========cmp updated========"
  //   );
  //   console.log("props->", oldProps, this.props);
  //   console.log("state->", oldState, this.state);
  //   console.log(
  //     "%c%s",
  //     "font-size:16pt;color:blue;font-weight:900",
  //     "============================="
  //   );
  // }
  render(): React.ReactNode {
    return (
      <div className={style.App}>
        <FlexVLayout>
          <div className={style.header}>
            Meme Generator en REACT-JS
            <br />
            <Link to="/">Home</Link> -<Link to="/thumbnail">Thumbnail</Link> -
            <Link to="/editor">Nouveau</Link> -
            <Link to="/editor/1">Edit 1</Link>
          </div>
          {/* <MemeThumbnail /> */}
          <Navbar></Navbar>
          <Switch>
            <Route path="/" exact>
              <div className={style.home}>Page d'accueil</div>
            </Route>
            <Route path="/editor" exact component={RoutedEditor} />
            <Route path="/editor/:id" component={RoutedEditor} />
            <Route path="/thumbnail">
              <MemeThumbnail />
            </Route>
            <Route path="/">
              <div className={style.Erreur}>Page Innexistante</div>
            </Route>
            <FlexWLayout>
              <div>
                <MemeViewer
                //meme={this.state.currentMeme}
                //image={this.state.images.find(
                //  (e) => e.id === this.state.currentMeme.imageId
                //)}
                />
              </div>
              <MemeForm
              // currentMeme={this.state.currentMeme}
              // images={this.state.images}
              // onInputValueChange={(changedValuesObject: any) => {
              //   this.setState({
              //     currentMeme: {
              //       ...this.state.currentMeme,
              //       ...changedValuesObject,
              //     },
              //   });
              // }}
              />
            </FlexWLayout>
          </Switch>
        </FlexVLayout>
      </div>
    );
  }
}
function Editor(props: any) {
  console.log(props);
  useEffect(() => {
    props.update(
      props.memes.find((m: I_Meme) => m.id === parseInt(props.match.params.id))
    );
    return () => {
      props.update(undefined);
    };
  }, [props]);
  return (
    <FlexWLayout>
      <div>
        <MemeViewer />
      </div>
      <MemeForm />
    </FlexWLayout>
  );
}
function mstp(state: any, own: any) {
  return { ...own, memes: state.ressources.memes };
}
function mdtp(dispatch: Function) {
  return {
    update: (meme: I_Meme | undefined) => {
      dispatch({
        type: CURRENT_ACTIONS.UPDATE_CURRENT,
        value: meme ? meme : DummyMeme,
      });
    },
  };
}
const RoutedEditor = withRouter(connect(mstp, mdtp)(Editor));
export default App;

