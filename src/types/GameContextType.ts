import { Dispatch, SetStateAction } from "react";

export type GameListType = {
    id:number;
    username:string;
}

export type GameContextType = {
 listOfGameIDs: GameListType[];
 setListOfGameIDs: Dispatch<SetStateAction<GameListType[]>>;
 selectedGameIndex: number | null;
 setSelectedGameIndex: Dispatch<SetStateAction<number | null>>;
};
