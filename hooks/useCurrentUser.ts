import useSWR from 'swr';                 //for fetching data as it is similar to react query

import fetcher from '@/lib/fetcher';

const useCurrentUser = () => {                   // if data already exits it do not fetch it again
    const { data,error,isLoading,mutate} = useSWR('/api/current', fetcher);

    return {
        data,
        error,
        isLoading,
        mutate
    }
};

export default useCurrentUser;