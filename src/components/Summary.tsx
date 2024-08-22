import { summaryInfo, summaryTitle } from "../constants"

const Summary = () => {

    return (
        <section className={` |  | md:basis-1/2 | `}>
            <div className={`max-w-[19.5rem] mx-auto mt-6 |  | grid | `}>
                <h4 className={`mb-6 | text-xl text-neutral-dark-gray-blue font-bold |  | `}>
                    {summaryTitle}
                </h4>

                {
                    summaryInfo.map((summary) => (
                        <div 
                            key={summary.category}
                            className={`px-4 py-4 mb-4 | ${summary.bgColor} | flex justify-between items-center rounded-lg | `}
                        >
                            <div className={` |  | flex justify-center items-center | `}>
                                <img 
                                    src={summary.icon} 
                                    className={`mr-3 |  |  | `}
                                />

                                <h5 className={` | text-base ${summary.textColor} font-semibold |  | `}>
                                    {summary.category}
                                </h5>
                            </div>

                            <div>
                                <p className={` | text-base text-slate-400/100 font-bold |  | `}>
                                    <span className={` | text-neutral-dark-gray-blue font-extrabold |  | `}>
                                        {summary.score} {" "} 
                                    </span>
                                    / 100
                                </p>
                            </div>
                        </div>
                    ))
                }

                <button className={`py-4 mt-2 mb-6 | text-lg text-neutral-white bg-neutral-dark-gray-blue hover:bg-gradient-to-t hover:from-gradients-background-light-royal-blue hover:from-20% hover:to-gradients-background-light-slate-blue font-bold | grid place-content-center rounded-full | transition-colors`}>
                    Continue
                </button>
            </div>
        </section>
    )

}

export default Summary