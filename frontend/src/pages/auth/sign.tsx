import Link from "next/link"
import { useRouter } from "next/router"
import { useEffect, useState } from "react"
import getDifference from "@/utils/getDiff"
import refresh from "@/utils/refresh"
import checkAuth from "@/utils/checkAuth"
const SignUp = () => {
    const [value, setValue] = useState({})
    const [loading, setLoading] = useState(true)
    const router = useRouter()

    const onChange = (event: any) => {
        setValue({
            ...value,
            [event.target.id]: event.target.value
        })
    }
     const onClick = async (event: any) => {
        const response = fetch('http://localhost:4000/auth/sign', {
            method: "POST",
            headers: {
             "Content-Type": "application/json",
             "Access-Control-Allow-Origin": "<origin>"
            },
            body: JSON.stringify(value)
        })
        const data = (await response).json()
        data.then((result) => {
        localStorage.setItem('accessToken', result.accessToken)
        localStorage.setItem('refreshToken', result.refreshToken)
         router.push('/chat')
        })
     }
     
     useEffect(() => {
        async function fetching(){
            const data = await checkAuth().then((result) => {
                if(result === 0) {
                    setLoading(false)
                } else if(result === 1){
                    router.push('/chat')
                }
            })
        }
        fetching()
    }, [])


        return (
            <>
            {loading ? (
                        <div className="h-screen flex">
                        <svg className=" mx-auto my-auto" version="1.1" id="loader-1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                 width="40px" height="40px" viewBox="0 0 40 40" enable-background="new 0 0 40 40" xmlSpace="preserve">
                <path opacity="0.2" fill="#000" d="M20.201,5.169c-8.254,0-14.946,6.692-14.946,14.946c0,8.255,6.692,14.946,14.946,14.946
                  s14.946-6.691,14.946-14.946C35.146,11.861,28.455,5.169,20.201,5.169z M20.201,31.749c-6.425,0-11.634-5.208-11.634-11.634
                  c0-6.425,5.209-11.634,11.634-11.634c6.425,0,11.633,5.209,11.633,11.634C31.834,26.541,26.626,31.749,20.201,31.749z"/>
                <path fill="#000" d="M26.013,10.047l1.654-2.866c-2.198-1.272-4.743-2.012-7.466-2.012h0v3.312h0
                  C22.32,8.481,24.301,9.057,26.013,10.047z">
                  <animateTransform attributeType="xml"
                    attributeName="transform"
                    type="rotate"
                    from="0 20 20"
                    to="360 20 20"
                    dur="0.5s"
                    repeatCount="indefinite"/>
                  </path>
                </svg>
              </div>
            ) : (
                <div className=" flex flex-col items-center justify-center h-screen">
                <h1 className=" mb-[3px] text-center sm:text-[30px] text-xl   text text-[#444053]">Welcome</h1>
                <div className=" mb-[24px] mr-auto ml-auto  break-all sm:w-[230px] w-[188px]">
                    <p className="text-[#716D7D] sm:text-[20px] text-center">
                        Create account for talking with people
                    </p>
                </div>
                <div className=" mr-auto ml-auto w-[278px] sm:w-[350px]">
                    <input type="text"  id="name" onChange={onChange} className=" mb-[17px] w-[278px] sm:w-[350px] h-[42px] border-none p-2 rounded-lg focus:outline-none focus:border-blue-700 focus:ring-blue-700" placeholder="username" />
                    <input type="email" id='email'onChange={onChange} className=" mb-[17px] w-[278px] sm:w-[350px] h-[42px] border-none p-2 rounded-lg focus:outline-none focus:border-blue-700 focus:ring-blue-700" placeholder="email" />
                    <input type="password" id="password" onChange={onChange} className=" mb-[4px] w-[278px] sm:w-[350px] h-[42px] border-none p-2 rounded-lg focus:outline-none focus:border-blue-700 focus:ring-blue-700" placeholder="password" />
                    <h1 className=" mb-[20px] text-gray-400">You already have an account <Link href='/auth/login' className=" text-black">Login</Link> ?</h1>
                    <button type="button" onClick={onClick} className="w-[278px] sm:w-[350px] h-[42px] text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Sign Up</button>
                    <button type="button" className="w-[278px] sm:w-[350px] text-white bg-[#24292F] hover:bg-[#24292F]/90 focus:ring-4 focus:outline-none focus:ring-[#24292F]/50 font-medium rounded-lg text-sm px-5 py-2.5 inline-flex items-center dark:focus:ring-gray-500 dark:hover:bg-[#050708]/30 mr-2 mb-2">
                        <div className=" flex justify-center items-center w-full">
                            <svg className="w-4 h-4 mr-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                <path fill-rule="evenodd" d="M10 .333A9.911 9.911 0 0 0 6.866 19.65c.5.092.678-.215.678-.477 0-.237-.01-1.017-.014-1.845-2.757.6-3.338-1.169-3.338-1.169a2.627 2.627 0 0 0-1.1-1.451c-.9-.615.07-.6.07-.6a2.084 2.084 0 0 1 1.518 1.021 2.11 2.11 0 0 0 2.884.823c.044-.503.268-.973.63-1.325-2.2-.25-4.516-1.1-4.516-4.9A3.832 3.832 0 0 1 4.7 7.068a3.56 3.56 0 0 1 .095-2.623s.832-.266 2.726 1.016a9.409 9.409 0 0 1 4.962 0c1.89-1.282 2.717-1.016 2.717-1.016.366.83.402 1.768.1 2.623a3.827 3.827 0 0 1 1.02 2.659c0 3.807-2.319 4.644-4.525 4.889a2.366 2.366 0 0 1 .673 1.834c0 1.326-.012 2.394-.012 2.72 0 .263.18.572.681.475A9.911 9.911 0 0 0 10 .333Z" clip-rule="evenodd" />
                            </svg>
                            Sign in with Github
                        </div>
                    </button>
                    <button type="button" className="text-white w-[278px] sm:w-[350px] bg-[#4285F4] hover:bg-[#4285F4]/90 focus:ring-4 focus:outline-none focus:ring-[#4285F4]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#4285F4]/55 mr-2 mb-2">
                        <div className=" flex justify-center items-center w-full">
                            <svg className="w-4 h-4 mr-[8px]" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 19">
                                <path fill-rule="evenodd" d="M8.842 18.083a8.8 8.8 0 0 1-8.65-8.948 8.841 8.841 0 0 1 8.8-8.652h.153a8.464 8.464 0 0 1 5.7 2.257l-2.193 2.038A5.27 5.27 0 0 0 9.09 3.4a5.882 5.882 0 0 0-.2 11.76h.124a5.091 5.091 0 0 0 5.248-4.057L14.3 11H9V8h8.34c.066.543.095 1.09.088 1.636-.086 5.053-3.463 8.449-8.4 8.449l-.186-.002Z" clip-rule="evenodd" />
                            </svg>
                            Sign in with Google
                        </div>
                    </button>
                </div>
            </div>
            )}
            </>
        )
}     


export default SignUp