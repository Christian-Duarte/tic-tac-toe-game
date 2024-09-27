export const Square = ({ children, isSelected, updateBoard, index }) => {
  const className = `square ${isSelected ? "is-selected" : ""} `;

  const handleClick = () => {
    if (children === null) {
      updateBoard(index);
    }
  };

  return (
    <div className={className} onClick={handleClick}>
      {children}
    </div>
  );
};
