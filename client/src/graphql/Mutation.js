import {gql} from '@apollo/client';

// first is function with type in it. second function was triggering mutation to server side
// first function has to generate dollar sign variable
export const CREATE_USER_MUTATION = gql`
    mutation createUser(
        $firstName: String!, $lastName: String!, $email: String!, $password: String!
        ) {
        createUser(
            firstName: $firstName, 
            lastName: $lastName,
            email: $email,
            password: $password

        ) {
            id
        }
    }
`;
