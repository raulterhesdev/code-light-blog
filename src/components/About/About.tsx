import React from 'react';
// @ts-ignore
import portrait from '../../images/portrait.jpg';
import { SectionHeader } from '../Home/Home.styles';
import { ImageWrapper, Section, Wrapper } from './About.styles';

type AboutProps = {
  data: any;
};
const About: React.FC<AboutProps> = () => {
  return (
    <>
      <SectionHeader>About me</SectionHeader>
      <Wrapper>
        <Section>
          <h2>Who am I?</h2>
          <p>
            Hi!. My name is Raul Terhes. I am a 25 year old, currently living in
            Timisoara, Romania. I have a bachelor degree in Electronics and
            Telecommunications, but because of my passion to coding I chose a
            career in Web Development. I am currently working as a Frontend Web
            Developer for{' '}
            <a
              href='https://tolunacorporate.com/'
              target='_blank'
              rel='noopener noreferrer'
            >
              Toluna
            </a>
            . My hobbies are reading, listening to music, traveling and
            photography.
          </p>
          <h2>Why I'm doing this?</h2>
          <p>
            Over the years I found that the best way to know you really
            understand a topic is to explain it to somebody else. This may sound
            like a cliche but for me it always seemed to work. Whenever I had to
            explain something, everything I didn't know about the subject would
            come out and I could research it better.
          </p>
          <p>
            This is my journey in becoming better at my the things I am most
            passionate about.
          </p>
          <h2>What are you posting about?</h2>
          <p>Everything web development!</p>
          <p>
            Basically I love learning new things and improving already existing
            skills. So my goal is to create guides, tutorials and articles to
            help other develop their skills alongside me
          </p>
        </Section>
        <ImageWrapper>
          <img src={portrait}></img>
        </ImageWrapper>
      </Wrapper>
    </>
  );
};

export default About;
