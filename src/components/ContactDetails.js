import React, {useState} from 'react'
import styled from 'styled-components'
import Modal from 'react-modal'

const Container = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    width: 100%;
    margin: 0.5rem 0 0;
    padding: 0;
    border: 1px solid ${({theme}) => theme.colors.primaryGreen};  
    border-radius: 10px;
`
const H2 = styled.h2`
    height: 1.5rem;
    font-family: ${({theme}) => theme.fonts.text};
    font-size: 1.5rem;
    font-weight: bold;
    color: ${({theme}) => theme.colors.primaryBlack};
    margin: 1rem 0.5rem;
`
const Form = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    width: 100%;
    margin: 0;
    padding: 0;
`
const Label = styled.label`
    display: block;
    font-size: 1.2rem;
    font-weight: bold;
    font-family: ${({theme}) => theme.fonts.text};
    margin: 1rem 0.5rem;
`
const Input = styled.input`
    border: 1px solid ${({theme}) => theme.colors.primaryGreen};
    border-radius: 5px;
    width: 95%;
    height: 1.5rem;
    font-size: 1rem;
    font-weight: normal;
    color: ${({theme}) => theme.colors.primaryGreen};
    background-color: transparent;
    padding: 0.2rem;
    margin: 0 auto;
`
const Textarea = styled(Input).attrs({as: 'textarea'})`
    min-height: 5rem;
`
const Button = styled.button`
    border: none;
    border-radius: 10%;
    width: 10rem;
    height: 3rem;
    align-items: center;
    justify-content: center;
    font-size: 1.5rem;
    font-weight: bold;
    background-color: ${({theme}) => theme.colors.primaryBlack};
    color: ${({theme}) => theme.colors.primaryWhite};
    cursor: pointer;
    margin: 1rem auto;
    &:hover {
        background-color: ${({theme}) => theme.colors.primaryGreen};
    }
`
const ErrorText = styled.p`
    color: ${({ theme }) => theme.colors.primaryRed};
    font-size: 0.9rem;
    margin: 0.2rem 0;
`
// Modal styles
const ModalOverlay = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.5);
    display: flex;
    align-items: center;
    justify-content: center;
`;

const ModalContent = styled.div`
    position: relative;
    background: ${({ theme }) => theme.colors.primaryWhite};
    padding: 2rem;
    border-radius: 8px;
    max-width: 500px;
    width: 90%;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
`;

const ModalBody = styled.div`
    margin-bottom: 1rem;
    font-size: 1rem;
    color: ${({ theme }) => theme.colors.primaryBlack};
`;

const CloseButton = styled.button`
    position: absolute;
    top: 0.5rem;
    right: 0.5rem;
    background: none;
    border: none;
    font-size: 1.5rem;
    cursor: pointer;
    color: ${({ theme }) => theme.colors.primaryGreen};
    &:hover {
        color: ${({ theme }) => theme.colors.primaryBlack};
    }
`;
// Component starts here
function ContactDetails() {
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [modalContent, setModalContent] = useState('');

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        specialRequest: ''
    });
    const [errors, setErrors] = useState({
        name: '',
        email: '',
        phone: ''
    });
    // Validation functions
    const validateName = (name) => {
        return name.trim().length > 3 ? '' : 'Name must be longer than 3 characters.';
    }
    const validateEmail = (email) => {
        const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
        return emailPattern.test(email) ? '' : 'Invalid email address.';
    }
    const validatePhone = (phone) => {
        const phonePattern = /^\d{10}$/;
        return phonePattern.test(phone)? '' : 'Phone number must be 10 digits.';
    }
    // Event handlers
    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormData({...formData, [name]: value});
        let error = '';
        if (name === 'name') {
            error = validateName(value);
        } else if (name === 'email') {
            error = validateEmail(value);
        } else if (name === 'phone') {
            error = validatePhone(value);
        }
        setErrors({...errors, [name]: error});
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        if (!errors.name && !errors.email && !errors.phone) {
            setModalContent('Reserve successful. Thank you for your reservation.');
        } else {
            setModalContent('Please fill in the form correctly.');
        }
        setModalIsOpen(true);
    }
    // Component rendering
    return (
        <Container>
            <H2>Personal Information</H2>
            <Form onSubmit={handleSubmit}>
                <Label>Name
                    <Input 
                        type="text" 
                        name='name' 
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Name" 
                        required/>
                    {errors.name && <ErrorText>{errors.name}</ErrorText>}
                </Label>
                <Label>Email
                    <Input 
                        type="email" 
                        name='email' 
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Email" 
                        required/>
                    {errors.email && <ErrorText>{errors.email}</ErrorText>}
                </Label>
                <Label>Phone
                    <Input 
                        type="text" 
                        name='phone' 
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="Phone" 
                        required/>
                    {errors.phone && <ErrorText>{errors.phone}</ErrorText>}
                </Label>
                <Label>Special Request</Label>
                    <Textarea 
                        name='specialRequest' 
                        value={formData.specialRequest}
                        onChange={handleChange}
                        placeholder="Special Request">
                    </Textarea>
                <Button type='submit'>Reserve</Button>
            </Form>
            <Modal
                isOpen={modalIsOpen} 
                onRequestClose={() => setModalIsOpen(false)}
                style={{
                    overlay: {
                        backgroundColor: 'rgba(0, 0, 0, 0.5)'
                    },
                    content: {
                        position: 'relative',
                        inset: 'auto',
                        margin: 'auto',
                        maxWidth: '500px',
                        width: '90%',
                        padding: '0',
                        border: 'none',
                        background: 'none'
                    }
                }}
            >
                <ModalOverlay>
                    <ModalContent>
                        <CloseButton onClick={() => setModalIsOpen(false)}>&times;</CloseButton>
                        <ModalBody>{modalContent}</ModalBody>
                    </ModalContent>
                </ModalOverlay>
            </Modal>
        </Container>
    )
}

export default ContactDetails
