import {toaster} from "evergreen-ui";

export const showToaster = (msg, type = "notify") => {
    toaster[type](
        msg
    )
}