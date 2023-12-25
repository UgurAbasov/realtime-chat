import SearchComponentWithUsers from "@/containers/SearchWithUsers"
import SearchComponentWithoutUsers from "@/containers/SearchWithoutUsers"
import LargeWidthChat from "@/containers/LargeWidthChat"
import SmallWidthChat from "@/containers/SmallWidthChat"
import { useState, useRef, useEffect } from "react" 
import { clickState } from "../../../state/click"
import Loading from "@/loading"
import { Suspense } from "react"

const ChatHome = () => {
    // const boolean = false
    //     if(boolean){
    //         return <SearchComponentWithUsers />
    //     } else {
    //        return <SearchComponentWithoutUsers />
    //     } 
    const [width, setWidth] = useState(false)

    if (typeof window !== "undefined") {
        window.addEventListener('resize', function (event) {
            if (this.window.innerWidth < 862) {
                setWidth(true)
            } else {
                setWidth(false)
        }
        })
    }
    return (
        <>
{width ? (
  clickState.clickBol ? <SmallWidthChat /> : <SearchComponentWithUsers />
) : (
    <Suspense fallback={<p>Loading</p>}>
  <LargeWidthChat />
  </Suspense>
)}        </>
    )
    
}
export default ChatHome