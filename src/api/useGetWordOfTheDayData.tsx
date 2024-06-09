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

  const getWordOfTheDay = async (signal: AbortSignal) => {
    const url = "https://parlan-blog-backend.vercel.app";

    try {
      const res = await fetch(`${url}/get-word/json/word`, { signal });

      if (!res.ok) {
        throw new Error("Erro ao buscar palavra do dia");
      }

      const data: WordOfTheDayInterface = await res.json();

      setWordOfTheDay(data);
    } catch (error: any) {
      if (error.name !== "AbortError") {
        console.error(error);
        setWordOfTheDay((prev) => ({ ...prev, word: "Aguarde..." }));
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

  return memoizedWordOfTheDay;
};

export default useGetHomeData;
