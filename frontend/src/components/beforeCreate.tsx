const BeforeCreate = () => {
    return (
        <div className=" flex flex-col justify-center items-center h-screen">
        <div className="flex flex-col w-[255px] items-center">
        <h1 className=" text-[25px] mb-[3px]">Create room</h1>
        <p className=" text-center text-[17px] mb-[8px]">if you create a room, from 1 to 15 
people can enter it</p>
<button type="button" className="w-[82px] text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Create</button>
        </div>
        <div  className="flex flex-col w-[255px] items-center">
        <h1 className=" text-[25px] mb-[3px]">Create chat</h1>
        <p className=" text-center text-[17px] mb-[8px]">if you create a chat you can 
only chat with 1 person</p>
<button type="button" className="w-[82px] text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Create</button>

        </div>
    </div>
    )
}

export default BeforeCreate