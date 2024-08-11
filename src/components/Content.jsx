const Content = () => {
    return (
        <>
            <div className="w-screen z-10 h-screen px-20 flex justify-between">
                {/* kiri */}
                <div className="mt-28 w-fit flex flex-col gap-6">
                    <h1 className="text-6xl text-blue-950 font-bold leading-tight tracking-wide">Search & review <br />
                        your <u className="text-blue-800">fav book</u><br /> effortlessly</h1>
                    <p className="text-gray-500 leading-7 tracking-wide ">Embark on a literary journey like never before with our revolutionary <br />
                        library application! Introducing a seamless experience<br />
                        that transcends traditional boundaries, where  you<br />
                        can effortlessly search your favorite books.✨</p>
                    <a href="" className="border py-4 px-10 w-fit rounded-lg bg-blue-600 text-white font-semibold">Start now →</a>
                </div>
                {/* kanan */}
                <div className="pr-5 pt-24">
                    <div className="w-[400px] h-[400px] rotate-45 relative">
                        <img src="/buku1.png" alt="buku1" className="absolute -rotate-45 w-44 -bottom-56 right-48"/>
                        <img src="/buku2.png" alt="buku2" className="-rotate-45 absolute w-32 bottom-28 left-11" />
                        <img src="/buku3.png" alt="buku2" className="-rotate-45 absolute w-20 -bottom-12 right-9" />
                        <img src="/buku4.png" alt="buku2" className="-rotate-45 absolute w-32 left-72 bottom-36" />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Content
