import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import LinkIcon from "@mui/icons-material/Link";

const messages = [
  {
    id: 1,
    sender: "John",
    content: "Hello, how are you?",
    timestamp: "12:30 PM",
  },
  {
    id: 2,
    sender: "Jane",
    content: "I'm good, thanks! How about you?",
    timestamp: "12:32 PM",
  },
  {
    id: 3,
    sender: "John",
    content: "I'm doing well too. Any plans for the weekend?",
    timestamp: "12:35 PM",
  },
  // Add more dummy messages here...
];

const user = {
  name: "User",
  id: 1001,
};

export default function MessageBox() {
  const [userMessage, setUserMessage] = React.useState("");

  const handleUserMessageChange = (event) => {
    setUserMessage(event.target.value);
  };

  const handleSendMessage = () => {
    // Logic to send the user's message
    if (userMessage.trim() !== "") {
      const newMessage = {
        id: messages.length + 1,
        sender: user.name,
        content: userMessage,
        timestamp: getCurrentTimestamp(),
      };
      messages.push(newMessage);
      setUserMessage("");
    }
  };

  const getCurrentTimestamp = () => {
    const date = new Date();
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const formattedTime = `${hours}:${minutes.toString().padStart(2, "0")}`;
    return formattedTime;
  };

  const messageBoxRef = React.useRef(null);

  React.useEffect(() => {
    if (messageBoxRef.current) {
      messageBoxRef.current.scrollTop = messageBoxRef.current.scrollHeight;
    }
  }, [messages]);

  return (
    <Box
      sx={{
        width: "100%",
        border: "1px solid gray",
        borderRadius: "4px",
        padding: "16px",
        height: "45.4vw",
        overflowY: "scroll",
        display: "flex",
        flexDirection: "column",
      }}
      ref={messageBoxRef}
    >
      <Box sx={{ flex: "1 1 auto", overflowY: "auto" }}>
        {messages.map((message) => (
          <div
            key={message.id}
            style={{
              marginBottom: "12px",
              textAlign: message.sender === user.name ? "right" : "left",
            }}
          >
            <Typography variant="subtitle1" style={{ fontWeight: "bold" }}>
              {message.sender}
            </Typography>
            <Typography variant="body1">{message.content}</Typography>
            <Typography variant="caption" color="textSecondary">
              {message.timestamp}
            </Typography>
          </div>
        ))}
      </Box>
      <Box sx={{ marginTop: "auto", display: "flex", alignItems: "center" }}>
        <TextField
          value={userMessage}
          onChange={handleUserMessageChange}
          label="Type your message"
          variant="outlined"
          size="small"
          fullWidth
          InputProps={{
            endAdornment: (
              <Button
                sx={{
                  transform: "rotate(-45deg)",
                  color: "black",
                  minWidth: "0",
                  padding: "8px",
                }}
                variant="text"
                onClick={() => {
                  // Logic to handle link icon click
                }}
              >
                <LinkIcon />
              </Button>
            ),
          }}
        />
        <Button
          variant="contained"
          onClick={handleSendMessage}
          style={{ marginLeft: "8px" }}
        >
          Send
        </Button>
      </Box>
    </Box>
  );
}
