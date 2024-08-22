import { resultInfo } from "../constants"
import CountUp from 'react-countup';

const Result = () => {

    return (
        <section className={` | bg-gradient-to-t from-gradients-background-light-royal-blue from-20% to-gradients-background-light-slate-blue md:basis-1/2 | rounded-b-[2.2rem] md:rounded-t-[2.2rem] | `}>
            {resultInfo.map((result) => (
                <div className={`pt-6 pb-10 | text-center | flex flex-col justify-center items-center | `}>
                    <h5 className={`mb-5 md:mb-10 | text-lg md:text-xl text-neutral-light-lavender font-medium |  | move-down`}>
                        {result.resultTitle}
                    </h5>

                    <div className={`w-[8.5rem] md:w-[11rem] h-[8.4rem] md:h-[11rem] | bg-gradient-to-b from-gradients-circle-violet-blue/95 from-0% to-gradients-circle-persian-blue to-95% | grid place-content-center rounded-full | bounce-in-zoomout`}>
                        <h2 className={`mb-1 | text-5xl md:text-6xl text-neutral-white font-bold |  | `}>
                            <CountUp 
                                end={result.resultScore} 
                                duration={2}
                                delay={3}
                            />
                        </h2>
                        <span className={` | text-sm md:text-base text-slate-400/90 font-bold |  | `}>
                            {result.resultValue}
                        </span>
                    </div>

                    <h3 className={`mt-4 md:mt-6 mb-1 md:mb-3 | text-[1.6rem] md:text-[1.8rem] text-neutral-pale-blue font-bold |  | text-animation`}>
                        {result.resultGrade}
                    </h3>

                    <p className={`max-w-[20rem] md:max-w-[15.5rem] | text-lg leading-[1.5rem] text-neutral-light-lavender font-medium |  | move-up`}>
                        {result.resultDescription1}
                        <span>
                            {" "} {`${result.resultDescriptionVaue}%`} {" "}
                        </span>
                        {result.resultDescription2}
                    </p>
                </div>
            ))}
        </section>
    )

}

export default Result