import { FlashScript, Result, Summary } from "./components"

const App = () => {

    return (
        <main className="w-full font-hanken">
            <div className={` |  | flex flex-col | `}>
                <Result />

                <Summary />
            </div>

            <FlashScript />
        </main>
    )

}

export default App