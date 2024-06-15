import React, { useEffect, useState, useMemo } from "react";
import axios from "../api/axios";

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
    try {
      const { data } = await axios.get<WordOfTheDayInterface>(
        "/get-word/json/word",
        { signal }
      );

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
