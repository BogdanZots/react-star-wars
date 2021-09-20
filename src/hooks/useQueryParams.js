import { useLocation } from "react-router"

export const useQueryParams = () =>{
    console.log('update')
    return new URLSearchParams(useLocation().search); // смотрит на наш url , там есть вся инфа , получем через search qury параметр
}