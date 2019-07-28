import { WindowReducerTypes } from "../../types/window";

export function navbarTitleChange(title:string) {
    return async dispatch => {
        dispatch({
            type: "@window/navbarTitleChange" as WindowReducerTypes,
            payload: title
        })
    }
}