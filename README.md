# NextAuth Session Undefined in getServerSideProps

This repository demonstrates a common issue when using NextAuth.js with `getServerSideProps` or similar functions.  The problem arises when the session object is unexpectedly undefined, even after authentication.

The `bug.js` file showcases the problem, while `bugSolution.js` provides a corrected implementation.

## Problem

The initial code attempts to access the session object from `getServerSideProps`. However, due to improper handling or timing issues, the session might be undefined, leading to errors or unexpected behavior.

## Solution

The solution involves ensuring proper data fetching and error handling. This often means explicitly checking if the session exists before attempting to access its properties.