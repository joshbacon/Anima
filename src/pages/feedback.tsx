import { Link } from "react-router-dom";

function Feedback() {    
    return <div>
        <Link to="/dashboard" className='m-3 px-3 py-2'>
            <h1 className="text-xl font-semibold">Back to Dashboard</h1>
        </Link>
        <h2>Feedback Form</h2>
        <p>Make a suggestion!</p>
    </div>
}

export default Feedback;