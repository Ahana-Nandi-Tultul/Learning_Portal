import React from 'react';
import './Questions.css';
const Questions = () => {
    return (
        <div style={{marginBottom: "50px", width: "100%"}}>
            <h1 className='heading'>Answer of the Questions</h1>
            <div className='question'>
                <h2>Props vs state</h2>
                <p><strong>Ans: </strong>Props and state are both mechanisms of react. But those have differences such
                as Props are used to pased data from one component to another component. Props are unidirectional. Props
                are immutable means cannot be modified. Props are read-only. On the other hand, state are used to change the
                state of the website. State are mutable means can be modified. The state is both read and write.</p>
            </div>
            <div className='question'>
                <h2>How does useState work?</h2>
                <p><strong>Ans: </strong> 'useState' is a React Hook that returns an array with two values. First value
                is the current state and second value is a function that can change the state. useState allows to add state to functional
                component. This takes an initial state value as an argument and returns an updated state value whenever the setter function is called.</p>
            </div>
            <div className='question'>
                <h2>Purpose of useEffect other than fetching data.</h2>
                <p><strong>Ans: </strong> 'useEffect' in react is used to perform side effects in components.
                It takes two arguments. First one it an arrow function that performs different tasks such as
                retrieving data, direct DOM updates, and timers. The second argument is the dependancy. Sometime it can
                happen that the first argumented function has to depend on some property that is dependancy. and We need to pass
                that dependancy proporty. </p>
            </div>
            <div className='question'>
                <h2>How Does React work?</h2>
                <p><strong>Ans: </strong> React is one of the most popular JavaScript libraries created by Facebook.
                To explaining the working process of React: React creates a VIRTUAL DOM in memory. Wherever any changes is
                made to the website, React manipulate the virtual DOM in the memory and browser DOM changes only what needs to be changed.  </p>
            </div>
        </div>
    );
};

export default Questions;