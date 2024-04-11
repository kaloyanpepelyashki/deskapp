type onBoardingStepType = {
    stepHeading: string;
    stepDescription: string;
    stepBackAction?: () => void ;
    stepForwardAction?: () => void ;
}

 const OnBoardingStep: React.FunctionComponent<onBoardingStepType> = ({stepHeading, stepDescription, stepBackAction, stepForwardAction }) => {
    return (
      <div>
        <h2>{stepHeading}</h2>
        <p>{stepDescription}</p>
        {stepForwardAction ? <button onClick={stepForwardAction}>Next</button> : " " }
        {stepBackAction ? <button onClick={stepBackAction}>Back</button> : " " }
      </div>
    );
  }

  export default OnBoardingStep;