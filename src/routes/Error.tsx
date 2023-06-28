import Container from '../layout/Container';
import { Link } from 'react-router-dom';

export default function Error() {
  return (
    <Container>
      <div className="m-auto w-96 h-96 bg-teal-500 text-slate-100 rounded-full flex flex-col gap-4 items-center justify-center">
        <h3 className="text-xl">Wrong way, stranger!</h3>
        <button className="inline-block border-2 rounded-lg px-4 py-2 hover:bg-teal-700">
          <Link to="/">Back Home</Link>
        </button>
      </div>
    </Container>
  );
}
