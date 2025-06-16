import emailjs from "@emailjs/browser";

const options = {
    serviceId: "service_8wprlkp",
    templateId: "template_2t37zad",
    publicKey: "9ATrvBk3OoGzqbw7w",
}

class EmailService {
  constructor() {
    emailjs.init({ publicKey: options.publicKey,
        blockHeadless: true, 
        limitRate: {
        id: options.serviceId,
        throttle: 1000
    } });
  }

  async emailFrom(from, email, message) {
    try {
      const response = await emailjs.send(options.serviceId, options.templateId, {
        subject: "Contato do Portfólio",
        name: from,
        email: email,
        time: new Date().toISOString(),
        message: message
      });
      return response;
    } catch (error) {
      console.error("Failed to send email:", error);
      throw error;
    }
  }
}

export default EmailService;