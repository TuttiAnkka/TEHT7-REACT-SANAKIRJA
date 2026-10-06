import { useState } from "react";

export default function FindWordPair() {
  const [fin_word, setFinWord] = useState("");
  const [translation, setTranslation] = useState(["", ""]);

  const findTranslation = async () => {
    try {
      if (fin_word == "") {
        console.log("Haettava sana ei voi olla tyhjä");
        return;
      }

      const response = await fetch(
        `http://localhost:3000/sanakirja/${fin_word}`,
      );

      const res = await response.json();

      setTranslation([fin_word, res]);
    } catch (error) {
      console.error("Virhe haussa:", error);
    }
  };

  return (
    <section className="words">
      <h2>Hae käännös</h2>

      <input
        type="text"
        value={fin_word}
        onChange={(e) => setFinWord(e.target.value)}
        placeholder="Suomenkielinen sana"
      ></input>

      <div>
        <button onClick={findTranslation}>Hae</button>
      </div>

      <div>
        <h3>Tulos:</h3>
        <h3>
          {translation[0]} - {translation[1]}
        </h3>
      </div>
    </section>
  );
}
