import { summaryInfo, summaryTitle } from "../constants"

const Summary = () => {

    return (
        <section>
            <div className={`max-w-[20.5rem] mx-auto mt-8 |  | grid | `}>
                <h4 >
                    {summaryTitle}
                </h4>

                {
                    summaryInfo.map((summary) => (
                        <div 
                            key={summary.category}
                            className={` |  | flex justify-between items-center | `}
                        >
                            <div className={` |  | flex justify-center items-center | `}>
                                <img 
                                    src={summary.icon} 
                                />

                                <h5>
                                    {summary.category}
                                </h5>
                            </div>

                            <div>
                                <p>
                                    <span>
                                        {summary.score} {" "} 
                                    </span>
                                    / 100
                                </p>
                            </div>
                        </div>
                    ))
                }
            </div>
        </section>
    )

}

export default Summary