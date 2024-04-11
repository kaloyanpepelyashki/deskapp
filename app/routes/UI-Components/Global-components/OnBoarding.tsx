import OnBoardingStep from "../Small-components/OnBoardingStepComponent";
import { useNavigate } from "@remix-run/react";
import { useState } from "react";

const OnBoarding: React.FunctionComponent = ({}) => {
    const [onBoardingStepState, setOnBoardingStepState] = useState<number>(1);

    const forwardAction = (actionNumber: number) => {
        setOnBoardingStepState(actionNumber);
    }

    const backAction = (actionNumber: number) => {
        setOnBoardingStepState(actionNumber);
    }

    return (
        <>
            {onBoardingStepState == 1? <OnBoardingStep stepHeading={"Step 1"} stepDescription={"Step description 1"} stepForwardAction={() => forwardAction(2)}/> : onBoardingStepState == 2 ? <OnBoardingStep stepHeading={"Step 1"} stepDescription={"Step description 1"} stepForwardAction={() => forwardAction(3)} stepBackAction={() => backAction(1)}/> : " "}
        </>
    )
}


export default OnBoarding;