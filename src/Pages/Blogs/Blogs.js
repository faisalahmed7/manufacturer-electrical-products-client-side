import React from 'react';
import Footer from '../Shared/Footer';

const Blogs = () => {
    return (
        <div>
            <h2 className='mt-10 text-center text-primary font-bold mb-10 text-5xl '>Question and Answers</h2>
            <div className='text-center px-2'>
                <h5 className='text-2xl text-secondary mb-4 text-justify mt-4'> 1. How does prototypical inheritance work?</h5>
                <p className='text-justify '> The prototypal inheritance is a special feature in JS. It has been used to add methods and properties in objects like the other OOP programming language. It is a special method by an object can get the value or data from other properties and methods of others object. Basically to get the value , we use the Object.</p>
            </div>
            <div className='text-center px-2'>
                <h5 className='text-2xl text-secondary mb-4 text-justify mt-4'> 2. What are the different ways to manage a state in a React application?</h5>
                <p className='text-justify '> Four kinds of React state to manage and they are, first Local state and it is those data which we manage in one or another component. Second is Global State  and  its data is manageable by multiple components.  Third is Server State and its data comes from am outside or external server which is displayed in the UI.The last is URL State and it is exist on our URLs , which is included in the pathname and the query parameters.</p>
            </div>
            <div className='text-center px-2'>
                <h5 className='text-2xl text-secondary mb-4 text-justify mt-4'> 3. How will you improve the performance of a React Application?</h5>
                <p className='text-justify '> Using memo and PureComponent . Have to avoid Anonymous Function. Avoid Object Literals. Use Lazy Loading and also the React.Suspense on the React App. Avoid Frequent Mounting.</p>
            </div>
            <div className='text-center px-2'>
                <h5 className='text-2xl text-secondary mb-4 text-justify mt-4'>4.  Why you do not set the state directly in React. For example, if you have const [products, setProducts] = useState([]). Why you do not set products = [...] instead, you use the setProducts</h5>
                <p className='text-justify '>  In React application, it always check the previous state of the component with the updated state. If there is anything new, it will re-render itself automatically. So it saves the time and the mistakes also. If you modify the state manually amd directly, it will hamper the process of re-rendering. For this, the component can behave unexpectedly.</p>
            </div>
            <div className='text-center px-2'>
                <h5 className='text-2xl text-secondary mb-4 text-justify mt-4'>5. What is a unit test? Why should write unit tests?</h5>
                <p className='text-justify '> The unit test is testing procedure for software developers in their software application. The main purpose for unit testing is to check all the individuals part can work as expected. By unit testing a software developer can easily get the quality of code, find the software bugs easily, facilities changes, can get the best design and also give a standard documentation.</p>
            </div>

            <div className='mt-10'>
                <Footer></Footer>
            </div>
        </div>
    );
};

export default Blogs;