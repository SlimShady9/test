const StepCircle = ({ step, currentStep, index }) => {
    const isCompleted = currentStep > step;

    const color = isCompleted ? "bg-green-light" : "bg-gray-dark";
    const textColor = isCompleted ? "text-black" : "text-white";

    return (
        <>
            <div className="flex items-center justify-center bg-green-500 space-x-8">
                <div
                    className={`z-20 w-12 h-12 ${color} rounded-full grid place-items-center ${textColor} text-xl font-bold`}
                >
                    {step}
                </div>
            </div>
        </>
    );
};

const StepProgressCircles = ({ currentStep, steps }) => {
    const percentCompleted = Math.floor(
        ((currentStep - 1) / steps.length) * 100
    );
    return (
        <div className="flex justify-evenly relative md:w-1/2 m-auto">
            <hr className="absolute top-1/2 right-0 left-0 h-1 mx-0 bg-gray-dark border-0 dark"></hr>
            <hr
                className="z-10 absolute top-1/2 right-0 left-0 h-1 mx-0 bg-green-light border-0 dark transition-all duration-500 ease-in-out"
                style={{ right: `${100 - percentCompleted}%` }}
            ></hr>
            {steps.map((step, index) => (
                <StepCircle
                    key={index}
                    step={step}
                    currentStep={currentStep}
                    index={index}
                />
            ))}
        </div>
    );
};

export default StepProgressCircles;