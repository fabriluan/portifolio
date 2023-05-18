import { CenterSt } from "./styleCenter";

export function Center({children, classCenter}){
    return(
        <CenterSt className={ classCenter } >
            {children}
        </CenterSt>
    )
}