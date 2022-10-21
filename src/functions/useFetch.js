import { useEffect, useState } from 'react';

const useFetch = (url) => {
  const [value, setValue] = useState('');
  // const [isPending, setIsPending] = useState(true);
  // const [error, setError] = useState(null);
  // const todoMemo = useMemo(() => value, [value])
  useEffect(() => {
    fetch(url)
      .then((res) => {
        if (!res.ok) {
          throw Error('could not fetch the data for that resource');
        }
        return res.json();
      })
      .then((data) => {
        // setIsPending(false);
        // setError(null);
        setValue(data);
      })
      .catch((err) => {
        setValue(err.message);
        // setIsPending(false);
        // setError(err.message);
      });
  }, []);

  return value;
};

export default useFetch;
