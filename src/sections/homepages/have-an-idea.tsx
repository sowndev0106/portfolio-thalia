import { useEffect, useState } from "react";
import ChipContactButton from "../../components/ChipContactButton";
import axios from "axios";
import { toast } from "react-toastify";

export default function HaveAnIdea() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    subject: "",
    message: "",
  });

  useEffect(() => {
    // Load Google reCAPTCHA v3 script
    const script = document.createElement("script");
    script.src = `https://www.google.com/recaptcha/api.js?render=6LfUTDMqAAAAAFXKLqBvd2-Caz80ukKnq3au9KhX`;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      // @ts-ignore
      const token = await grecaptcha.execute(
        "6LfUTDMqAAAAAFXKLqBvd2-Caz80ukKnq3au9KhX",
        { action: "submit" }
      );

      const response = await axios.post(
        "https://cms.thaliatrandesign.com/api/contact-forms/submit",
        new URLSearchParams({
          ...formData,
          googleCaptcha: token,
        }),
        {
          headers: { "Content-Type": "application/x-www-form-urlencoded" },
        }
      );

      if (response.status === 200) {
        setIsSubmitted(true);
      } else {
        throw new Error("Submission failed");
      }
    } catch (error) {
      toast.error("An error occurred. Please try again later.");
    }
  };

  return (
    <div className="flex items-center justify-between flex-col">
      <div className="flex items-center justify-between flex-col mb-10">
        <div
          className={`font-size-text-2xl font-bold  mb-2  text-center  text-white`}
        >
          Have an idea? Let's talk.
        </div>

        <div
          className={` text-white text-[14px] text-center  md:text-[22px] text-opacity-80`}
        >
          Visually attractive design from concept to final result.{" "}
        </div>

        <div
          className={` text-white text-[14px] text-center  md:text-[22px] text-opacity-80`}
        >
          We create solutions that are bold and forward-looking.
        </div>
      </div>

      {isSubmitted ? (
        <div className="text-center text-white">
          <h2 className="text-2xl font-bold mb-4">
            Thank you for your message!
          </h2>
          <p>We'll get back to you soon.</p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4 w-full max-w-4xl">
          <input
            type="email"
            name="email"
            placeholder="Email*"
            required
            className="w-full p-3 px-5 bg-white/15 rounded-2xl border border-white/50 text-white md:text-2xl"
            onChange={handleInputChange}
          />
          <input
            type="text"
            name="subject"
            placeholder="Subject*"
            required
            className="w-full p-3 px-5 bg-white/15 rounded-2xl border border-white/50 text-white md:text-2xl"
            onChange={handleInputChange}
          />
          <textarea
            name="message"
            placeholder="Type your message here..."
            required
            className="w-full p-3 px-5 bg-white/15 rounded-2xl h-32 border border-white/50 text-white md:text-2xl"
            onChange={handleInputChange}
          />
          <div className="flex justify-center items-center">
            <button type="submit">
              <ChipContactButton
                title="Send"
                pathIcon="./assets/images/icon/contact-black.png"
              />
            </button>
          </div>
        </form>
      )}
    </div>
  );
}
