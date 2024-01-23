import React from 'react';
import "./WellnessDetailsStyles.scss";
import WellnessDetailsData from './WellnessDetailsData';

export default function WellnessDetails() {
  return (
    <div className='wellnessdetails'>
      <h1>What is wellness?</h1>
      <p>Wellness is a holistic concept that encompasses various dimensions of health, aiming for an overall state of well-being. It goes beyond the absence of illness and emphasizes a balanced and fulfilling life across multiple aspects: 
        Physical Wellness, 
        Mental Wellness, 
        Emotional Wellness, 
        Social Wellness,
        Intellectual Wellness,
        Spiritual Wellness,
        Occupational Wellness,
        Environmental Wellness.
      </p>
      <WellnessDetailsData
            className='wellness-card'
           class='wellness-content'
            heading="Physical Wellness"
            head="Exercise Regularly:"
            text="Aim for at least 150 minutes of moderate aerobic activity or 75 minutes of vigorous activity per week."
            head2="Eat Well:"
            text2=" Consume a balanced diet rich in fruits, vegetables, lean proteins, and whole grains."
            head3="Get Enough Sleep:" 
            text3="Strive for 7-9 hours of quality sleep each night."
            head4="Stay Hydrated:"
            text4="Drink plenty of water throughout the day."
       />    
       <br></br>
       <WellnessDetailsData
            className='wellness-card'
           class='wellness-content'
            heading="Mental and Emotional Wellness"
            head="Practice Stress Management:"
            text="Engage in activities like meditation, yoga, or deep breathing exercises."
            head2="Seek Support:"
            text2=" Build a strong support network of friends, family, or professionals to talk to when needed."
            head3="Set Boundaries:" 
            text3="Learn to say no and prioritize your mental health by setting boundaries."
            head4="Practice Gratitude:"
            text4="Focus on things you are thankful for to boost your mood and perspective."
       />  
       <br></br>
       <WellnessDetailsData
            className='wellness-card'
           class='wellness-content'
            heading="Social Wellness"
            head="Cultivate Relationships: "
            text="Spend time with loved ones and nurture relationships that bring you joy and support."
            head2="Join Communities: "
            text2="Engage in groups or clubs with similar interests to build connections."
            head3="Communicate: " 
            text3="Be open and honest in your interactions with others."
       />
       <br></br>
       <WellnessDetailsData
            className='wellness-card'
           class='wellness-content'
            heading="Intellectual Wellness"
            head="Continue Learning: "
            text="Challenge your mind by learning new skills or hobbies."
            head2="Stay Curious:"
            text2=" Explore new ideas, read, or engage in intellectual conversations."
            head3="Problem-Solve: " 
            text3="Approach challenges as opportunities to learn and grow."
       />  
       <br></br>
       <WellnessDetailsData
            className='wellness-card'
           class='wellness-content'
            heading="Spiritual Wellness"
            head="Practice Mindfulness: "
            text="Engage in activities that bring you inner peace and reflection, like meditation or nature walks."
            head2="Connect with Beliefs:"
            text2="Explore and foster a sense of purpose or connection to something greater than yourself."
       />  
       <br></br>
       <WellnessDetailsData
            className='wellness-card'
           class='wellness-content'
            heading="Professional Wellness"
            head="Maintain Work-Life Balance: "
            text="Ensure time for both work and personal life to prevent burnout."
            head2="Set Goals:"
            text2="Have clear objectives to strive for and celebrate achievements."
       />  
       <br></br>
       <WellnessDetailsData
            className='wellness-card'
           class='wellness-content'
            heading="Environmental Wellness"
            head="Respect Nature: "
            text="Make choices that are environmentally friendly and sustainable."
            head2="Create a Comfortable Environment:"
            text2="Organize your living and working spaces to promote a sense of calm and order."
       />  
       <br></br>
      </div>
  )
}
