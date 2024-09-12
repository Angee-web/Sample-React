
interface MessageProps {
  message: string;
  priority?: "high" | "low";
}

const Message = ({ message, priority }: MessageProps) => {
  return (
    <div>
      <h1>Message</h1>
      <p>Received message: {message}</p>
      <p>Priority: {priority}</p>
    </div>
  );
};

export default Message;
