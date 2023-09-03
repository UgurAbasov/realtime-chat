
const AddedUsers = () => {
    return (
        <div className="flex flex-col items-center justify-center h-screen">
            <h1 className=" text-[25px]">Added Users</h1>
            <div className=" w-[300px] break-words mt-[6px] mb-[12px] rounded-lg bg-white text-gray-500">
                <p className=" cursor-pointer p-3 hover:bg-[#dcdae3] rounded-lg">1. kkkkk</p>
                <p className=" cursor-pointer p-3 hover:bg-[#dcdae3] rounded-lg">2. Hello</p>
            </div>
            <button>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-[50px] ease-out duration-300  hover:text-blue-700  h-[50px]">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
            </button>

        </div>
    )
}
export default AddedUsers