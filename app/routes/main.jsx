import React, { useState } from "react";

export default function Main() {
  const [selectedEssay, setSelectedEssay] = useState(null);

  // Essays for each card
  const essays = [
    {
      title: "Essay",
      content: `_Gresiii_.4_ \n That friend I never thought I would be so colse with. When I first met her she seemed to be quite arrogant but that was because she had scored perfect marks in her favourite subject "Maths". This changed soon as I got to know her better. Now I know her as a funny, Joyful, happy energetic person. She loves sports especially badminton. She's quite competitive and loves to be challanged. If you bring it up on her ego, you'll definitely be defeated. She's friendly in nature confident and bold. She's secretive and doesn't share much. She's moody, not everyone understands how she's feeling at the moment, so it's difficult to understand her actions. 
      \n This was before I actually knew her. Now it all made sense. She's the strangest person I've known. She's going through a mess. Things I'm scared of even imagining, she's living it. She's smart, intelligent, little weak in english (because she's from Mussaffar nagar) but that's okay. She doesn't  like favours. She does a lot for everyone but doesn't let them know. She pretends to be a bad person which she is not at all. She has a great bonding with her mother and shares evrything with her. She really loves her mother too much. She tries really hard to make her happy. Her mother is the only person she can't lie to. She loves watering plants since the age of 4 (4 is her favourite number). Her escape from life is music and Jaun elia. She could just put on some music and continue typing for hours. Her favourite hobby is typing. When she's in a bad mood she's unbeatable. She's emotional but never shows. She has a constant fear of loosing people or that people would hurt her. 
      \n Having a friend like her is a blessing. May all her dreams come true!`,
    },
    {
      title: "Applogy Letter",
      content: `Hi gresi! You'll be going home and I'm sorry I cannot do anything knowing all what is going to happen. Can't see you in this condition but nothing that I can do to help you. I feel so helpless, it haunts me sometimes but...\nI'm sorry if sometimes I don't act the right way, maybe I'm not mature enough to understand and act accordingly, but I always try to. Sometimes I fail to console you properly. sometimes I fail to understand what you're feeling and do things that might hurt you. I'm sorry, but I never intend to.\nAnd I'm sorry if I overreact but how can I not overact seeing you in this condition going through all this and suffering alone. Sometimes I go into absolute solitude and act weird, not because I'm upset or disappointed rather I feel so blank and empty, I don't understand how to deal with it, it's like pure silence but still a bunch of noises running in my head and I feel like being alone in that particular moment until I solve it out.\nLastly sorry for not being there when you "neeeeeded" the most.`,
    },
    {
      title: "Gratitude Letter",
      content: `Thanks`,
    },
  ];

  const handleCardClick = (index) => {
    setSelectedEssay(index);
  };

  const closeModal = () => {
    setSelectedEssay(null);

    if (selectedEssay == 2)
      alert(
        "Sorry yaar time kam tha toh acche se implement nhi kr paaya. But mere mind mai bht accha lag rha tha.  "
      );
  };

  // Split the content by newlines for line breaks
  const getFormattedContent = (content) => {
    return content.split("\n").map((line, index) => <p key={index}>{line}</p>);
  };

  return (
    <div
      style={{
        height: "100vh",
        background: "linear-gradient(to bottom right, #99D7EC, #B4F8C8)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        flexWrap: "wrap",
        gap: "20px",
        padding: "20px",
      }}
    >
      <div
        style={{
          height: "75vh",
          background: "linear-gradient(to bottom right, #99D7EC, #B4F8C8)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexWrap: "wrap",
          gap: "20px",
          padding: "20px",
        }}
      >
        {essays.map((essay, index) => (
          <div
            key={index}
            onClick={() => handleCardClick(index)}
            style={{
              width: "150px",
              height: "180px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: "#ffffff",
              border: "2px solid #ddd",
              borderRadius: "15px",
              boxShadow: "0 6px 15px rgba(0, 0, 0, 0.1)",
              cursor: "pointer",
              fontSize: "1.2rem",
              fontWeight: "600",
              color: "#555",
              textTransform: "uppercase",
              transition: "transform 0.3s ease, box-shadow 0.3s ease",
              transform: "scale(1)",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "scale(1.05)";
              e.currentTarget.style.boxShadow = "0 8px 20px rgba(0, 0, 0, 0.2)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "scale(1)";
              e.currentTarget.style.boxShadow = "0 6px 15px rgba(0, 0, 0, 0.1)";
            }}
          >
            Essay {index + 1}
          </div>
        ))}

        {/* Modal for Essay */}
        {selectedEssay !== null && (
          <div
            style={{
              position: "fixed",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              backgroundColor: "rgba(0, 0, 0, 0.8)",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              zIndex: 1000,
            }}
          >
            <div
              style={{
                backgroundColor: "#fff",
                padding: "30px",
                borderRadius: "20px",
                width: "60%",
                maxHeight: "80%",
                overflowY: "auto",
                boxShadow: "0 8px 25px rgba(0, 0, 0, 0.2)",
                textAlign: "center",
              }}
            >
              <h2
                style={{
                  marginBottom: "20px",
                  fontSize: "2rem",
                  color: "#333",
                  fontFamily: "'Poppins', sans-serif",
                }}
              >
                {essays[selectedEssay].title}
              </h2>
              <div
                style={{
                  fontSize: "1.4rem",
                  color: "#666",
                  lineHeight: "1.8",
                  fontFamily: "'Meow Script', sans-serif",
                }}
              >
                {getFormattedContent(essays[selectedEssay].content)}
              </div>

              {selectedEssay === 2 && (
                <audio controls style={{ marginTop: "20px", width: "100%" }}>
                  <source src="/recordings/thanks.mp3" type="audio/mp3" />
                  Your browser does not support the audio element.
                </audio>
              )}

              <button
                onClick={closeModal}
                style={{
                  marginTop: "20px",
                  padding: "10px 30px",
                  backgroundColor: "#99D7EC",
                  border: "none",
                  borderRadius: "10px",
                  color: "#fff",
                  cursor: "pointer",
                  fontSize: "1rem",
                  fontWeight: "600",
                  transition: "background-color 0.3s ease",
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.backgroundColor = "#77B6E2")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.backgroundColor = "#99D7EC")
                }
              >
                Close
              </button>
            </div>
          </div>
        )}
      </div>
      <h2 style={{ color: "grey" }}>~That Bombay Guy</h2>
    </div>
  );
}
