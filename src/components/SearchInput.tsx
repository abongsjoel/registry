import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function SearchInput() {
  const navigate = useNavigate();

  const [term, setTerm] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    navigate(`/search?term=${term}`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input value={term} onChange={(e) => setTerm(e.target.value)} />
    </form>
  );
}
