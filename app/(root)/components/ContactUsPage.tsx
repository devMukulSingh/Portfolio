import ContactForm from "./ContactForm"
import ContactLinks from "./ContactLinks"


const ContactUsPage = () => {

  return (
    <div className='flex h-screen items-center '>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-16'>
          <ContactLinks/>
          <ContactForm/>
        </div>
    </div>
  )
}

export default ContactUsPage