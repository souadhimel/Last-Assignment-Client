import React from 'react';
import { Accordion } from 'react-bootstrap';
import { Rotate } from 'react-reveal';
import "./Blogs.css"

const Blogs = () => {
    return (
     <section style={{width: '80%', margin: '30px auto'}}>
   <Rotate left>  <Accordion defaultActiveKey="0">
  <Accordion.Item eventKey="0">
    <Accordion.Header>Question #1:How will you improve the performance of a React Application? </Accordion.Header>
    <Accordion.Body>
    <li>Keeping component state local where necessary.</li>
      <li>Memoizing React components to prevent unnecessary re-renders.</li>
      <li>Code-splitting in React using dynamic import()</li>
      <li>Windowing or list virtualization in React.</li>
      <li>Lazy loading images in React.</li>

    </Accordion.Body>
  </Accordion.Item>
  <Accordion.Item eventKey="1">
    <Accordion.Header>Question #2: What are the different ways to manage a state in a React application?</Accordion.Header>
    <Accordion.Body>
    React uses an observable object as the state that observes what changes are made to the state and helps the component behave accordingly. For example, if we update the state of any component like the following the webpage will not re-render itself because React State will not be able to detect the changes made
    </Accordion.Body>
  </Accordion.Item>
  <Accordion.Item eventKey="2">
    <Accordion.Header>Question #3:How does prototypical inheritance work?</Accordion.Header>
    <Accordion.Body>
    The Prototypal Inheritance is a feature in javascript used to add methods and properties in objects. It is a method by which an object can inherit the properties and methods of another object. Traditionally, in order to get and set the [[Prototype]] of an object, we use Object. getPrototypeOf and Object.
    </Accordion.Body>
  </Accordion.Item>
  <Accordion.Item eventKey="3">
    <Accordion.Header>Question #4:Why you do not set the state directly in React. For example, if you have const [products, setProducts] = useState([]). Why you do not set products = [...] instead, you use the setProducts? </Accordion.Header>
    <Accordion.Body>
    <li>Keeping component state local where necessary.</li>
      <li>Memoizing React components to prevent unnecessary re-renders.</li>
      <li>Code-splitting in React using dynamic import()</li>
      <li>Windowing or list virtualization in React.</li>
      <li>Lazy loading images in React.</li>

    </Accordion.Body>
  </Accordion.Item>
  <Accordion.Item eventKey="4">
    <Accordion.Header  >  Question #5:You have an array of products. Each product has a name, price, description, etc. How will you implement a search to find products by name?</Accordion.Header>
    <Accordion.Body>
    By doing destructruing properly
    </Accordion.Body>
  </Accordion.Item>
  <Accordion.Item eventKey="5">
    <Accordion.Header> Question #6:What is a unit test? Why should write unit tests?</Accordion.Header>
    <Accordion.Body>
    Unit tests are typically automated tests written and run by software developers to ensure that a section of an application (known as the "unit") meets its design and behaves as intended. In procedural programming, a unit could be an entire module, but it is more commonly an individual function or procedure.
    </Accordion.Body>
  </Accordion.Item>
</Accordion></Rotate>
     </section>
    );
};

export default Blogs;