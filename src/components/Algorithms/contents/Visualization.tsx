import React from 'react'

const image = {
  src: "https://i.guim.co.uk/img/media/5189fb1648c5880a5414e65b1b8163374d268cc4/0_260_5472_3282/master/5472.jpg?width=620&quality=45&auto=format&fit=max&dpr=2&s=6e362f5df1911e15624838f51054def5",
  alt: "The painting at Leang Tedongnge in Sulawesi, Indonesia. Photograph: Maxime Aubert/Griffith University/AFP/Getty Images"
}

const Visualization: React.FC = () => {
  return (
    <>
      <p>
        Visualization is a visual representation of an idea, story, data, etc.
        On a simplified note, to put a visual clue to describe an information is also Visualization.
        It is not necessary that the visualized information or entity is a real-life or physical object,
        it can an abstract idea such as feelings, concept, imagination or just a belief.
        Letters, numbers, statues, symbols, arts such as paintings, sketches, murals, digital graphics, movies, etc.
        are means of visualization that are used to convey an idea of information.
        Any information that is visualized pleasingly and informatively has greater potential of
        communicating the core message much easier and faster.
      </p>
      <br />
      <p>
        Visualization has been a part of human history from early prehistoric period.
        The oldest piece of prehistoric art ever discovered is a rock carving named ‘Bhimbetka and Dara-ki-Chattan Cupules’
        located in central India. It is reported to date back around 290-70,000 BC.
        Likewise, one of the recently discovered artifacts includes the oldest known cave painting discovered in Sulawesi,
        Indonesia which dates back at least 37,900 BC. Furthermore, there are uncountable ancient monuments and archeological
        sites scat-tered throughout the globe which represents ancient civilization, historical events, cul-ture, and human cognitive
        capability of certain period. Through these artifacts they vis-ualize the animals, flora-faunas, environment, human feelings,
        and human lifestyle prev-alent in the respective region during the period where they belonged to.
        They are of great importance to study of the human history and evolution.
      </p>
      <img alt={image.alt} src={image.src} />
      <p>
        In the present days, there are large quantity of information and data with higher level of complexity.
        The information must be delivered as efficiently as possible with reliability and even more accuracy.
        It has given rise modern visualization in the form of data vis-ualization for research, study, business, etc.
        Entertainment contents such as movies, videos, video games, etc. Books, magazines, advertisements, etc.
        All competing to be more visually pleasing and informative than other. Visualization is not a new form of conveying messages;
        it has existed since the dawn of the human history. Along the way, it has evolved into numerous forms and means but
        at its core it serves the same purpose. Thus, visualization is of great importance and will remain so, for upcoming days.
      </p>
    </>
  )
}

export default Visualization
