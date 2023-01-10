const StepCircle = ({ step, currentStep, index }) => {
    const isCompleted = currentStep > index;

    const color = isCompleted ? "bg-green-primary" : "bg-gray-dark";
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
    const percentCompleted = Math.ceil(
        100 - (currentStep / steps.length) * 100
    );
    return (
        <div className="flex justify-evenly relative md:w-1/2 m-auto">
            <hr className="absolute top-1/2 right-0 left-0 h-1 mx-0 bg-gray-dark border-0 dark"></hr>
            <hr
                className="z-10 absolute top-1/2 right-0 left-0 h-1 mx-0 bg-green-primary border-0 dark transition-all"
                style={{ right: `${percentCompleted}%` }}
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
