import Navbar from "../components/Navbar"
import About from "../components/About"
import QuestBar from "../components/QuestBar";
import QuestList from "../components/QuestList";

const Page = () => {
    return <>
        <div className="flex flex-col">
            <Navbar/>
            <About/>
            <QuestBar/>
            <QuestList/>
        </div>
        
    </>
}

export default Page;