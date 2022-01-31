import React from "react";
import * as firebase from "firebase";

// test("renders learn react link", () => {
//     render(<App />);
//     const linkElement = screen.getByText(/learn react/i);
//     expect(linkElement).toBeInTheDocument();
// });


// describe("Firebase App Init", () => {
//     it("Should create instance", async () => {
//         expect(auth).toBeCalled();
//     });
// });

test("Firebase initializeApp", () => {
    const firebase = require("firebase");
    jest.mock(firebase);

    const mockAuth = jest.fn();
    const authReturnValue = "auth";
    
    mockAuth.mockReturnValueOnce(authReturnValue);
    firebase.auth = mockAuth;
    const auth = require("./store/middleware/db/firestore");

    expect(auth.projectAuth).toEqual({"auth": authReturnValue})
})

// const createUserWithEmailAndPassword = jest.fn(() => {
//     return Promise.resolve("result of createUserWithEmailAndPassword")
// })
//
// const signInWithEmailAndPassword = jest.fn(() => {
//     return Promise.resolve("result of signInWithEmailAndPassword")
// })
//

//
// test(`${initApp}`, async () => {
//     expect(firebase.auth).toBeCalled();
// });
