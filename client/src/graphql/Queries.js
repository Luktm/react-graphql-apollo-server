import { gql } from '@apollo/client';

/**
 * fetch query {
 *  getAllUser:
 * }
 * 
 * Like what in the express grahiql
 */

export const LOAD_USERS = gql`
    query {
        getAllUsers {
            id,
            firstName,
            email,
            password,
        }
    }
`;