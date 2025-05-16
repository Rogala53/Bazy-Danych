import MenuElement from './menuElement.jsx';
export default function TablesList({ data }) {
    return (
        <ul className="menu-list">
            {data && Array.isArray(data) && data.map((tableName, index) => (
                <MenuElement key={index} tableName={tableName} />
            ))}
        </ul>
    );
}