import React from 'react';
import './FAQ.css';
const FAQ = () => {
    return (
        <div className='container faq p-4'>
            <div>
            <h6>First Question: What is the different between props and state?</h6>
                <p>Ans: Props pass data from parent to child component, and read-only. state manages data within a component and can be updated by the component itself. Props are used for inner component communication, while state is for managing internal data.
                    </p>
            </div>
            <hr />
            <div>
                <h6>Second Question: How does work useState? </h6>
                <p>Ans:useState is a hook that enables functional components to manage state. it returns an array with the current state and a function to update it, allowing components to be dynamic and interactive. it simplifies state management.</p>
            </div>
            <hr />
            <div>
                <h6>Third Question: What kind of work can do useEffect without load data?</h6>
                <p>Ans: useEffect can handle lifecycle events and side effects like modifying the DOM, setting timers, or subscribing to events. its not just limited to data load.</p>
            </div>
            <hr />
            <div>
                <h6>Fourth Question: How does rect work?</h6>
                <p>Ans: React js uses virtual DOM to update UI efficiently. it creates reusable components and updates only the changed parts, making it fast. it's declarative, describing what UI should look lik, and React updates the DOM.</p>
            </div>
        </div>
    );
};

export default FAQ;