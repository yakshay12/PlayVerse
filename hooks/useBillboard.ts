import useSWR from 'swr';

import fetcher from '@/lib/fetcher';

const useBillboard = () => {
    const { data, error, isLoading } = useSWR('/api/random', fetcher, {
        revalidateIfState: false,
        revalidateOnFocus: false,
        revalidateReconnect: false,
    });

    return {
        data,
        error,
        isLoading
    }
}

export default useBillboard;