import { useEffect, useState } from "react";
import ChipContactButton from "../../components/ChipContactButton";
import axios from "axios";
import { toast } from "react-toastify";
import ChipLink from "../../components/ChipLink";
export default function HaveAnIdea() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
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
    setIsLoading(true);
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
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="bg-no-repeat bg-cover bg-[url('./assets/images/background/background-top-header.png')]">
      <div className="container mx-auto p-20 flex items-center justify-between flex-col text-white w-full">
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
          <div className="text-center text-white mb-4">
            <h2 className="text-2xl font-bold mb-4 text-yellow-green">
              Thank you for your message!
            </h2>
            <p className=" text-white text-opacity-80">We'll get back to you soon.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4 w-full max-w-4xl  ">

            <input
              type="email"
              name="email"
              placeholder="Email*"
              required
              className=" w-full p-3 px-5 rounded-2xl border border-white/50 text-white font-size-text-md
            bg-opacity-10 backdrop-filter backdrop-blur-[20px] bg-white
              "
              onChange={handleInputChange}
            />
            <input
              type="text"
              name="subject"
              placeholder="Subject*"
              required
              className="w-full p-3 px-5 rounded-2xl border border-white/50 text-white font-size-text-md
            bg-opacity-10 backdrop-filter backdrop-blur-[20px] bg-white
            "
              style={{
                backdropFilter: "blur(20px)",
              }}
              onChange={handleInputChange}
            >
            </input>
            <textarea
              name="message"
              placeholder="Type your message here..."
              required
              className="w-full p-3 px-5 rounded-2xl h-52 border border-white/50 text-white font-size-text-md
            backdrop-filter backdrop-blur-[20px] bg-opacity-10 bg-white"
              onChange={handleInputChange}
            />
            <div className="flex justify-center items-center">
              <button type="submit" disabled={isLoading}>
                {
                  isLoading ?
                    <ChipLink
                      title="Sending..."
                      bgColor="bgYellowGreen"
                    />
                    :
                    <ChipLink
                      title="Send"
                      pathIcon="./assets/images/icon/contact-black.png"
                      bgColor="bgYellowGreen"
                    />
                }

              </button>

            </div>
          </form>
        )}



      </div>
    </div>
  );
}
