export default function TableRow( { tableRow }) {
    return (
        <tr style={styles.row}>
            {Object.values(tableRow).map((cell, cellIndex) => (
                <td key={cellIndex} style={styles.cell}>{cell === null ? "-" : String(cell)}</td>
            ))}
        </tr>
    );
}
const styles = {
    row: {
        borderBottom: "1px solid #ddd",
    },
    cell: {
        padding: "8px",
        textAlign: "left",
    }
};