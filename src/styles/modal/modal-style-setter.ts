import Modal from "react-modal";
import Colors from "../../constants/colors";

export const setModalDefaultStyles = () => {
    Modal.defaultStyles = {
        content: {
            fontFamily: "'Poppins', sans-serif",
            fontSize: "20px",
            color: Colors.DARK_BLUE,
            fontWeight: 400,
            padding: "40px 50px",
            backgroundColor: Colors.WHITE,
            boxShadow: `0 0 30px ${Colors.BLACK_01}`,
            borderRadius: "20px",
            maxWidth: "70vw",
            maxHeight: "70vh",
            outline: "none"
        },
        overlay: {
            zIndex: 10,
            inset: "0px",
            position: "fixed",
            backdropFilter: "blur(10px)",
            backgroundColor: Colors.BLACK_03,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            padding: "100px"
        }
    }
}