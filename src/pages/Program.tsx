import { useQuery } from '@tanstack/react-query';
import { getAttributes } from '../utils/getAttributes';

import Form from '../components/Form';
import Header from '../components/Header';

export default function Program() {
  const { isFetched, data: attributes } = useQuery(['attributes'], getAttributes);

  return (
    <div className="text-teal-900">
      <Header />
      <Form isFetched={isFetched} attributes={attributes} />
    </div>
  );
}
