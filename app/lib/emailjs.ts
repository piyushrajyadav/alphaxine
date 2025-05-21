import emailjs from '@emailjs/browser';

export const initEmailJS = () => {
  emailjs.init('6C3CBBPWxQRqmvn9_');
};

export const sendEmail = async (templateParams: {
  name: string;
  email: string;
  message: string;
  time?: string;
  to_name: string;
}) => {
  try {
  
    const response = await emailjs.send(
      'service_e77it0s',
      'template_km5hxmn', 
      templateParams,
      '6C3CBBPWxQRqmvn9_'
    );
    
    if (response.status === 200) {
      return { success: true, response };
    } else {
      console.error('EmailJS send failed with status:', response.status);
      return { success: false, error: 'Failed to send email' };
    }
  } catch (error) {
    console.error('EmailJS error:', error);
    return { success: false, error: error instanceof Error ? error.message : 'Unknown error occurred' };
  }
}; 