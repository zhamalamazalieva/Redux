import { INCREMENT, DECREMENT } from "./type";

export function increment(){
    return {
        type:INCREMENT
    }
}
export function decrement(){
    return {
        type:DECREMENT
    }
}
