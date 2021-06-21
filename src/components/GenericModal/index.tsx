import Modal, { Props } from "react-modal";
import { useTheme } from "styled-components";

interface GenericModalProps extends Props {
  children: React.ReactNode;
  isOpen: boolean;
}

export const GenericModal = ({
  children,
  isOpen,
  onRequestClose,
}: GenericModalProps) => {
  const { colors } = useTheme();

  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
      backgroundColor: `${colors.shape}`,
      border: 0,
      borderRadius: 16
    },
    overlay: {
      backgroundColor: "rgba(0, 0, 0, 0.8)",
    },
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      style={customStyles}
      contentLabel="Example Modal"
      shouldCloseOnOverlayClick={true}
    >
      {children}
    </Modal>
  );
};
