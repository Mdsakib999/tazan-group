
import { TypeAnimation } from 'react-type-animation';

const HomeTypingText = () => {
 
    return (
        <TypeAnimation
          sequence={[
            // Same substring at the start will only be typed out once, initially
            '"Empowering Agriculture, Enriching Livestock, Your Gateway to Premium Agro Medicines at Affordable Prices! - Tazan Group"',
            6000, 
            '"Nurture Your Livestock, Pioneering Affordable Excellence in Agro Medicine Solutions! - Tazan Group"',
            6000,
            '"Where Quality Meets Affordability in Agro Medicine for a Thriving Livestock Industry! - Tazan Group"',
            6000,
           
          ]}
          wrapper="span"
          speed={20}
          style={{ fontSize: '1.5em', display: 'inline-block' }}
          repeat={Infinity}
        />
      );
};

export default HomeTypingText;