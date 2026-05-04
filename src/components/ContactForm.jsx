import { useState } from "react"
import {
  Wrapper, FormBox, Title, FormGroup,
  Label, Input, Select, Textarea,
  SubmitButton, ErrorMsg
} from "../styles/Form"

const ContactForm = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    subject: "",
    message: ""
  })

  const [error, setError] = useState("")

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = () => {
    if (!formData.fullName || !formData.email || !formData.subject || !formData.message) {
      setError("All fields are required!")
      return
    }
    setError("")
    alert(`Form submitted!\n
      Name: ${formData.fullName}\n
      Email: ${formData.email}\n
      Subject: ${formData.subject}\n
      Message: ${formData.message}
    `)
    console.log(formData)
  }

  return (
    <Wrapper>
      <FormBox>
        <Title>Send Us a Message</Title>

        {error && <ErrorMsg>{error}</ErrorMsg>}

        <FormGroup>
          <Label>Full Name</Label>
          <Input
            type="text"
            name="fullName"
            placeholder="Full name"
            value={formData.fullName}
            onChange={handleChange}
          />
        </FormGroup>

        <FormGroup>
          <Label>Your Email</Label>
          <Input
            type="email"
            name="email"
            placeholder="Your email"
            value={formData.email}
            onChange={handleChange}
          />
        </FormGroup>

        <FormGroup>
          <Label>Subject</Label>
          <Select
            name="subject"
            value={formData.subject}
            onChange={handleChange}
          >
            <option value="">I want to post</option>
            <option value="general">General Inquiry</option>
            <option value="support">Support</option>
            <option value="feedback">Feedback</option>
            <option value="other">Other</option>
          </Select>
        </FormGroup>

        <FormGroup>
          <Label>Message</Label>
          <Textarea
            name="message"
            placeholder="Your message goes here..."
            value={formData.message}
            onChange={handleChange}
          />
        </FormGroup>

        <SubmitButton onClick={handleSubmit}>Submit form</SubmitButton>
      </FormBox>
    </Wrapper>
  )
}

export default ContactForm