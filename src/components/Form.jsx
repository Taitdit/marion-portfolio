import { useState } from "react";
import './Form.scss'

const initialFormData = {
  lastName: "",
  firstName: "",
  email: "",
  company: "",
  subject: "",
  message: "",
};

const Form = () => {
  const [formData, setFormData] = useState(initialFormData);
  const [errors, setErrors] = useState({});
  const [submitStatus, setSubmitStatus] = useState({
    type: "",
    message: "",
  });
  const [isSending, setIsSending] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((previousFormData) => ({
      ...previousFormData,
      [name]: value,
    }));

    // On retire l’erreur du champ dès que l’utilisateur recommence à écrire.
    if (errors[name]) {
      setErrors((previousErrors) => ({
        ...previousErrors,
        [name]: "",
      }));
    }

    if (submitStatus.type === "error") {
      setSubmitStatus({
        type: "",
        message: "",
      });
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.lastName.trim()) {
      newErrors.lastName = "Veuillez renseigner votre nom.";
    }

    if (!formData.firstName.trim()) {
      newErrors.firstName = "Veuillez renseigner votre prénom.";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Veuillez renseigner votre adresse e-mail.";
    } else {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

      if (!emailRegex.test(formData.email)) {
        newErrors.email = "Veuillez renseigner une adresse e-mail valide.";
      }
    }

    if (!formData.subject.trim()) {
      newErrors.subject = "Veuillez renseigner le sujet de votre message.";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Veuillez écrire votre message.";
    }

    return newErrors;
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const newErrors = validateForm();

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      setSubmitStatus({
        type: "error",
        message: "Veuillez remplir correctement les champs obligatoires.",
      });

      // Place le focus sur le premier champ invalide.
      const firstInvalidField = Object.keys(newErrors)[0];
      document.getElementById(firstInvalidField)?.focus();

      return;
    }

    setErrors({});
    setSubmitStatus({
      type: "",
      message: "",
    });
    setIsSending(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(
          data.message || "Une erreur est survenue pendant l’envoi."
        );
      }

      setFormData(initialFormData);

      setSubmitStatus({
        type: "success",
        message: "Votre message a bien été envoyé.",
      });
    } catch (error) {
      setSubmitStatus({
        type: "error",
        message:
          error.message ||
          "Impossible d’envoyer le message. Veuillez réessayer.",
      });
    } finally {
      setIsSending(false);
    }
  };

  const renderError = (fieldName) => {
    if (!errors[fieldName]) {
      return null;
    }

    return (
      <p className="form__field-error" id={`${fieldName}-error`}>
        {errors[fieldName]}
      </p>
    );
  };

  return (
    <section className="form">
      <div className="form__heading">
        <img src="/img/no-picture.webp" alt="picto contact - Marion Charbonnier" />

        <h2 className="form__title">
         Envoyez-moi un message
        </h2>
      </div>

      <form onSubmit={handleSubmit} noValidate>
        <div className="form__fields">
          <div className="form__field">
            <label htmlFor="lastName">
              Nom<span aria-hidden="true">*</span>
            </label>

            <input
              id="lastName"
              name="lastName"
              type="text"
              value={formData.lastName}
              onChange={handleChange}
              autoComplete="family-name"
              aria-required="true"
              aria-invalid={Boolean(errors.lastName)}
              aria-describedby={
                errors.lastName ? "lastName-error" : undefined
              }
            />

            {renderError("lastName")}
          </div>

          <div className="form__field">
            <label htmlFor="firstName">
              Prénom<span aria-hidden="true">*</span>
            </label>

            <input
              id="firstName"
              name="firstName"
              type="text"
              value={formData.firstName}
              onChange={handleChange}
              autoComplete="given-name"
              aria-required="true"
              aria-invalid={Boolean(errors.firstName)}
              aria-describedby={
                errors.firstName ? "firstName-error" : undefined
              }
            />

            {renderError("firstName")}
          </div>

          <div className="form__field">
            <label htmlFor="email">
              E-mail<span aria-hidden="true">*</span>
            </label>

            <input
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              autoComplete="email"
              aria-required="true"
              aria-invalid={Boolean(errors.email)}
              aria-describedby={errors.email ? "email-error" : undefined}
            />

            {renderError("email")}
          </div>

          <div className="form__field">
            <label htmlFor="company">Entreprise</label>

            <input
              id="company"
              name="company"
              type="text"
              value={formData.company}
              onChange={handleChange}
              autoComplete="organization"
            />
          </div>

          <div className="form__field">
            <label htmlFor="subject">
              Sujet<span aria-hidden="true">*</span>
            </label>

            <input
              id="subject"
              name="subject"
              type="text"
              value={formData.subject}
              onChange={handleChange}
              aria-required="true"
              aria-invalid={Boolean(errors.subject)}
              aria-describedby={
                errors.subject ? "subject-error" : undefined
              }
            />

            {renderError("subject")}
          </div>

          <div className="form__field form__field--full">
            <label htmlFor="message">
              Message<span aria-hidden="true">*</span>
            </label>

            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows="7"
              aria-required="true"
              aria-invalid={Boolean(errors.message)}
              aria-describedby={
                errors.message ? "message-error" : undefined
              }
            />

            {renderError("message")}
          </div>
        </div>

        <div className="form__footer">
          <div className="form__required">
            <p><span aria-hidden="true">*</span>
            <span>Les champs marqués d’un astérisque sont obligatoires.</span></p>
            {submitStatus.message && (
              <p
                className={`form__submit-message form__submit-message--${submitStatus.type}`}
                role={submitStatus.type === "error" ? "alert" : "status"}
              >
                {submitStatus.message}
              </p>
            )}
          </div>

          <div className="form__submit-area">

            <button
              className="cta__primary"
              type="submit"
              disabled={isSending}
            >
              <span>
                {isSending ? "Envoi en cours..." : "Envoyer le message"}
              </span>

              <span
                className="form__submit-square"
                aria-hidden="true"
              />
            </button>
          </div>
        </div>
      </form>
    </section>
  );
};

export default Form;