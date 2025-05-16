import { useState, useEffect} from "react";
import TablesList from "./tablesList";
import SignOutButton from "./signOutButton";
export default function Menu() {
    const username  = sessionStorage.getItem('username');
    const [data, setData] = useState("");
    const [error, setError] = useState(null);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('api/get_tables_names.php', {
                    method: "GET",
                });

                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }
                const result = await response.json();
                setData(result['tables']);
            } catch(error) {
                console.error("Wystąpił błąd podczas pobierania danych", error);
                setError(error.message);
            }
        }
        fetchData();
    }, []);
    return (
        <>
            {error && <p style={styles.error}>{error}</p>}
                <div>
                    <h1>Witaj, {username}!</h1>
                    <SignOutButton />
                    <TablesList data={data} />
                </div>
        </>
    );
}
const styles = {
    error: {
        color: "red",
        marginBottom: "20px",
    },
};

