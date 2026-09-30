import { useState } from "react";


export default function Form() {
  let [fullName, setFullName] = useState("");

  return (
    <form>
        <input 
          type="text" 
          placeholder="Enter your name" 
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
        />
        
        <button type="submit">Submit</button>
    </form>
  );
}