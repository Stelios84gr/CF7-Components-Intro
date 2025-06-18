// import ViteIntro from "./pages/ViteIntro.tsx";
// import ClassComponent from "./components/ClassComponent.tsx";
// import FunctionalComponent from "./components/FunctionalComponent.tsx";
// import ArrowFunctionalComponent from "./components/ArrowFunctionalComponent.tsx";
// import ArrowFunctionalComponentWithProps from "./components/ArrowFunctionalComponentWithProps.tsx";
// import ArrowFunctionalComponentWithPropsType from "./components/ArrowFunctionalComponentWithPropsType.tsx";
// import CodingFactoryLogo from "./components/CodingFactoryLogo";
// import Layout from "./components/Layout.tsx";
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
// import OnlineStatus from "./components/OnlineStatus.tsx";
import {BrowserRouter, Routes, Route} from "react-router";
import HomePage from "./pages/HomePage.tsx";
import NameChangerPage from "./pages/NameChangerPage.tsx";
import OnlineStatusPage from "./pages/OnlineStatusPage.tsx";
import UserPage from "./pages/UserPage.tsx";
import RouterLayout from "./components/RouterLayout.tsx";
import ExamplesPage from "./pages/ExamplesPage.tsx";
import RouterExamplesLayout from "./components/RouterExamplesLayout.tsx";
import FilePage from "./pages/FilePage.tsx";
import AutoRedirectPage from "./pages/AutoRedirectPage.tsx";
import AutoRedirectAdvancedPage from "./pages/AutoRedirectAdvancedPage.tsx";

function App() {

    // when useEffect setup is a function that returns something, it's a cleanup function
    // usually runs when something unmounts and something else mounts
    // useEffect(() => {
    //     const id: number = setInterval(() => {console.log("tick")}, 1000);
    //     return () => clearInterval(id);
    // }, []);

  return (
    <>
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
      {/*<OnlineStatus/>*/}
      {/*</Layout>*/}
      <BrowserRouter>
        {/*<Layout>*/}
        <Routes>
            <Route element={<RouterLayout/>}> {/* instead of Layout */}
                {/* instead of <Route path="/" element={<HomePage/>}/> */}
                <Route index element={<HomePage/>}/>
                {/*usersId: parameter id*/}
                <Route path="users/:userId" element={<UserPage/>}/>
                <Route path="users" element={<UserPage/>}/>
            </Route>

            <Route path="examples" element={<RouterExamplesLayout/>}>
                <Route index element={<ExamplesPage/>}/> {/* /examples/ */}
                <Route path="name-changer" element={<NameChangerPage/>}/>
                <Route path="online-status" element={<OnlineStatusPage/>}/>
                <Route path="files/*" element={<FilePage/>}/>
                <Route path="auto-redirect" element={<AutoRedirectPage/>}/>
                <Route path="auto-redirect-advanced" element={<AutoRedirectAdvancedPage/>}/>
            </Route>
         </Routes>
        {/*</Layout>*/}
      </BrowserRouter>
    </>
  );
}

export default App