import React, { useEffect, useState, useMemo } from "react";

interface WordOfTheDayInterface {
  date: string;
  word: string;
  sub: string;
  meanings: string[];
  etimology: string;
  credits: string;
}

const useGetHomeData = () => {
  const [wordOfTheDay, setWordOfTheDay] = useState<WordOfTheDayInterface>({
    date: "",
    word: "",
    sub: "",
    meanings: [],
    etimology: "",
    credits: "",
  });
  const [loading, setLoading] = useState(true);

  const getWordOfTheDay = async (signal: AbortSignal) => {
    const url = process.env.GATSBY_BACKEND_URL;

    try {
      const res = await fetch(`${url}/get-word/json/word`, { signal });

      if (!res.ok) {
        throw new Error("Erro ao buscar palavra do dia");
      }

      const data: WordOfTheDayInterface = await res.json();
      setWordOfTheDay(data);
      setLoading(false);
    } catch (error: any) {
      if (error.name !== "AbortError") {
        console.error(error);
        setWordOfTheDay((prev) => ({ ...prev, word: "Aguarde..." }));
        setLoading(false);
      }
    }
  };

  useEffect(() => {
    if (wordOfTheDay?.word === "") {
      const controller = new AbortController();
      getWordOfTheDay(controller.signal);

      return () => {
        controller.abort();
      };
    }
  }, [wordOfTheDay]);

  const memoizedWordOfTheDay = useMemo(() => wordOfTheDay, [wordOfTheDay]);

  return { memoizedWordOfTheDay, loading };
};

export default useGetHomeData;
