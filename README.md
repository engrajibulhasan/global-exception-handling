# Handling React Global Exceptions/Errors

## How to setup environment
- Install the package using **npm install react-error-boundary**
- Make a functional component called **Fallback.js**
- Call the component **<ErrorBoundary FallbackComponent={Fallback} onError={errorHandler}>** in the top level component, I wrote the code in **App.js**
- Create a function also in the top level component called **const errorHandler=(error,errorInfo)=>{  }**
- In global css file you should write **iframe{display:none}**

## Note: ErrorBoundaary won't handle syntax error


