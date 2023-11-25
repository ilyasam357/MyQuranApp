import React, { useEffect, useRef, useState } from "react";
import CardDark from "../components/template/TemplateDarkMode";
import DarkModeProvider from "../context/DarkMode";
import MainContent from "../components/layouts/MainContent";
import Navbar from "../components/layouts/Navbar";
import { useParams } from "react-router-dom";

function DetailSurah() {
  const { surahNumber } = useParams();
  const [surahData, setSurahData] = useState(null);

  useEffect(() => {
    async function fetchSurahDetail() {
      const apiURL = `https://equran.id/api/surat/${surahNumber}`;
      try {
        const response = await fetch(apiURL);

        if (!response.ok) {
          throw new Error(
            `Failed to fetch API. Status code: ${response.status}`
          );
        }

        const data = await response.json();
        setSurahData(data);
      } catch (error) {
        console.error(`An error occurred: ${error.message}`);
      }
    }

    fetchSurahDetail();
  }, [surahNumber]);

  if (!surahData) {
    return <p>Loading...</p>;
  }

  return (
    <DarkModeProvider>
      <MainContent>
        <Navbar />
        <CardDark>
          <div className="w-4/5 block justify-between md:flex mx-auto mb-3 mt-3 bg-green-500 dark:bg-slate-900 text-white p-5 rounded-xl">
            <div>
              <h2>{surahData.nama}</h2>
              <p>
                {surahData.nama_latin} - {surahData.arti}
              </p>
            </div>
            <div>
              <audio
                src={surahData?.audio}
                controls
                className="mt-3 md:mt-0"
              ></audio>
            </div>
          </div>
          {surahData.ayat.map((ayat) => (
            <div
              key={ayat.nomor}
              className="w-4/5 mx-auto mb-3 bg-green-500 p-5 dark:bg-slate-900"
            >
              <article className="text-right text-2xl font-medium text-white leading-arabic">
                {ayat.ar}
              </article>
              <div className="flex text-lg text-white font-medium">
                <p>{ayat.nomor}.</p>
                <p>{ayat.idn}</p>
              </div>
            </div>
          ))}
        </CardDark>
      </MainContent>
    </DarkModeProvider>
  );
}

export default DetailSurah;
