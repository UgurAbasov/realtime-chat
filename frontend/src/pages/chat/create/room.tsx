const CreateRoom = () => {
    return (
        <div className="flex flex-col items-center justify-center h-screen">
            <h1 className="text-[25px] mb-[40px]">Creating room</h1>
            <div className="w-[300px] max-w-[100%] relative">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                    <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                    </svg>
                </div>
                <input type="text" id="default-search" className="block p-5 pl-10 w-[100%] text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search usernames" required />
                <button type="submit" className="text-white h-[60%] aspect-square right-[10px] top-[20%] absolute  bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Add</button>
            </div>
            <div className=" w-[300px] break-words  mt-4 rounded-lg border border-gray-300 text-gray-500">
                <p className=" cursor-pointer p-3 hover:bg-[#dcdae3] rounded-lg">kkkkk</p>
                <p className=" cursor-pointer p-3 hover:bg-[#dcdae3] rounded-lg">Hello</p>
            </div>
            <p className=" mt-[15px] mb-[17px] text-[18px]">Check added users</p>
            <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Create</button>
            <div className="flex mt-[40px]  hover:text-white rounded-lg  cursor-pointer hover:bg-blue-700 ">
                <svg className="w-6 h-6 mr-[15px] mt-[15px] ml-[3px]" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 8 14">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 1 1.3 6.326a.91.91 0 0 0 0 1.348L7 13" />
                </svg>
                <p className="px-4 py-3.5 ">Backwards</p>
            </div>
        </div>
    )
}


export default CreateRoom