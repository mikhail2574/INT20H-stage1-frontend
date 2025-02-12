import React, { useState } from "react";
import QuestCard from "./QuestCard";
import { ChevronLeft, ChevronRight } from "lucide-react";

const quests = [
      { image: "src/assets/grey.png", title: "Який ти овоч?", rating: 4.3, taskImage: "src/assets/tasks.png", tasks: 12, time: 60, players: 18, author: "Turboyarik", authorAvatar: "/images/turbomisha-avatar.png" },
      { image: "src/assets/grey.png", title: "Який ти овоч?", rating: 4.3, taskImage: "src/assets/tasks.png", tasks: 12, time: 60, players: 18, author: "Turboyarik", authorAvatar: "/images/turbomisha-avatar.png" },
      { image: "src/assets/grey.png", title: "Який ти овоч?", rating: 4.3, taskImage: "src/assets/tasks.png", tasks: 12, time: 60, players: 18, author: "Turboyarik", authorAvatar: "/images/turbomisha-avatar.png" },
      { image: "src/assets/grey.png", title: "Який ти овоч?", rating: 4.3, taskImage: "src/assets/tasks.png", tasks: 12, time: 60, players: 18, author: "Turboyarik", authorAvatar: "/images/turbomisha-avatar.png" },
      { image: "src/assets/grey.png", title: "Який ти овоч?", rating: 4.3, taskImage: "src/assets/tasks.png", tasks: 12, time: 60, players: 18, author: "Turboyarik", authorAvatar: "/images/turbomisha-avatar.png" },
      { image: "src/assets/grey.png", title: "Який ти овоч?", rating: 4.3, taskImage: "src/assets/tasks.png", tasks: 12, time: 60, players: 18, author: "Turboyarik", authorAvatar: "/images/turbomisha-avatar.png" },
      { image: "src/assets/grey.png", title: "Який ти овоч?", rating: 4.3, taskImage: "src/assets/tasks.png", tasks: 12, time: 60, players: 18, author: "Turboyarik", authorAvatar: "/images/turbomisha-avatar.png" },
      { image: "src/assets/grey.png", title: "Який ти овоч?", rating: 4.3, taskImage: "src/assets/tasks.png", tasks: 12, time: 60, players: 18, author: "Turboyarik", authorAvatar: "/images/turbomisha-avatar.png" },
      { image: "src/assets/grey.png", title: "Який ти овоч?", rating: 4.3, taskImage: "src/assets/tasks.png", tasks: 12, time: 60, players: 18, author: "Turboyarik", authorAvatar: "/images/turbomisha-avatar.png" },
      { image: "src/assets/grey.png", title: "Який ти овоч?", rating: 4.3, taskImage: "src/assets/tasks.png", tasks: 12, time: 60, players: 18, author: "Turboyarik", authorAvatar: "/images/turbomisha-avatar.png" },
      { image: "src/assets/grey.png", title: "Який ти овоч?", rating: 4.3, taskImage: "src/assets/tasks.png", tasks: 12, time: 60, players: 18, author: "Turboyarik", authorAvatar: "/images/turbomisha-avatar.png" },
      { image: "src/assets/grey.png", title: "Який ти овоч?", rating: 4.3, taskImage: "src/assets/tasks.png", tasks: 12, time: 60, players: 18, author: "Turboyarik", authorAvatar: "/images/turbomisha-avatar.png" },
      { image: "src/assets/grey.png", title: "Який ти овоч?", rating: 4.3, taskImage: "src/assets/tasks.png", tasks: 12, time: 60, players: 18, author: "Turboyarik", authorAvatar: "/images/turbomisha-avatar.png" },
      { image: "src/assets/grey.png", title: "Який ти овоч?", rating: 4.3, taskImage: "src/assets/tasks.png", tasks: 12, time: 60, players: 18, author: "Turboyarik", authorAvatar: "/images/turbomisha-avatar.png" },
      { image: "src/assets/grey.png", title: "Який ти овоч?", rating: 4.3, taskImage: "src/assets/tasks.png", tasks: 12, time: 60, players: 18, author: "Turboyarik", authorAvatar: "/images/turbomisha-avatar.png" },
      { image: "src/assets/grey.png", title: "Який ти овоч?", rating: 4.3, taskImage: "src/assets/tasks.png", tasks: 12, time: 60, players: 18, author: "Turboyarik", authorAvatar: "/images/turbomisha-avatar.png" },
      { image: "src/assets/grey.png", title: "Який ти овоч?", rating: 4.3, taskImage: "src/assets/tasks.png", tasks: 12, time: 60, players: 18, author: "Turboyarik", authorAvatar: "/images/turbomisha-avatar.png" },
      { image: "src/assets/grey.png", title: "Який ти овоч?", rating: 4.3, taskImage: "src/assets/tasks.png", tasks: 12, time: 60, players: 18, author: "Turboyarik", authorAvatar: "/images/turbomisha-avatar.png" },
      { image: "src/assets/grey.png", title: "Який ти овоч?", rating: 4.3, taskImage: "src/assets/tasks.png", tasks: 12, time: 60, players: 18, author: "Turboyarik", authorAvatar: "/images/turbomisha-avatar.png" },
      { image: "src/assets/grey.png", title: "Який ти овоч?", rating: 4.3, taskImage: "src/assets/tasks.png", tasks: 12, time: 60, players: 18, author: "Turboyarik", authorAvatar: "/images/turbomisha-avatar.png" },
      { image: "src/assets/grey.png", title: "Який ти овоч?", rating: 4.3, taskImage: "src/assets/tasks.png", tasks: 12, time: 60, players: 18, author: "Turboyarik", authorAvatar: "/images/turbomisha-avatar.png" },
      { image: "src/assets/grey.png", title: "Який ти овоч?", rating: 4.3, taskImage: "src/assets/tasks.png", tasks: 12, time: 60, players: 18, author: "Turboyarik", authorAvatar: "/images/turbomisha-avatar.png" },
      { image: "src/assets/grey.png", title: "Який ти овоч?", rating: 4.3, taskImage: "src/assets/tasks.png", tasks: 12, time: 60, players: 18, author: "Turboyarik", authorAvatar: "/images/turbomisha-avatar.png" },
      { image: "src/assets/grey.png", title: "Який ти овоч?", rating: 4.3, taskImage: "src/assets/tasks.png", tasks: 12, time: 60, players: 18, author: "Turboyarik", authorAvatar: "/images/turbomisha-avatar.png" },
      { image: "src/assets/grey.png", title: "Який ти овоч?", rating: 4.3, taskImage: "src/assets/tasks.png", tasks: 12, time: 60, players: 18, author: "Turboyarik", authorAvatar: "/images/turbomisha-avatar.png" },
      { image: "src/assets/grey.png", title: "Який ти овоч?", rating: 4.3, taskImage: "src/assets/tasks.png", tasks: 12, time: 60, players: 18, author: "Turboyarik", authorAvatar: "/images/turbomisha-avatar.png" },
      { image: "src/assets/grey.png", title: "Який ти овоч?", rating: 4.3, taskImage: "src/assets/tasks.png", tasks: 12, time: 60, players: 18, author: "Turboyarik", authorAvatar: "/images/turbomisha-avatar.png" },
      { image: "src/assets/grey.png", title: "Який ти овоч?", rating: 4.3, taskImage: "src/assets/tasks.png", tasks: 12, time: 60, players: 18, author: "Turboyarik", authorAvatar: "/images/turbomisha-avatar.png" },
      { image: "src/assets/grey.png", title: "Який ти овоч?", rating: 4.3, taskImage: "src/assets/tasks.png", tasks: 12, time: 60, players: 18, author: "Turboyarik", authorAvatar: "/images/turbomisha-avatar.png" },
      { image: "src/assets/grey.png", title: "Який ти овоч?", rating: 4.3, taskImage: "src/assets/tasks.png", tasks: 12, time: 60, players: 18, author: "Turboyarik", authorAvatar: "/images/turbomisha-avatar.png" },
      { image: "src/assets/grey.png", title: "Який ти овоч?", rating: 4.3, taskImage: "src/assets/tasks.png", tasks: 12, time: 60, players: 18, author: "Turboyarik", authorAvatar: "/images/turbomisha-avatar.png" },
      { image: "src/assets/grey.png", title: "Який ти овоч?", rating: 4.3, taskImage: "src/assets/tasks.png", tasks: 12, time: 60, players: 18, author: "Turboyarik", authorAvatar: "/images/turbomisha-avatar.png" },
      { image: "src/assets/grey.png", title: "Який ти овоч?", rating: 4.3, taskImage: "src/assets/tasks.png", tasks: 12, time: 60, players: 18, author: "Turboyarik", authorAvatar: "/images/turbomisha-avatar.png" },
      { image: "src/assets/grey.png", title: "Який ти овоч?", rating: 4.3, taskImage: "src/assets/tasks.png", tasks: 12, time: 60, players: 18, author: "Turboyarik", authorAvatar: "/images/turbomisha-avatar.png" },

];

