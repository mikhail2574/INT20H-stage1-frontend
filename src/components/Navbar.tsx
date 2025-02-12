import logo from "../assets/logo.png";
import user from "../assets/user_icon.png";
import make_quest from "../assets/make_quest.png";

const Navbar = () => {
  return (
    <div className="fixed top-0 left-0 w-full h-16 flex justify-between z-50 flex-row" style={{background: "linear-gradient(to bottom, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.2))"}}>
        <div className="flex flex-row items-center gap-3" style={{ paddingLeft: '25px' }}>
            <img src={logo} alt="Logo" className="h-12 w-12 block"/>
            <p className="text-white text-[20px] font-bold flex ">MetaQuest</p>
        </div>
        <div className="flex flex-row items-center gap-6" style={{ paddingRight: '15px' }}>
            <p className="text-white text-[20px] font-bold flex cursor-pointer">Увійти</p>
            <img src={user} alt="User Icon" className="h-12 w-12 rounded-full" style={{ borderWidth: '2px', borderColor: 'white' }}/>
        </div>
    </div>
  );
};

export default Navbar;
