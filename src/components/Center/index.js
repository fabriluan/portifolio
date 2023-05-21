import { CenterSt } from "./styleCenter";

export function Center({children, classCenter}){
    return(
        <CenterSt className={ 'center' } >
            {children}
        </CenterSt>
    )
}