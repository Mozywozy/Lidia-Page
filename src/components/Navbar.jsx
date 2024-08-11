
const Navbar = () => {
    return (
        <>
            <nav className="font-nunitoSans w-screen flex items-center py-6 justify-between px-20 z-50 absolute">
                <div className="flex items-center gap-16">
                    <div className=" flex items-center pt-2 pb-2">
                        <img src="/Logo.png" alt="" className="pr-3" />
                        <p className="font-bold m-auto">Lidia</p>
                    </div>
                    <div className="flex justify-evenly w-fit pt-2 pb-2">
                        <div className="m-auto">
                            <a href="" className="mr-10 text-blue-500">Features</a>
                            <a href="" className="mr-10 text-gray-400">Service</a>
                            <a href="" className="mr-10 text-gray-400">Review</a>
                            <a href="" className="mr-10 text-gray-400">Location</a>
                        </div>
                    </div>
                </div>
                <div className="items-center border pt-2 pr-10 pl-10 pb-2 rounded-md bg-white">
                    <a href="" className="font-bold text-blue-900">Login</a>
                </div>
            </nav>
        </>
    )
}

export default Navbar
