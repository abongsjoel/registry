import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { VscSearch } from "react-icons/vsc";
// import { Form } from "react-router-dom";

export default function SearchInput() {
  const navigate = useNavigate();

  const [term, setTerm] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    navigate(`/search?term=${term}`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="relative">
        <div className="absolute inset-y-0 flex items-center pl-3">
          <VscSearch className="h-5 w-5 text-gray-500" />
        </div>
        <input
          name="term"
          className="pl-10 py-2 w-full border-0 shadow-none"
          placeholder="Search packages"
          value={term}
          onChange={(e) => setTerm(e.target.value)}
        />
      </div>
    </form>
  );
  //   return (
  //     <Form action="/search">
  //       <div className="relative">
  //         <div className="absolute inset-y-0 flex items-center pl-3">
  //           <VscSearch className="h-5 w-5 text-gray-500" />
  //         </div>
  //         <input
  //           name="term"
  //           className="pl-10 py-2 w-full border-0 shadow-none"
  //           placeholder="Search packages"
  //         />
  //       </div>
  //     </Form>
  //   );
}
