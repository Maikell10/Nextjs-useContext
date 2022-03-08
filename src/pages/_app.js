import "../styles/globals.css";
import { TasksProvider } from "../context/taskContext";

function MyApp({ Component, pageProps }) {
    return (
        <TasksProvider>
            <Component {...pageProps} />
        </TasksProvider>
    );
}

export default MyApp;
