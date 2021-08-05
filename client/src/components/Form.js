import React, { useState } from "react";
import { CREATE_USER_MUTATION } from "../graphql/Mutation";
import { useMutation } from "@apollo/client";

function Form() {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    // createUser has to be same what written in server side mutation GraphQLObjectType
    const [ createUser,  { error }] = useMutation(CREATE_USER_MUTATION);

    const addUser = () => {
        // createUser containing variables, varibale contain what defined from server side of "arg: {}" property
        createUser({
            variables: {
                firstName: firstName,
                lastName: lastName,
                email: email,
                password: password,
            }
        });
    };

    return (
        <div>
            <input
                type="text"
                placeholder="First Name"
                onChange={(e) => {
                    setFirstName(e.target.value);
                }}
            />
            <input
                type="text"
                placeholder="Last Name"
                onChange={(e) => {
                    setLastName(e.target.value);
                }}
            />
            <input
                type="text"
                placeholder="Email"
                onChange={(e) => {
                    setEmail(e.target.value);
                }}
            />
            <input
                type="text"
                placeholder="Password"
                onChange={(e) => {
                    setPassword(e.target.value);
                }}
            />
            <button onClick={addUser}> Create User</button>
        </div>
    );
}

export default Form;
