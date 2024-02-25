import Badge from "react-bootstrap/Badge";

const Alert = ({children, color}) => {
    return (
        <>
        <p>
            <Badge bg={color}>{children}</Badge>
        </p>
        </>
    );
};

export default Alert;