import React from 'react'
import Showcase from '../../components/Showcase/Showcase'
import Showcase2 from '../../components/Showcase2/Showcase2'
import Testimonials from '../../components/Testimonials/Testimonials'
import Counts from '../../components/Counts/Counts'
import Socials from '../../components/Socials/Socials'
import ContactForm from '../../components/ContactForm/ContactForm'
import Content1 from '../../components/Content1/Content1'
import { useSelector } from 'react-redux'

export default function Home() {

  const language = useSelector(state => state.content.language)
  const text = useSelector(state => state.content.texts[language])


  return (
    <>
      <Content1 id="offers" data={text.content1} />
      <Showcase data={text.showcase} />
      <Content1 data={text.content2} />
      <Showcase2 data={text.showcase} />
      <Content1 id="candidates" data={text.content3} />
      <Testimonials id="testimonials" data={text.testimonials} />
      <Counts id="counts" data={text.counts} />
      <ContactForm id="contact" data={text.contacts} />
      <Socials id="socials" data={text.social} />
    </>
  )
}
