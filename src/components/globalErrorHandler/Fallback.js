import "./Fallback.css";
import errorIcon from "../../images/errorPage.svg";
export const Fallback = () => {
  return (
    <div className="code-error-area text-center">
      <img src={errorIcon} alt="Error" />
      <h1>Something went wrong!!!</h1>
      <p>Please contact with Administrator.</p>
      <a href="/">Go To Home</a>
    </div>
  );
};
