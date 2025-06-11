// import ViteIntro from "./pages/ViteIntro.tsx";
// import ClassComponent from "./components/ClassComponent.tsx";
// import FunctionalComponent from "./components/FunctionalComponent.tsx";
// import ArrowFunctionalComponent from "./components/ArrowFunctionalComponent.tsx";
// import ArrowFunctionalComponentWithProps from "./components/ArrowFunctionalComponentWithProps.tsx";
// import ArrowFunctionalComponentWithPropsType from "./components/ArrowFunctionalComponentWithPropsType.tsx";
// import CodingFactoryLogo from "./components/CodingFactoryLogo";
import Layout from "./components/Layout.tsx";
// import ClassComponentWithState from "./components/ClassComponentWithState.tsx";
// import FunctionalComponentWithState from "./components/FunctionalComponentWithState.tsx";
// import Counter from "./components/Counter.tsx";
// import NameChanger from "./components/NameChanger.tsx";
// import {useEffect} from "react";
// import CounterWithMoreStates from "./components/CounterWithMoreStates.tsx";
// import CounterAdvanced from "./components/CounterAdvanced.tsx";
// import CounterWithCustomHook from "./components/CounterWithCustomHook.tsx";
// import CounterAdvancedWithCustomHook from "./components/CounterAdvancedWithCustomHook.tsx";
// import CounterWithReducer from "./components/CounterWithReducer.tsx";
import OnlineStatus from "./components/OnlineStatus.tsx";


function App() {

    // when useEffect setup is a function that returns something, it's a cleanup function
    // usually runs when something unmounts and something else mounts
    // useEffect(() => {
    //     const id: number = setInterval(() => {console.log("tick")}, 1000);
    //     return () => clearInterval(id);
    // }, []);

  return (
    <>
      <Layout>
      {/*<ViteIntro/>*/}
      {/*<ClassComponent/>*/}
      {/*<FunctionalComponent/>*/}
      {/*<ArrowFunctionalComponent/>*/}
      {/*<ArrowFunctionalComponentWithProps title="Is an Arrow Functional Component with Props!"/>*/}
      {/*<ArrowFunctionalComponentWithPropsType*/}
      {/*    title="Is an Arrow Functional Component with Props"*/}
      {/*    description="this is a description"*/}
      {/*<CodingFactoryLogo />*/}
      {/*<ClassComponentWithState/>*/}
      {/*<FunctionalComponentWithState/>*/}
      {/*<Counter/>*/}
      {/*<NameChanger />*/}
      {/*<CounterWithMoreStates />*/}
      {/*<CounterAdvanced />*/}
      {/*<CounterWithCustomHook/>*/}
      {/*<CounterAdvancedWithCustomHook/>*/}
      {/*<CounterWithReducer/>*/}
      <OnlineStatus/>
      </Layout>
    </>
  );
}

export default App