import React from 'react';
import './Blog.css';
const Blog = () => {
    return (
        <div>
            <div className="wrapper pt-24">
                <div className="item">
                    <h3>Difference between SQL and NoSQL?</h3>
                    <p>SQL databases are a type of system software that supports management, analysis, capturing and querying the structured data in a relational format.	NoSQL databases are a type of software that allows to maintain and retrieve structured, unstructured, polymorphic data for different purposes.</p>
                </div>
                <div className="item">
                    <h3>What is JWT, and how does it work?</h3>
                    <p>JWT, or JSON Web Token, is an open standard(RFC 7519) set of claims to share security information or authorization/authentication requests between a client and a server.Each JWT contains encoded JSON objects.JWTs are signed using a cryptographic algorithm by the token’s issuer to ensure that No one could alter the claims after the token is issued and later can be used by the receiving party to verify the token..</p>
                </div>
                <div className="item">
                    <h3> What is the difference between javascript and NodeJS?</h3>
                    <p>JavaScript is a simple programming language that can be used with any browser that has the JavaScript Engine installed.Node.js, on the other hand, is an interpreter or execution environment for the JavaScript programming language(Logged in).
                    </p>
                </div>
                <div className="item">
                    <h3>How does NodeJS handle multiple requests at the same time</h3>
                    <p>Node JS Platform uses “Single Threaded Event Loop” architecture to handle multiple concurrent clients. Then how it really handles concurrent client requests without using multiple threads.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Blog;