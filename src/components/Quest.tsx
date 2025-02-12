import React from 'react';
import { Steps } from 'antd';

const Quest: React.FC = () => {
    return(
        <section className={`relative w-full h-screen mx-auto bg-black z-0 flex flex-col gap-10 items-center`}>
            <div>
            <Steps style={{color: "white"}}
                size="small"
                current={1}
                items={[
                {
                    title: 'Finished',
                },
                {
                    title: 'In Progress',
                },
                {
                    title: 'Waiting',
                },
                ]}
            />
            </div>
            <div>

            </div>
            <div className="min-h-24" style={{ padding: '4px', border: '1px solid rgba(178, 171, 177, 0.5)', borderRadius: '5px', width: '80%', color: 'white', textAlign: 'left',}}>
                <text className="text-white lg:text-[26px] sm:text-[22px] xs:text-[20px] text-[18px] lg:leading-[26px]" style={{margin:'8px'}}>
                    Тут завдання
                </text>
            </div>
            <div className="min-h-48" style={{ padding: '4px', border: '1px solid rgba(178, 171, 177, 0.5)', borderRadius: '5px', width: '80%', color: 'white', textAlign: 'left',}}>
                
            </div>
            <div className={`relative w-full mx-auto bg-black flex flex-row gap-72 items-center justify-center`}>
                <button style={{ opacity: "85%", backgroundColor: "#dddcfc", color: "black", fontWeight: "600", padding: "8px 24px", borderRadius: "10px", fontSize: "18px", boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)", width: "180px", cursor:"pointer" }}>
                &lt; Попереднє
                </button>
                <button style={{ opacity: "85%", backgroundColor: "#fcdcdc", color: "black", fontWeight: "600", padding: "8px 24px", borderRadius: "10px", fontSize: "18px", boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)", width: "200px", cursor:"pointer" }}>
                    Завершити тест
                </button>
                <button style={{ opacity: "85%", backgroundColor: "#dddcfc", color: "black", fontWeight: "600", padding: "8px 24px", borderRadius: "10px", fontSize: "18px", boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)", width: "180px", cursor:"pointer" }}>
                Наступне &gt;
                </button>
            </div>

        </section>
    );
};

export default Quest;
