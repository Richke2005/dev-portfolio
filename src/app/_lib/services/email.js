
class EmailService {
  #serviceId;
  #templateId;
  #userId;
  constructor() {
    this.URL = "https://api.emailjs.com/api/v1.0/email/send";
    this.#serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
    this.#templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
    this.#userId = process.env.NEXT_PUBLIC_EMAILJS_USER_ID;
  }

  /**
   * Sends an email using the configured email service.
   *
   * @async
   * @param {string} from - The name of the sender.
   * @param {string} email - The sender's email address.
   * @param {string} message - The message content to be sent.
   * @returns {Promise<Object>} A promise that resolves with the result of the email sending operation, or rejects with an error.
   */
  async emailFrom(from, email, message) {
    const data = {
      service_id: this.#serviceId,
      template_id: this.#templateId,
      user_id: this.#userId,
      template_params: {
        subject: "Contato do portfolio",
        name: from,
        email: email,
        message: message,
        time: new Date().toLocaleString("pt-BR", {
          timeZone: "America/Sao_Paulo",
        }),
      },
    };

    try {
      const response = await fetch(this.URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data)
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

    } catch (error) {
      console.error({message: error});
      throw error;
    }
  }
}

export default EmailService;