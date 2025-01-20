import { Link, useRouteError } from "react-router-dom";


const ErrorPage = () => {
    const error = useRouteError();
    console.log(error);
    return (
        <div>
            <h2>Oops!!!</h2>
            <h3>{error.statusText || error.message}</h3>
            {
                error.status  === 404 && <div>
                    <h5>Go Back Where You From.</h5>
                    <Link to="/"><button>Home</button></Link>
                </div>
            }
        </div>
    );
};

export default ErrorPage;
