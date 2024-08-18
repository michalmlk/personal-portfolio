import { executeQuery } from '@datocms/cda-client';
import { HOME_QUERY } from '@/app/api/datocms/queries';

export const performRequest = (query, options?): any => {
    return executeQuery(query, {
        ...options,
        token: process.env.NEXT_DATOCMS_API_TOKEN,
        environment: process.env.NEXT_DATOCMS_ENVIRONMENT,
    });
};

export const generateSubscription = async (query: any) => {
    const initialData = await performRequest(query);

    return {
        query,
        initialData,
        environment: process.env.NEXT_DATOCMS_ENVIRONMENT,
        token: process.env.NEXT_DATOCMS_API_TOKEN,
    };
};
