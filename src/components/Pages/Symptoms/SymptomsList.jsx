import React from 'react';
// * Components
import SymptomCard from '../../Organisms/SymptomCard';

function SymptompsList() {
  return (
    <div className="symptomsList">
      <h2 className="symptomsList__title">Síntomas del Covid-19</h2>
      <p className="symptomsList__link">
        Conoce más en
        <a
          href="https://www.who.int/es/emergencies/diseases/novel-coronavirus-2019/advice-for-public/q-a-coronaviruses#:~:text=sintomas"
          target="_blank"
          rel="noopener noreferrer"
        >
          : OMS sitio oficial
        </a>
      </p>
      <div className="symptomsList__cards">
        <div className="symptomsList__cards__items">
          <SymptomCard
            title="Fiebre"
            description="Se considera fiebre si es superior a 37,5 °C cuando se mide con el termómetro en la boca o superior a 38 °C cuando se mide con un termómetro axilar."
            symptomOption={1}
          />
        </div>

        <div className="symptomsList__cards__items">
          <SymptomCard
            title="Tos seca"
            description="Las vías respiratorias se hinchan dificultando el paso del aire y la tos puede provocar dolor."
            symptomOption={2}
          />
        </div>

        <div className="symptomsList__cards__items">
          <SymptomCard
            title="Congestión nasal"
            description="Se produce al inflamarse la membrana que cubre el interior de la nariz, lo que origina una obstrucción que hace difícil respirar."
            symptomOption={3}
          />
        </div>

        <div className="symptomsList__cards__items">
          <SymptomCard
            title="Dolor de garganta"
            description="Los dolores de garganta son causados por infecciones virales como la gripe o el resfriado común."
            symptomOption={4}
          />
        </div>

        <div className="symptomsList__cards__items">
          <SymptomCard
            title="Secreción nasal"
            description="Salida de material líquido-mucoso por la nariz. El material puede ser mucosidad de la nariz, los senos y la garganta, o pus debido a infecciones o líquido cefalorraquídeo del cerebro."
            symptomOption={5}
          />
        </div>

        <div className="symptomsList__cards__items">
          <SymptomCard
            title="Dificultad para respirar"
            description="La dificultad para respirar, conocida en medicina como disnea, a menudo se describe como una opresión intensa en el pecho, falta de aire, dificultad para respirar, falta de aliento o una sensación de ahogo."
            symptomOption={6}
          />
        </div>

        <div className="symptomsList__cards__items">
          <SymptomCard
            title="Fatiga"
            description="La fatiga es una falta de energía y de motivación. La somnolencia y la apatía (un sentimiento de no importarle qué suceda) pueden ser síntomas que acompañan a la fatiga."
            symptomOption={7}
          />
        </div>

        <div className="symptomsList__cards__items">
          <SymptomCard
            title="Dolor de cabeza"
            description="La mayoría de los dolores de cabeza afectan a los nervios, los vasos sanguíneos y los músculos que cubren la cabeza y el cuello de la persona."
            symptomOption={8}
          />
        </div>

        <div className="symptomsList__cards__items">
          <SymptomCard
            title="Diarrea"
            description="La diarrea es un cambio en las evacuaciones intestinales que causa heces más blandas que lo normal. "
            symptomOption={9}
          />
        </div>
      </div>
    </div>
  );
}

export default SymptompsList;
