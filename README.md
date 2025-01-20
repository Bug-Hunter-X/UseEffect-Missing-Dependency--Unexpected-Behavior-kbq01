# React useEffect Missing Dependency Bug

This repository demonstrates a common bug in React applications involving the `useEffect` hook.  The bug arises from an incorrect dependency array, leading to unexpected behavior and potentially performance issues.

## Description

The `bug.js` file contains a component that uses `useEffect` to update a counter every second.  However, the dependency array is empty (`[]`), meaning the effect runs only once after the initial render. This is incorrect;  the effect should rerun whenever `count` changes to ensure the interval is properly updated.

## Solution

The `bugSolution.js` file demonstrates the correct implementation. By including `count` in the dependency array, the effect now runs whenever `count` updates, preventing the unintended behavior.

## How to Reproduce

1. Clone this repository.
2. Navigate to the project directory.
3. Run `npm install` to install dependencies.
4. Run `npm start` to start the development server.
5. Observe the unexpected behavior in `bug.js` and the correct behavior in `bugSolution.js`.
