import Button from "./Button";

const ButtonContainer = (props) => {
  return (
    <div className="ButtonContainer">
      <div className="ButtonRow">
        <Button onClick={props.onClick} value="C" variant="Act" />
        <Button onClick={props.onClick} value="+/-" variant="Act" />
        <Button onClick={props.onClick} value="%" variant="Act" />
        <Button onClick={props.onClick} value="÷" variant="Op" />
      </div>
      <div className="ButtonRow">
        <Button onClick={props.onClick} value="7" variant="Num" />
        <Button onClick={props.onClick} value="8" variant="Num" />
        <Button onClick={props.onClick} value="9" variant="Num" />
        <Button onClick={props.onClick} value="x" variant="Op" />
      </div>
      <div className="ButtonRow">
        <Button onClick={props.onClick} value="4" variant="Num" />
        <Button onClick={props.onClick} value="5" variant="Num" />
        <Button onClick={props.onClick} value="6" variant="Num" />
        <Button onClick={props.onClick} value="-" variant="Op" />
      </div>
      <div className="ButtonRow">
        <Button onClick={props.onClick} value="1" variant="Num" />
        <Button onClick={props.onClick} value="2" variant="Num" />
        <Button onClick={props.onClick} value="3" variant="Num" />
        <Button onClick={props.onClick} value="+" variant="Op" />
      </div>
      <div className="ButtonRow">
        <Button onClick={props.onClick} value="0" variant="Zero" />
        <Button onClick={props.onClick} value="." variant="Num" />
        <Button onClick={props.onClick} value="=" variant="Op" />
      </div>
    </div>

    // <div className="ButtonContainer">
    //   {[0, 1, 2, 3, 4].map(() => (
    //     <div className="ButtonRow">
    //       {[0, 1, 2, 3].map((value) => (
    //         <Button onClick={props.onClick>
    //       ))}
    //     </div>
    //   ))}
    // </div>
  );
};

export default ButtonContainer;
