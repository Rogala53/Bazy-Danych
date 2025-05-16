export default function KeyRow({ keyData }) {
    return (
        <th style={styles.header}>
            {keyData}
        </th>
    )
}
const styles = {
    header: {
        padding: "10px",
        borderBottom: "1px solid red",
        textAlign: "left",
        fontWeight: "bold",
    }
}