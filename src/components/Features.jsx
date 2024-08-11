const Features = () => {
    return (
        <>
            <div className="w-screen h-screen font-nunitoSans">
                <div className="py-1 px-20 mt-20">
                    <p className="font-bold text-blue-600 pl-2">FEATURES</p>
                    <h1 className="font-extrabold text-4xl pt-3">🤔• What You Can Do?</h1>
                </div>
                <div className="w-screen h-[70vh] px-20 flex gap-40">
                    <div className="w-[300px] h-60 my-20 items-center justify-center text-center">
                        <img src="/search.svg" alt="search" className="w-24 mx-auto pb-5" />
                        <h1 className="font-bold text-xl pb-4">Search book</h1>
                        <p className="text-gray-500 leading-7 tracking-wide">Effortlessly find your next
                            <br />read with our powerful and intuitive
                            book search.</p>
                    </div>
                    <div className="w-[300px] items-center h-60 my-20 justify-center text-center">
                        <img src="/review.svg" alt="review" className="w-24 mx-auto pb-5" />
                        <h1 className="font-bold text-xl pb-4">Review book</h1>
                        <p className="text-gray-500 leading-7 tracking-wide">Discover insightful critiques  and
                            <br />share your thoughts on diverse
                            literary masterpieces effortlessly.</p>
                    </div>
                    <div className="w-[300px] items-center h-60 my-20 justify-center text-center">
                        <img src="/review.svg" alt="review" className="w-24 mx-auto pb-5" />
                        <h1 className="font-bold text-xl pb-4">Wishlist book</h1>
                        <p className="text-gray-500 leading-7 tracking-wide">Curate your literary
                            <br />dreams–wishlist books  for future
                            adventures and discoveries.</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Features
