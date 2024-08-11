
const Reviews = () => {
  return (
    <>
      <div className="w-screen h-screen font-nunitoSans rounded-md">
        <div className="px-20 py-10">
          <h1 className="text-blue-600 font-bold">REVIEWS</h1>
          <p className="font-extrabold text-4xl pt-3">💬• Reviews of Others</p>
        </div>
        <div className="flex w-screen px-20 gap-40">
          <div className="w-72 h-80 mt-10 border items-center justify-center text-center shadow-2xl">
            <img src="/review1.png" alt="reviw" className="w-24 mx-auto pt-4" />
            <p className="text-gray-500 leading-7 tracking-wide text-sm pt-2">Engaging plot, vivid characters;
              <br />a captivating read that
              <br />lingers in your thoughts.</p>
            <p className="leading-7 tracking-wide text-sm pt-3 text-blue-600">Ahmad Saugi</p>
            <p className="text-base pt-4">College Student</p>
          </div>
          <div className="w-72 h-80 mt-10 border items-center justify-center text-center shadow-2xl">
            <img src="/review2.png" alt="reviw" className="w-24 mx-auto pt-4" />
            <p className="text-gray-500 leading-7 tracking-wide text-sm pt-2">EThought-provoking narrative
              <br />and rich prose. A must-read for
              <br />any avid book lover!</p>
            <p className="leading-7 tracking-wide text-sm pt-3 text-blue-600">Muhammad Alfian</p>
            <p className="text-base pt-4">School Student</p>
          </div>
          <div className="w-72 h-80 mt-10 border items-center justify-center text-center shadow-2xl">
            <img src="/review3.png" alt="reviw" className="w-24 mx-auto pt-4" />
            <p className="text-gray-500 leading-7 tracking-wide text-sm pt-2">Immersive storytelling!
              <br />An enriching literary experience
              <br />worth savoring and sharing.</p>
            <p className="leading-7 tracking-wide text-sm pt-3 text-blue-600">Wahyu Amirulloh</p>
            <p className="text-base pt-4">ERP Developer</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default Reviews
