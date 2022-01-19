import "./App.css";
import { Person } from "./components/Person";
import { ClickCounter } from "./components/ClickCounter";
// import { ErrorBoundary } from "./components/ErrorBoundary";
import { ErrorBoundary } from "react-error-boundary";
import { Fallback } from "./components/globalErrorHandler/Fallback";

export const  App=()=> {
  const person = {
    firstName: "Rajibul",
    lastName: "Hasan Rayhan",
  };
  const errorHandler=(error,errorInfo)=>{
    console.log('Logging -',error,errorInfo)
  }
  return (
    <div className="App">
      {/* Component Error Handling using ErrorBoundary */}
      <ErrorBoundary FallbackComponent={Fallback} onError={errorHandler}>
        <h1>This is error Handler</h1>
        <Person person={person} />
        {/* <Person person={{}} /> */}
        <ClickCounter />
      </ErrorBoundary>
    </div>
  );
  }

