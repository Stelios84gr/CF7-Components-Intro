// import ViteIntro from "./pages/ViteIntro.tsx";
// import ClassComponent from "./components/ClassComponent.tsx";
// import FunctionalComponent from "./components/FunctionalComponent.tsx";
// import ArrowFunctionalComponentWithPropsType from "./components/ArrowFunctionalComponentWithPropsType.tsx";
// import CodingFactoryLogo from "./components/CodingFactoryLogo";
import Layout from "./components/Layout.tsx";
// import ClassComponentWithState from "./components/ClassComponentWithState.tsx";
// import FunctionalComponentWithState from "./components/FunctionalComponentWithState.tsx";
import Counter from "./components/Counter.tsx";


function App() {

  return (
    <>
        <Layout>
      {/*<ViteIntro/>*/}
    {/*<ClassComponent/>*/}
      {/*<FunctionalComponent/>*/}
      {/*<ArrowFunctionalComponent/>*/}
      {/*  <ArrowFunctionalComponentWithProps title="Is an Arrow Functional Component with Props!"/>*/}
      {/*<ArrowFunctionalComponentWithPropsType*/}
      {/*    title="Is an Arrow Functional Component with Props"*/}
      {/*    description="this is a description"*/}
      {/*  <ClassComponentWithState/>*/}
      {/*      <FunctionalComponentWithState/>*/}
            <Counter/>
        </Layout>
    </>
  )
}

export default App