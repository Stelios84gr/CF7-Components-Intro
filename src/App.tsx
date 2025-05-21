import ArrowFunctionalComponentWithPropsType from "./components/ArrowFunctionalComponentWithPropsType.tsx";

function App() {

  return (
    <>
      {/*<ViteIntro/>*/}
    {/*<ClassComponent/>*/}
      {/*<FunctionalComponent/>*/}
      {/*<ArrowFunctionalComponent/>*/}
      {/*  <ArrowFunctionalComponentWithProps title="Is an Arrow Functional Component with Props!"/>*/}
      <ArrowFunctionalComponentWithPropsType
          title="Is an Arrow Functional Component with Props"
          description="this is a description"
      />
    </>
  )
}

export default App