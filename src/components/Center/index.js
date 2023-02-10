import { CenterSt } from "./styleCenter";

export function Center({children}){
    return(
        <CenterSt className="center">
            {children}
        </CenterSt>
    )
}