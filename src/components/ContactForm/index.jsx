'use client';

import React, { useState, useRef, useEffect } from 'react';
import { useRouter } from 'next/navigation'; // If you want to navigate after success
import { motion } from 'framer-motion';
import { FcCheckmark } from 'react-icons/fc';

import styles from './Contact.module.scss'; // your SASS module

export default function ContactForm() {
  const router = useRouter();

  // State for the form fields
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: 'Bookings',
    message: '',
  });

  // For user feedback messages
  const [validationMessage, setValidationMessage] = useState('');
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);

  // We’ll use a ref for the form element (to leverage built-in HTML validation)
  const formRef = useRef(null);

  // Handle changes in form inputs
  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  // Reset form state
  const resetForm = () => {
    setFormData({
      name: '',
      email: '',
      subject: 'Bookings',
      message: '',
    });
    // Clear the actual form’s inputs
    if (formRef.current) {
      formRef.current.reset();
    }
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Check HTML5 validation
    if (formRef.current.checkValidity()) {
      try {
        setIsButtonDisabled(true);

        // Make POST request to /api/contact
        const response = await fetch('/api/contact', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(formData),
        });

        if (!response.ok) {
          throw new Error(`Server error: ${response.status}`);
        }

        // Success: show confirmation, reset form, then optionally navigate away
        setValidationMessage(
          'Thank you for getting in touch! We will answer your email shortly.'
        );
        resetForm();

        // Example: navigate away after 3 seconds
        setTimeout(() => {
          router.push('/');
        }, 3000);

        // Re-enable button after some time if needed
        setTimeout(() => {
          setIsButtonDisabled(false);
        }, 30000);
      } catch (error) {
        console.error('Error submitting form:', error);
        setValidationMessage(
          'Oops! Something went wrong. Please try again later.'
        );
        setIsButtonDisabled(false);
      }
    } else {
      setValidationMessage(
        'It looks like you missed something. Please check all required fields.'
      );
    }
  };

  // Clear validationMessage after a delay
  useEffect(() => {
    if (!validationMessage) return;
    const timeoutId = setTimeout(() => {
      setValidationMessage('');
    }, 4000);
    return () => clearTimeout(timeoutId);
  }, [validationMessage]);

  return (
    <div className={styles.contact}>
      <motion.h2
        initial={{ x: -300, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.4, delay: 0.4, ease: 'easeOut' }}
      >
        Contact
      </motion.h2>
      <motion.h2
        initial={{ x: -300, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.4, delay: 0.6, ease: 'easeOut' }}
      >
        Workshops
      </motion.h2>
      <motion.h2
        initial={{ x: -300, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.4, delay: 0.8, ease: 'easeOut' }}
      >
        Bookings
      </motion.h2>
      <motion.h3
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.2, ease: 'easeOut' }}
      >
        Want to collaborate or book any services? Get in touch below!
      </motion.h3>

      {/* Form */}
      <motion.form
        className={styles.contact_form}
        noValidate
        ref={formRef}
        onSubmit={handleSubmit}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.4, ease: 'easeOut' }}
      >
        {/* Name */}
        <label>Name</label>
        <div className={styles.input_field}>
          <input
            type='text'
            name='name'
            value={formData.name}
            onChange={onChangeHandler}
            required
            minLength={3}
            maxLength={30}
          />
          <span className={styles.check_icon}>
            <FcCheckmark />
          </span>
        </div>

        {/* Email */}
        <label>Email</label>
        <div className={styles.input_field}>
          <input
            type='email'
            name='email'
            value={formData.email}
            onChange={onChangeHandler}
            required
          />
          <span className={styles.check_icon}>
            <FcCheckmark />
          </span>
        </div>

        {/* Subject (select) */}
        <label>Subject</label>
        <div className={styles.input_field}>
          <select
            name='subject'
            value={formData.subject}
            onChange={onChangeHandler}
            required
          >
            <option value='Bookings'>Bookings</option>
            <option value='Workshops'>Workshops</option>
            <option value='Contact'>Contact</option>
          </select>
          <span className={styles.check_icon}>
            <FcCheckmark />
          </span>
        </div>

        {/* Message */}
        <label>Message</label>
        <div className={styles.input_field}>
          <textarea
            type='textarea'
            name='message'
            value={formData.message}
            onChange={onChangeHandler}
            minLength={20}
            maxLength={200}
            required
            placeholder='Please share your question or request…'
          />
          <span className={styles.check_icon}>
            <FcCheckmark />
          </span>
        </div>

        {/* Submit */}
        <input
          className={styles.submit_btn}
          type='submit'
          name='submit'
          value='Submit'
          disabled={isButtonDisabled}
          style={{
            pointerEvents: isButtonDisabled ? 'none' : 'auto',
          }}
        />

        {/* Validation / status message */}
        <div className={styles.message}>{validationMessage}</div>
      </motion.form>
    </div>
  );
}
