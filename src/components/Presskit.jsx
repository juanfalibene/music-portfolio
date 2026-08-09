import React, { useState } from "react";

export const Presskit = () => {
  const [copiedEng, setCopiedEng] = useState(false);
  const [copiedSpa, setCopiedSpa] = useState(false);

  const images = [
    {
      name: "juanfalibene_dj_01_transparency.png",
      path: "/presskit/pics/juanfalibene_dj_01_transparency.png",
    },
    {
      name: "juanfalibene_dj_02.jpg",
      path: "/presskit/pics/juanfalibene_dj_02.jpg",
    },
    {
      name: "juanfalibene_dj_03.jpg",
      path: "/presskit/pics/juanfalibene_dj_03.jpg",
    },
    {
      name: "juanfalibene_dj_04.JPG",
      path: "/presskit/pics/juanfalibene_dj_04.JPG",
    },
    {
      name: "juanfalibene_dj_vinyl_01.png",
      path: "/presskit/pics/juanfalibene_dj_vinyl_01.png",
    },
    { name: "r005.jpeg", path: "/img/r005.jpeg" },
    {
      name: "juanfalibene-presskit-3825.jpg",
      path: "/presskit/pics/juanfalibene-presskit-3825.jpg",
    },
    {
      name: "juanfalibene-presskit-3498.jpg",
      path: "/presskit/pics/juanfalibene-presskit-3498.jpg",
    },
  ];

  const bioEng = `Juan Falibene's journey is one of deep passion, exploration, and an endless loop of listening, selecting, mixing, and sharing music. From an early age, he showed a profound affinity for sound, immersing himself in the rhythms of Soul, Funk, Modern Soul, Rare Groove, and Jazz. His focus has always been on creating meaningful connections through music, driven by a simple but powerful love for sharing it with others.\n\nAlongside his foundation in soulful sounds, Juan has a strong connection to club culture. His sets are a seamless fusion of organic and electronic elements, particularly drawing from Disco and House music. He excels at blending the raw essence of sampled material with the vibrant energy and texture of the dancefloor, keeping audiences captivated wherever he performs.\n\nKnown for his compelling sessions, Juan has played at various iconic venues, most notably holding a prominent presence at Café Berlin Music Club in Madrid between 2016 and 2019. During this time, he shared the stage with renowned international artists such as Folamour, Hugo LX, Nickodemus, Pabels and Manu Desrets. His dynamic force in the music scene also extends to collaborations with radio stations across Madrid, Barcelona, Glasgow, and London.\n\nCurrently based in Barcelona, Juan continues to channel his creative energy into new opportunities, curating unique listening sessions and creative collaborations. With a deep respect for music's roots and a forward-thinking approach, his journey remains a testament to the power of passion, versatility, and an unyielding commitment to pushing musical boundaries.`;

  const bioSpa = `La historia de Juan Falibene es una de profunda pasión, exploración y un ciclo infinito de escuchar, seleccionar, mezclar y compartir música. Desde muy joven mostró una afinidad extraordinaria por el sonido, sumergiéndose en los ritmos del Soul, Funk, Modern Soul, Rare Groove y Jazz. Su enfoque siempre ha sido crear conexiones significativas a través de la música, impulsado por el simple pero poderoso amor de compartirla.\n\nJunto a esta base de sonidos orgánicos, Juan mantiene una fuerte conexión con la cultura de club. Sus sesiones son una fusión perfecta de elementos orgánicos y electrónicos, nutriéndose especialmente del Disco y el House. Destaca por mezclar la esencia pura del material sampleado con la energía vibrante y la textura de la pista de baile, manteniendo al público cautivado dondequiera que se presente.\n\nConocido por sus cautivadoras actuaciones, Juan ha tocado en diversas salas emblemáticas, destacando su presencia en el Café Berlin Music Club de Madrid entre 2016 y 2019. Durante este tiempo, compartió escenario con reconocidos artistas internacionales como Folamour, Hugo LX, Nickodemus, Pabels y Manu Desrets. Su dinamismo en la escena musical también se extiende a colaboraciones con emisoras de radio en Madrid, Barcelona, Glasgow y Londres.\n\nActualmente radicado en Barcelona, Juan continúa canalizando su energía creativa en nuevas oportunidades, curando sesiones de escucha únicas y colaboraciones creativas. Con un profundo respeto por las raíces de la música y una visión de futuro, su trayectoria sigue siendo un testimonio del poder de la pasión, la versatilidad y un compromiso inquebrantable por expandir las fronteras musicales.`;

  const shortBioEng =
    "Short Description: My focus revolves around selection and musical narrative, with sessions that span soul, funk, jazz, rare groove, maintaining a dedicated line oriented towards listening. I dive deep into the origin of samples, seeking the link between the organic and the electronic.";
  const shortBioSpa =
    "Descripción corta: Mi enfoque gira en torno a la selección y la narrativa musical, con sesiones que recorren soul, funk, jazz, rare groove, con una línea dedicada y orientada a la escucha. Profundizo en el origen de los samples, buscando el vínculo entre lo orgánico y lo electrónico.";

  const hashtags = [
    "SOUL",
    "FUNK",
    "DISCO",
    "RAREGROOVE",
    "HOUSE",
    "DEEPHOUSE",
  ];
  const hashtagsString = hashtags.map((h) => `#${h}`).join(" ");

  const fullBioEng = `${bioEng}\n\n${shortBioEng}\n\n${hashtagsString}`;
  const fullBioSpa = `${bioSpa}\n\n${shortBioSpa}\n\n${hashtagsString}`;

  const handleCopy = (text, lang) => {
    navigator.clipboard.writeText(text);
    if (lang === "eng") {
      setCopiedEng(true);
      setTimeout(() => setCopiedEng(false), 2000);
    } else {
      setCopiedSpa(true);
      setTimeout(() => setCopiedSpa(false), 2000);
    }
  };

  return (
    <section className='about presskit'>
      <div className='page'>
        <div className='home-hero'>
          <h1>PRESSKIT</h1>
        </div>
        <div className='presskit-bio'>
          <div className='bio-column'>
            <h3 className='bio-title'>BIO EN</h3>
            {bioEng.split("\n\n").map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
            <div className='short-bio'>
              <p>{shortBioEng}</p>
              <ul className='show-genres'>
                {hashtags.map((tag, i) => (
                  <li key={i} className='show-genre'>
                    #{tag}
                  </li>
                ))}
              </ul>
            </div>
            <button
              className='copy-btn'
              onClick={() => handleCopy(fullBioEng, "eng")}
            >
              {copiedEng ? "TEXT COPIED" : "COPY TEXT"}
            </button>
          </div>
          <div className='bio-column'>
            <h3 className='bio-title'>BIO ES</h3>
            {bioSpa.split("\n\n").map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
            <div className='short-bio'>
              <p>{shortBioSpa}</p>
              <ul className='show-genres'>
                {hashtags.map((tag, i) => (
                  <li key={i} className='show-genre'>
                    #{tag}
                  </li>
                ))}
              </ul>
            </div>
            <button
              className='copy-btn'
              onClick={() => handleCopy(fullBioSpa, "spa")}
            >
              {copiedSpa ? "TEXT COPIED" : "COPY TEXT"}
            </button>
          </div>
        </div>

        <div className='presskit-gallery'>
          {images.map((img, index) => (
            <div key={index} className='presskit-item'>
              <img
                src={img.path}
                alt={`Presskit ${index + 1}`}
                loading='lazy'
              />
              <a href={img.path} download={img.name} className='copy-btn'>
                DOWNLOAD
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
