import React from 'react';
import Navbar from './Navbar';
import HeadingWithButton from './HeadingWithButton';
import Card from './Card';
import Slider from './Slider';
import Footer from './Footer';

function App() {
  return (
    <div className="container">
      <Navbar />
      <h1>Hi there!!!</h1>
      <HeadingWithButton title="Our Cards-1" buttonText="See More" />
      <div className="cards-container">
        <Card imageSrc="https://via.placeholder.com/150" title="Card 1" />
        <Card imageSrc="https://via.placeholder.com/150" title="Card 2" />
        <Card imageSrc="https://via.placeholder.com/150" title="Card 3" />
        <Card imageSrc="https://via.placeholder.com/150" title="Card 4" />
        <Card imageSrc="https://via.placeholder.com/150" title="Card 5" />
      </div>
      <Slider />
      <HeadingWithButton title="Our Cards-2" buttonText="See More" />
      <div className="cards-container">
        <Card imageSrc="https://via.placeholder.com/150" title="Card 1" />
        <Card imageSrc="https://via.placeholder.com/150" title="Card 2" />
        <Card imageSrc="https://via.placeholder.com/150" title="Card 3" />
        <Card imageSrc="https://via.placeholder.com/150" title="Card 4" />
        <Card imageSrc="https://via.placeholder.com/150" title="Card 5" />
      </div>
      <HeadingWithButton title="Our Cards-3" buttonText="See More" />
      <div className="cards-container">
        <Card imageSrc="https://via.placeholder.com/150" title="Card 1" />
        <Card imageSrc="https://via.placeholder.com/150" title="Card 2" />
        <Card imageSrc="https://via.placeholder.com/150" title="Card 3" />
        <Card imageSrc="https://via.placeholder.com/150" title="Card 4" />
        <Card imageSrc="https://via.placeholder.com/150" title="Card 5" />
      </div>
      <Footer />
    </div>
  );
}

export default App;