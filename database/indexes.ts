import { connection } from 'mongoose';
import { ModelName } from '../types/model';
import { logger } from '../garage/log/logger';

export async function createIndexes(): Promise<void> {
    try {
        await connection
            .collection(ModelName.User)
            .createIndex(
                {
                    name: 'text',
                    key: 'text',
                },
                {
                    default_language: 'english',
                },
            )
            .catch(() => {});
    } catch (error: any) {
        logger.warn(`Error creating indexes: ${error.message}`);
    }
}
