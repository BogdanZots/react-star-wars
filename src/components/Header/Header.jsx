import React, { useEffect , useState } from "react";
import s from "./Header.module.css";
import {NavLink} from "react-router-dom";
import imgDroid from "./img/droid.svg";
import imgLightsaber from "./img/lightsaber.svg";
import imgSpaceStation from "./img/space-station.svg"
import {useTheme, THEME_DARK, THEME_LIGHT, THEME_NEUTRAL} from "../../context/ThemeProvider"

const Header = () => {
    const isTheme = useTheme();
    const [icon,setIcon] = useState(imgSpaceStation)
    useEffect(()=>{
  switch(isTheme.theme) {
    case THEME_LIGHT :
      setIcon(imgLightsaber)
      break;
      case  THEME_DARK:
        setIcon(imgSpaceStation)
        break;
        case THEME_NEUTRAL :
          setIcon(imgDroid)
          break;
    default:
      break;
  }
    },[isTheme])
    return (
        <div className={s.container}>
          <img alt="logo" className={s.logo} src={icon}/>
            <ul className={s.list__container}>
                <li className={s.list__item}>
                    <NavLink to="/home" exact>
                        Home
                    </NavLink>
                </li>
                <li className={s.list__item}>
                    <NavLink to="/people/?page=1">
                        People
                    </NavLink>
                </li>
                <li className={s.list__item}>
                    <NavLink to="/favorite">
                        Favorite
                    </NavLink>
                </li>
                <li className={s.list__item}>
                    <NavLink to="/search">
                        Search
                    </NavLink>
                </li>
            </ul>
        </div>
    );
};

export default Header;
