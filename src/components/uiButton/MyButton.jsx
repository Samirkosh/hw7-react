import styled from "styled-components";

const styleButton = (variant) => {
  switch (variant) {
    case "outlined": {
      return {
        width: "112px",
        height: "30px",
        backgroundColor: "white",
        color: "#1F6ED4",
        border: " 1px solid #1F6ED4",
        "&:hover": {
          backgroundColor: "white",
          border: "3px solid #1F6ED4",
          fontWeight: "600",
        },
        "&:active": {
          backgroundColor: "#1F6ED4",
          color: "white",
        },
        "&:disabled": {
          backgroundColor: "#C9C9C9",
        },
      };
    }

    case "contained": {
      return {
        backgroundColor: "#1F6ED4",
        "&:hover": {
          backgroundColor: "#4C94F0",
        },
        "&:active": {
          backgroundColor: "#0052BC",
        },
        "&:disabled": {
          backgroundColor: "#C9C9C9",
        },
      };
    }

    case "warning": {
      return {
        backgroundColor: "#F37705",
        "&:hover": {
          backgroundColor: "#FF912B",
          fontWeight: "600",
        },
        "&:active": {
          backgroundColor: "#CF6300",
        },
        "&:disabled": {
          backgroundColor: "#C9C9C9",
        },
      };
    }

    case "danger": {
      return {
        backgroundColor: "#DF2D2D",
        "&:hover": {
          backgroundColor: "#E54343",
          fontWeight: "600",
        },
        "&:active": {
          backgroundColor: "#C20B0B",
        },
        "&:disabled": {
          backgroundColor: "#C9C9C9",
        },
      };
    }
  }
};

export const MyButton = ({
  children,
  onClick,
  type = "button",
  disabled,
  variant = "contained",
}) => {
  return (
    <StyleButton
      onClick={onClick}
      disabled={disabled}
      type={type}
      variant={variant}
    >
      {children}
    </StyleButton>
  );
};

const StyleButton = styled.button`
  width: 102px;
  height: 25px;
  color: white;
  text-transform: uppercase;
  font-size: 12px;
  border-radius: 14px;
  font-weight: 500;
  border: none;
  ${({ variant }) => styleButton(variant)}
`;
