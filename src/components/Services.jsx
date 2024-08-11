
const Services = () => {
    return (
        <>
            <div className="w-screen h-[1000px] font-nunitoSans">
                <div className="py-1 px-20">
                    <p className="text-blue-600 font-bold">SERVICES</p>
                    <h1 className="font-extrabold text-4xl pt-3">🚀• The Services for You</h1>
                </div>
                <div className="w-screen px-36 h-fit mt-14">
                    {/* row 1 */}
                    <div className="flex my-5 gap-52">
                        <img src="/service1.png" alt="service1" className="w-[450px]" />
                        <div className="">
                            <p className="font-semibold text-3xl"><span className="text-blue-600">Rent</span> your favorite book
                                <br />fairly easy on <span className="text-blue-600">Lidia!</span></p>
                            <p className="pt-6 text-gray-500 tracking-wide">Viewing, rent, and organize your favorite books has
                                <br />never been easier. An integrated digital library rent
                                <br />that’s simple to use, Lidia lets you spend less time
                                <br />managing your work and more time actually doing it!</p>
                            <p className="pt-3 text-gray-500 tracking-wide">Effortless rentals, personalized shelves—Lidia
                                <br />transforms book management, enhancing your
                                <br />reading experience~</p>
                        </div>
                    </div>
                    {/* row 2 */}
                    <div className="flex flex-shrink my-5 gap-52 mt-40">
                        <div className="">
                            <p className="font-semibold text-3xl">Quick Book Rentals:
                                <br /><span className="text-blue-600">Dive</span> into <span className="text-blue-600">Reading</span> Instantly</p>
                            <p className="pt-6 text-gray-500 tracking-wide">Discover instant literary delight. Access a vast library,
                                <br />borrow your favorite reads, and dive into captivating
                                <br />stories within minutes. Reading made quick and easy,
                                <br />just a click away!</p>
                            <p className="pt-3 text-gray-500 tracking-wide">Unlock a world of stories effortlessly.
                            <br /> Browse genres, choose, rent in minutes.
                            <br />Seamlessly manage your reading adventures
                            <br />with our intuitive platform~</p>
                        </div>
                        <img src="/service2.png" alt="service1" className="w-[450px]" />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Services
