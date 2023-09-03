const BeforeCreate = () => {
    return (
        <div className=" flex flex-col justify-center items-center h-screen">
            <div className="flex flex-col justify-center items-center   w-[478px] h-[428px] bg-white rounded-lg">

                <button className=" ml-[350px]">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="ease-out duration-300 hover:text-blue-700 ml-5 w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>

                <h1 className=" text-[30px] mb-[3px]">Create room</h1>

                <div className=" w-[250px]">
                    <p className=" text-center text-[20px] mb-[8px]">if you create a room, from 1 to 15

                        people can enter it</p>
                </div>
                <button type="button" className="w-[110px] text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Create</button>

                <h1 className=" text-[30px] mb-[3px]">Create chat</h1>

                <div className=" w-[245px]">
                    <p className=" text-center text-[20px] mb-[8px]">if you create a chat you can

                        only chat with 1 person</p>
                </div>
                <button type="button" className="w-[110px] text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Create</button>
            </div>
        </div>
    )
}

export default BeforeCreate