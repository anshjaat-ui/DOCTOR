"use client";
import { useState } from "react";

export default function AIForm() {
  const [age, setAge] = useState("");
  const [problem, setProblem] = useState("");
  const [result, setResult] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const res = await fetch("/api/ai-test", {
      method: "POST",
      body: JSON.stringify({ age, problem }),
    });

    const data = await res.json();
    setResult(data.result);
  };

  return (
    <div>
      <form onSubmit={handleSubmit} style={{ display: "flex", gap: "10px" }}>
        <input
          placeholder="Age"
          value={age}
          onChange={(e) => setAge(e.target.value)}
        />
        <input
          placeholder="Problem"
          value={problem}
          onChange={(e) => setProblem(e.target.value)}
        />
        <button type="submit">Analyze</button>
      </form>

      {result && <p>🧠 Result: {result}</p>}
    </div>
  );
}
