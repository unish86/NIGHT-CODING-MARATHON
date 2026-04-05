import { useState } from "react";
import ReactMarkdown from "react-markdown";

<<<<<<< HEAD
const QAItem = ({ item }) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="mb-4 rounded shadow bg-white p-4 transition hover:shadow-md">
      <div className="flex items-center">
        <h3
          className="flex-1 cursor-pointer font-medium"
=======
const QAItem = ({ item, onPin }) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="bg-white rounded shadow mb-4 p-4 transition hover:shadow-md">
      <div className="flex justify-between items-center">
        <h3
          className="font-medium cursor-pointer"
>>>>>>> f7e936b7c1352b3a4b0000364b491be6050fddb4
          onClick={() => setOpen(!open)}
        >
          {item.question}
        </h3>
<<<<<<< HEAD
      </div>

=======

        <button onClick={() => onPin?.(item._id)}>
          {item.pinned ? "📌" : "📍"}
        </button>
      </div>

>>>>>>> f7e936b7c1352b3a4b0000364b491be6050fddb4
      {open && (
        <div className="mt-3 text-gray-700">
          <ReactMarkdown>{item.answer}</ReactMarkdown>
        </div>
      )}
    </div>
  );
};

export default QAItem;
