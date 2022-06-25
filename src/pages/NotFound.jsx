import { FaHome } from 'react-icons/fa';
import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <div id="notfound">
      <div className="notfound">
        <div className="notfound-404">
          <h1>404</h1>
          <h2>Page not found</h2>
        </div>
        <Link to="/" className="btn btn-primary btn-lg">
          <FaHome className="mr-2" />
          Back to Home
        </Link>
      </div>
    </div>
  );
}
