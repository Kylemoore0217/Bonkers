import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import { SHIBA, ZEPHYR, FIRE, LIGHTNING } from "./game/playerConfig";

const CharacterSelection = () => {

    useEffect(() => {

    }, [])
    return (<>
        <div id="score-board" className="w-3/4 md:w-2/3 lg:w-1/2 m-auto py-20">

            <div className="rounded-[50px] bg-[#361728cc] p-10">
                <div id="score-title" className="text-center text-[32px] md:text-[40px] sm:text-[50px] text-orange-300 my-5">
                    Select Characters
                </div>

            </div>

        </div>
        <div className="flex flex-row w-10/12 m-auto">
            <div className="hover:scale-[130%] hover:cursor-pointer">
                <Link to="/game" state={{ player: FIRE }}>
                    <img src={require('../assets/characters/Fire.png').default} />
                </Link>
            </div>
            <div className="hover:scale-[130%] hover:cursor-pointer">
                <Link to="/game" state={{ player: ZEPHYR }}>
                    <img src={require('../assets/characters/Zephyr.png').default} />
                </Link>
            </div>
            <div className="hover:scale-[130%] hover:cursor-pointer">
                <Link to="/game" state={{ player: LIGHTNING }}>
                    <img src={require('../assets/characters/Lightning.png').default} />
                </Link>
            </div>
            <div className="hover:scale-[130%] hover:cursor-pointer">
                <Link to="/game" state={{ player: SHIBA }}>
                    <img src={require('../assets/characters/Shiba Shiba.png').default} />
                </Link>
            </div>
        </div>
    </>);
}
export default CharacterSelection;