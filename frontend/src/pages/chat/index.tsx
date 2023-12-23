import SearchComponentWithUsers from "@/components/SearchWithUsers"
import SearchComponentWithoutUsers from "@/components/SearchWithoutUsers"
import LargeWidthChat from "@/components/LargeWidthChat"
import ChatComponent from "@/components/Chat"
import { useState, useRef, useEffect } from "react" 
import { clickState } from "../../../state/click"
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
  clickState.clickBol ? <ChatComponent /> : <SearchComponentWithUsers />
) : (
  <LargeWidthChat />
)}        </>
    )
    
}
export default ChatHome