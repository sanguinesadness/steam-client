import Modal from "react-modal";

export const cookieStyle = (defaultStyles: Modal.Styles): Modal.Styles => {
    return {
        content: {
            ...defaultStyles.content,
            width: "1000px"
        }
    }
}