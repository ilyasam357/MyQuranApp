import { useContext } from "react"
import { Theme } from "../../context/DarkMode"


function CardDark({children}){
    const {isDark }= useContext(Theme)

    return(
        <div className={isDark?'dark':''}>
        {children}
      </div>
    )
}

export default CardDark