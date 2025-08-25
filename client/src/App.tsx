import { SignIn, SignInButton, SignedIn, SignedOut, UserButton, useUser } from '@clerk/clerk-react';
function App() {
    const user = useUser();
    return (
        <div className='h-screen flex items-center justify-center' >
            <SignedOut>
                <SignIn routing='hash'/>
                <SignInButton/>
            </SignedOut>
            <SignedIn>
                <div className="w-screen h-screen flex items-center justify-center text-white">
                    <div className="w-[80vw] h-[80vh] md:w-[700px] md:h-[800px] bg-black rounded-4xl">
                        <div className="flex justify-between items-center m-4 px-5 rounded-3xl font-extrabold text-zinc-200 text-3xl bg-gradient-to-r from-zinc-900 to-zinc-950 ">
                            <div className="my-5 mx-1">Chatly</div>
                            <div className='flex items-center'>
                                <button
                                className="px-5 py-1 mr-5 text-green-200 bg-green-900 rounded-2xl text-xl
                     "
                            >
                                Join +
                            </button>
                            <UserButton/>
                            </div>
                        </div>
                    </div>
                </div>
            </SignedIn>
        </div>
    );
}

export default App;
