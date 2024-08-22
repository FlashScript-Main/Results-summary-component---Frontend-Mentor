import { FlashScript, Result, Summary } from "./components"

const App = () => {

    return (
        <main className="w-full font-hanken md:grid md:place-content-center md:h-screen">
            <div className={`md:w-[43rem] |  | flex flex-col md:flex-row md:shadow-2xl md:shadow-neutral-light-lavender/60 | md:rounded-[2.2rem]`}>
                <Result />

                <Summary />
            </div>

            <FlashScript />
        </main>
    )

}

export default App