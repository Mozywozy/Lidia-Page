const Footer = () => {
    return (
        <>
            <div className="w-screen h-fit justify-center items-center font-nunitoSans">
                <div className=" my-5 mx-auto flex">
                    <div className="w-fit  mx-auto text-center">
                        <p className="font-bold text-2xl">Managed By</p>
                        <img src="/lidia.png" alt="lidia" className="w-52 mt-5"/>
                    </div>
                    <div className="w-fit  mx-auto text-center">
                        <p className="font-bold text-3xl">Social Media</p>
                        <div className="flex w-fit mx-auto mt-8 gap-4">
                        <svg xmlns="http://www.w3.org/2000/svg" width="3em" height="3em" viewBox="0 0 24 24"><path fill="none" stroke="black" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M2 18.5C3.765 19.521 5.814 20 8 20c6.48 0 11.762-5.137 11.992-11.562L22 4.5l-3.354.5A4 4 0 0 0 16 4c-2.572 0-4.5 2.517-3.88 4.98c-3.552.23-6.771-1.959-8.633-4.875c-1.236 4.197-.09 9.251 3.013 12.366c0 1.176-3 1.878-4.5 2.029" color="black"/></svg>
                        <svg xmlns="http://www.w3.org/2000/svg" width="3em" height="3em" viewBox="0 0 24 24"><path fill="black" d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2m-.2 2A3.6 3.6 0 0 0 4 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6C20 5.61 18.39 4 16.4 4zm9.65 1.5a1.25 1.25 0 0 1 1.25 1.25A1.25 1.25 0 0 1 17.25 8A1.25 1.25 0 0 1 16 6.75a1.25 1.25 0 0 1 1.25-1.25M12 7a5 5 0 0 1 5 5a5 5 0 0 1-5 5a5 5 0 0 1-5-5a5 5 0 0 1 5-5m0 2a3 3 0 0 0-3 3a3 3 0 0 0 3 3a3 3 0 0 0 3-3a3 3 0 0 0-3-3"/></svg>
                        <svg xmlns="http://www.w3.org/2000/svg" width="3em" height="3em" viewBox="0 0 24 24"><path fill="none" stroke="black" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M17 2h-3a5 5 0 0 0-5 5v3H6v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
                        </div>
                    </div>
                    <div className="w-fit  mx-auto text-center">
                        <p className="font-bold text-3xl">Slogan</p>
                        <p className="text-2xl mt-10">#RentFavBooks</p>
                    </div>
                </div>
                <div className="w-screen h-48 bg-blue-500 border text-center mt-28">
                    <p className="text-white pt-20">©2024 Lidia. All rights reserved.</p>
                </div>
            </div>
        </>
    )
}

export default Footer
