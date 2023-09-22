const MessagesContainer = ({ children }) => {
  return (
    <div className="flex flex-col gap-3 p-5 h-full overflow-y-auto">
      {children}
    </div>
  );
};

export default MessagesContainer;
