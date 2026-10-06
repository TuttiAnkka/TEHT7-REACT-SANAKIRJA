import { useState } from "react";

export default function AddWordPair() {
  const [fin_word, setFinWord] = useState("");
  const [eng_word, setEngWord] = useState("");

  const AddTranslation = async () => {
    const translation = {
      fin: fin_word,
      eng: eng_word,
    };

    if (translation.fin == "" || translation.eng == "") {
      console.log("Sanapari ei voi olla tyhjä");
      return;
    }

    try {
      const response = await fetch("http://localhost:3000/sanakirja", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(translation),
      });

      const res = await response.json();

      console.log("Lisätty sana:", res);

      setFinWord("");
      setEngWord("");
    } catch (error) {
      console.error("Virhe sanan lisäämisessä:", error);
    }
  };

  return (
    <section className="words">
      <h2>Lisää sanapari</h2>

      <input
        type="text"
        value={fin_word}
        onChange={(e) => setFinWord(e.target.value)}
        placeholder="Suomenkielinen sana"
      ></input>

      <input
        type="text"
        value={eng_word}
        onChange={(e) => setEngWord(e.target.value)}
        placeholder="Englanninkielinen sana"
      ></input>

      <div>
        <button onClick={AddTranslation}>Lisää</button>
      </div>
    </section>
  );
}
