import { resultInfo } from "../constants"

const Result = () => {

    return (
        <section className={` | bg-gradient-to-t from-gradients-background-light-royal-blue from-20% to-gradients-background-light-slate-blue | rounded-b-[2.2rem] | `}>
            {resultInfo.map((result) => (
                <div className={`pt-6 pb-10 | text-center | flex flex-col justify-center items-center | `}>
                    <h5 className={`mb-5 | text-lg text-neutral-light-lavender font-medium |  | `}>
                        {result.resultTitle}
                    </h5>

                    <div className={`w-[8.5rem] h-[8.4rem] | bg-gradient-to-b from-gradients-circle-violet-blue/95 from-0% to-gradients-circle-persian-blue to-95% | grid place-content-center rounded-full | `}>
                        <h2 className={`mb-1 | text-5xl text-neutral-white font-bold |  | `}>
                            {result.resultScore}
                        </h2>
                        <span className={` | text-sm text-slate-400/90 font-bold |  | `}>
                            {result.resultValue}
                        </span>
                    </div>

                    <h3 className={`mt-4 mb-1 | text-[1.6rem] text-neutral-pale-blue font-bold |  | `}>
                        {result.resultGrade}
                    </h3>

                    <p className={`max-w-[20rem] | text-lg leading-[1.5rem] text-neutral-light-lavender font-medium |  | `}>
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