import React from 'react';
import useForm from '../../hook/useForm';
import imgContact from '../../images/img-contact.png'
const Contact = (props: any) => {
    const {mt} = props.css
    const initialValues = {
        firstName: '',
        lastName: '',
        email: '',
        subject: '',
        inquiry: ''
    };
    const submitForm = (data) => {
        console.log('Form data:', data);
    };

    const { formData, handleChange, handleSubmit, errors } = useForm(initialValues, submitForm);

    return (
        <section id="contact" className={`${mt ? 'mt-60' : ''}`}>
            <div className="background-contact"></div>
            <div className="divContentContact">
                <img src={imgContact} alt="" className="picture-contact" />
                <div className="contentContact">
                    <div className="divTitleContact">
                        <div className="title">
                            Contact Us
                        </div>
                        <div className="sub-title">
                            Send your inquiry to
                            our expert team
                        </div>
                        <div className="content">
                            Lorem ipsum dolor sit amet nulla turapis tellus.
                        </div>
                    </div>

                    <form className="formContact" onSubmit={handleSubmit}>
                        <div className="nameInput">
                            <input type="text" name="firstName" value={formData.firstName} onChange={handleChange} className="fname inputContact" placeholder="First Name" required />
                            {/* {errors.firstName && <div className="error">{errors.firstName}</div>} */}
                            <input type="text" name="lastName" value={formData.lastName} onChange={handleChange} className="lname inputContact" placeholder="Last Name" required />
                            {/* {errors.lastName && <div className="error">{errors.lastName}</div>} */}
                        </div>
                        <input type="email" name="email" value={formData.email} onChange={handleChange} className="emailInput inputContact" placeholder="Email address" required />
                        {/* {errors.email && <div className="error">{errors.email}</div>} */}
                        <input type="text" name="subject" value={formData.subject} onChange={handleChange} className="subjectInput inputContact" placeholder="Subject message" required />
                        {/* {errors.subject && <div className="error">{errors.subject}</div>} */}
                        <input type="text" name="inquiry" value={formData.inquiry} onChange={handleChange} className="inquiryInput inputContact" placeholder="Inquiry" required />
                        {/* {errors.inquiry && <div className="error">{errors.inquiry}</div>} */}
                        <button className="btn btn-contact" type="submit">Send Message</button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Contact;
