import { Link } from "react-router-dom";

export default function MenuElement({ tableName }) {
    return (
        <li className="menu-item">
            <span style={styles.tableName}>{tableName}</span>
            <Link to={`/table/${tableName}`} style={styles.link}>Pokaż tabelę</Link>
        </li>
    );
}
const styles = {
    link: {
        display: "block",
        textDecoration: "none",
        color: "black",
        backgroundColor: "whitesmoke",
        borderRadius: "10px",
        padding: "10px",
        flex: "40%",
        float: "right",
    },
    tableName: {
        fontWeight: "bold",
        fontSize: "1.25em",
        textTransform: "uppercase",
    },
}