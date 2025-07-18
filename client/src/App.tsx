function App() {
    return (
        <div className="w-screen h-screen flex items-center justify-center text-white">
            <div className="w-[80vw] h-[80vh] md:w-[700px] md:h-[800px] bg-black rounded-4xl">
                <div className="flex justify-between items-center m-4 px-5 rounded-3xl font-extrabold text-zinc-200 text-3xl bg-gradient-to-r from-zinc-900 to-zinc-950 ">
                    <div className="my-5 mx-1">Chatly</div>
                    <button
                        className="px-5 py-2 rounded-3xl text-2xl
                     bg-zinc-800"
                    >
                        Join +
                    </button>
                </div>
            </div>
        </div>
    );
}

export default App;
