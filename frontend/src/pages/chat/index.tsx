import SearchComponentWithUsers from "@/components/SearchWithUsers"
import SearchComponentWithoutUsers from "@/components/SearchWithoutUsers"
const ChatHome = () => {
    const boolean = false
        if(boolean){
            return <SearchComponentWithUsers />
        } else {
           return <SearchComponentWithoutUsers />
        }
}
export default ChatHome