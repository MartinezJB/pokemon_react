import { useState } from "react";
import { Movement } from "./game_scripts/movements";
import { typeAdapter } from "./game_scripts/typeAdapter"

export function useMove(name, _type, damage, pp) {
    const [type, setType] = useState(typeAdapter(_type))
    const [move, setPoke] = useState(new Movement(name, type, damage, pp))


    return move
}