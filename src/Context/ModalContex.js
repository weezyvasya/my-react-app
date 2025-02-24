import { createContext } from "react";

const ModalContext = createContext({
    modal: false,
    closeOpenModalWindow: function() {}
 }
)
export { ModalContext }