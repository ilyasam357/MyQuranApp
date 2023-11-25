import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
function DataSurah() {
  const [surah, setSurah] = useState(null);
  useEffect(() => {
    async function getData() {
      const request = await fetch("https://equran.id/api/surat");
      const response = await request.json();

      setSurah(response);
    }
    getData();
  }, []);

  return (
    <div className="px-6">
      {/* <h2 className={`${isDark && " text-white" }`}>Daftar Surah</h2> */}
      {surah ? (
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 py-6">
          {surah.map((item) => (
            <Link to={`/detailSurah/${item.nomor}`} key={item.nomor}>
              <div
                key={surah.nomor}
                className="cursor-pointer p-4 bg-slate-400 flex justify-between text-white dark:bg-slate-900"
              >
                <div>
                  <p>{item.nama_latin}</p>
                  <p>{item.arti}</p>
                </div>
                <div className="text-right">
                  <p className="arabic">{item.nama}</p>
                  <p>{item.jumlah_ayat}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default DataSurah;
