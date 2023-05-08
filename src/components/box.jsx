import { Link } from "react-router-dom";
export default function Box() {
    return (
        <>
            <div
                className="card-custom p-3 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
            >
                <h3 className="font-bold p-0 text-gray-900 dark:text-white">
                    Job Title
                </h3>

                <p
                    className="mb-3 font-normal text-gray-700 dark:text-gray-400 sub-title"
                >
                    2023-5-8
                </p>
                <p className="card-text mb-3">
                    Some quick example text to build on the card title and make up the
                    bulk of the card's content.
                </p>
                <div className="mt-5">
                    <Link to="/apply" className="btn inline-block mr-3">Apply</Link>
                    <Link to="/jobs" className="btn card-link inline-block">Read More</Link>
                </div>
            </div>
        </>
    );
}