const ITEMS_PER_PAGE = 16;

const QuestList: React.FC = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const totalPages = Math.ceil(quests.length / ITEMS_PER_PAGE);

    const paginatedQuests = quests.slice(
        (currentPage - 1) * ITEMS_PER_PAGE,
        currentPage * ITEMS_PER_PAGE
    );

    const [isHoveredPrev, setIsHoveredPrev] = useState(false);
    const [isHoveredNext, setIsHoveredNext] = useState(false);
    const [isHoveredPage, setIsHoveredPage] = useState<number | null>(null);

    const goToPage = (page: number) => {
        if (page >= 1 && page <= totalPages) {
        setCurrentPage(page);
        }
    };

    const buttonStyle = {
        padding: "0.5rem",
        borderRadius: "50%",
        backgroundColor: "transparent",
        color: "#2F6ADC",
        border: "none",
        width: "40px",
        height: "40px",
    };

    const hoverStyle = {
        backgroundColor: "#2F6ADC",
        color: "#ffffff",
        cursor: "pointer",
    };

    const activeStyle = {
        backgroundImage: "linear-gradient(45deg, #2F6ADC, #B163FF)",
        animation: "move 4s ease infinite",
        backgroundSize: "300% 300%",
        color: "#fff",
    };

    const keyframes = `
        @keyframes move {
        0% {
            background-position: 0 0;
        }
        25% {
            background-position: 100% 0;
        }
        50% {
            background-position: 100% 100%;
        }
        75% {
            background-position: 0 100%;
        }
        100% {
            background-position: 0 0;
        }
    `;

    return (
        <div className="flex flex-col items-center bg-black">
        
            <div className="grid gap-10 grid-cols-4">
                {paginatedQuests.map((quest, index) => (
                    <QuestCard key={index} {...quest} />
                ))}
            </div>
    
            {totalPages > 1 && (
                <div className="flex gap-4 items-center text-white" style={{marginTop: "24px", marginBottom: "24px"}}>
                    <button
                        onClick={() => goToPage(currentPage - 1)}
                        disabled={currentPage === 1}
                        style={{
                            ...buttonStyle,
                            opacity: currentPage === 1 ? 0.5 : 1,
                            ...(isHoveredPrev ? hoverStyle : {}),
                        }}
                        onMouseEnter={() => setIsHoveredPrev(true)}
                        onMouseLeave={() => setIsHoveredPrev(false)}
                    >
                        <ChevronLeft size={20} />
                    </button>
        
                    {[...Array(totalPages)].map((_, i) => (
                        <button
                        key={i}
                        onClick={() => goToPage(i + 1)}
                        style={{
                            ...buttonStyle,
                            ...(currentPage === i + 1 ? activeStyle : {}),
                            ...(isHoveredPage === i ? hoverStyle : {}),
                        }}
                        onMouseEnter={() => setIsHoveredPage(i)}
                        onMouseLeave={() => setIsHoveredPage(null)}
                        >
                        {i + 1}
                        </button>
                    ))}
            
                    <button
                        onClick={() => goToPage(currentPage + 1)}
                        disabled={currentPage === totalPages}
                        style={{
                        ...buttonStyle,
                        opacity: currentPage === totalPages ? 0.5 : 1,
                        ...(isHoveredNext ? hoverStyle : {}),
                        }}
                        onMouseEnter={() => setIsHoveredNext(true)}
                        onMouseLeave={() => setIsHoveredNext(false)}
                    >
                        <ChevronRight size={20} />
                    </button>
                </div>
            )}
        </div>
    );
};

export default QuestList;
