import React from "react";
import ChatBot from "react-simple-chatbot";
import { ThemeProvider } from "styled-components";

const ChatApp = () => {
  const theme = {
     background: "#F6F5F5",
    headerBgColor: "#1A5319",
    headerFontColor: "#fff",
    headerFontSize: "15px",
    botBubbleColor: "#658147",
    botFontColor: "#fff",
    userBubbleColor: "#D42243",
    userFontColor: "#6C0345",
  };

  const steps = [
    {
      id: "0",
      message: "Welcome to Aksharaa School!",
      trigger: "1",
    },
    {
      id: "1",
      message: "How can I assist you today?",
      trigger: "options",
    },
    {
      id: "options",
      options: [
        { value: 1, label: "About Us", trigger: "about_school" },
        { value: 2, label: "Admissions", trigger: "admissions" },
        { value: 3, label: "Courses", trigger: "courses" },
        { value: 4, label: "Contact Us", trigger: "contact_us" },
      ],
    },
    {
      id: "about_school",
      message:
        "Akshara School is a premier educational institution committed to providing quality education...",
      trigger: "1",
    },
    {
      id: "admissions",
      message:
        "For admissions information, please visit our admissions page on our website or contact our admissions office...",
      trigger: "1",
    },
    {
      id: "courses",
      message: "We offer a wide range of courses including...",
      trigger: "1",
    },
    {
      id: "contact_us",
      message:
        "You can contact us at : Phone: +1234567890 Email: info@aksharaschool.com",
      trigger: "1",
    },
  ];

  return (
    <ThemeProvider theme={theme}>
     <div className="chatbot-container  "> 
        <ChatBot
          steps={steps}
          floating={true}
          headerTitle={"Welcome to Akshara School"}
             className="custom-chatbot"
       
        />
      </div>
    </ThemeProvider>
  );
};

export default ChatApp;

