import React from 'react';
import { Link } from 'react-router-dom';

// * Organisms / Components

function LandingPage() {
  return (
    <div className="landingPage">
      <h2>Navbar Here</h2>
      <header className="landingPage__header">
        <img
          src="https://cdn130.picsart.com/296232172285211.png?type=webp&to=min&r=640"
          className="landingPage__header__image"
          alt="logo"
        />
        <h1 className="landingPage__header__title">Balto</h1>
        <p className="landingPage__header__description">
          La mejor herramienta de administración de pacientes con Covid-19
        </p>
      </header>

      <div className="landingPage__sections">
        <section className="landingPage__section">
          <h2 className="landingPage__section__title">
            ¿Qué es el coronavirus/covid-19?
          </h2>
          <p className="landingPage__section__text">
            Los coronavirus son una familia de virus que se descubrió en la
            década de los 60 pero cuyo origen es todavía desconocido. Sus
            diferentes tipos provocan distintas enfermedades, desde un resfriado
            hasta un síndrome respiratorio grave (una forma grave de neumonía).
            Gran parte de los coronavirus no son peligrosos y se pueden tratar
            de forma eficaz. De hecho, la mayoría de las personas contraen en
            algún momento de su vida un coronavirus, generalmente durante su
            infancia. Aunque son más frecuentes en otoño o invierno, se pueden
            adquirir en cualquier época del año. El coronavirus debe su nombre
            al aspecto que presenta, ya que es muy parecido a una corona o un
            halo. Se trata de un tipo de virus presente tanto en humanos como en
            animales. En los últimos años se han descrito tres brotes epidémicos
            importantes causados por coronavirus:
          </p>
          <p className="landingPage__section__text">
            <b>SRAS-CoV:</b> El síndrome respiratorio agudo y grave (SRAS,
            también conocido como SARS y SRAG) se inició en noviembre de 2002 en
            China, afectó a más de 8.000 personas en 37 países y provocó más de
            700 muertes. La mortalidad del SRAS-Cov se ha cifrado en el 10%
            aproximadamente.
            <b>MERS-CoV:</b> El coronavirus causante del síndrome respiratorio
            de Oriente Medio (MERS) fue detectado por primera vez en 2012 en
            Arabia Saudita. Se han notificado hasta octubre de 2019 más de 2.400
            casos de infección en distintos países, con más de 800 muertes. La
            letalidad es, por tanto, del 35%.
            <b>COVID-19:</b> A finales de diciembre de 2019 se notificaron los
            primeros casos de un nuevo coronavirus en la ciudad de Wuhan
            (China). Desde entonces el goteo de nuevos infectados por el virus
            SARS-CoV-2 (inicialmente llamado 2019nCoV), que provoca el COVID-19,
            ha sido continuo y su transmisión de persona a persona se ha
            acelerado. Los casos declarados de nemonía de Wuhan ya superan con
            creces a los de la epidemia de SRAS, pero la tasa de mortalidad es
            más baja.
          </p>
          <p className="landingPage__section__text">
            Ya hay personas infectadas en múltiples países, pero los expertos
            insisten en que no hay motivos para la alarma. El país más afectado
            en Europa es Italia. Aunque se han confirmado casos positivos en
            España (que contrajeron el virus en otros países), las autoridades
            sanitarias y las sociedades científicas consideran que nuestro país
            está preparado para contener la transmisión en caso de que se
            produzca un brote epidémico.
          </p>
        </section>

        <section class="landingPage__section">
          <h1 class="landingPage__section__title">Causas del Coronavirus</h1>
          <p class="landingPage__section__text">
            Los coronavirus se transmiten de forma limitada entre humanos, pero
            hasta la fecha se desconoce el origen de estos virus. En todo caso,
            se sabe que ciertos animales, como los murciélagos, actúan como
            reservorios. Como en otros virus que causan neumonía, cuando se
            transmiten en humanos, el contagio se produce generalmente por vía
            respiratoria, a través de las gotitas respiratorias que las personas
            producen cuando tosen, estornudan o al hablar. Todo parece indicar
            que nuevo coronavirus, COVID-19, también conocido como coronavirus
            de Wuhan, tiene una procedencia animal. De hecho, los primeros casos
            se han relacionado con un mercado de animales vivos de la ciudad de
            Wuhan, en China. Se cree que el coronavirus del SRAS tuvo su origen
            en los murciélagos, saltando posteriormente a alguna otra especie de
            pequeño mamífero, como la civeta, y por último a los humanos.
          </p>
        </section>

        <section class="landingPage__section">
          <h1 class="landingPage__section__title">Sintomas del Coronavirus</h1>
          <Link to="/symptoms">
            <p class="landingPage__section__text">Síntomas</p>
          </Link>

          <p class="landingPage__section__text">
            En general, los síntomas principales de las infecciones por
            coronavirus suelen ser:
          </p>

          <ul class="landingPage__section__list">
            <li>Secreción y goteo nasal.</li>
            <li>Tos.</li>
            <li>Fatiga.</li>
            <li>Dolor de garganta y de cabeza.</li>
            <li>Fiebre.</li>
            <li>Escalofríos y malestar general.</li>
            <li>Dificultad para respirar (disnea).</li>
          </ul>
          <p class="landingPage__section__text">
            En espectro clínico de este tipo de infecciones varía desde la
            ausencia de síntomas hasta síntomas respiratorios leves o agudos.
            Esta tipología suele cursar con tos, fiebre y dificultades
            respiratorias. Es frecuente que haya neumonía y, en el caso del
            MERS, también se pueden registrar síntomas gastrointestinales, en
            especial, diarrea. Tal y como ocurre con el virus de la gripe, los
            síntomas más graves (y la mayor mortalidad) se registra tanto en
            personas mayores como en aquellos individuos con inmunodepresión o
            con enfermedades crónicas como diabetes, algunos tipos de cáncer o
            enfermedad pulmonar crónica. En casos extremos puede ocasionar
            insuficiencia respiratoria.
          </p>
        </section>

        <section class="landingPage__section">
          <h1 class="landingPage__section__title">Prevencion</h1>

          <p class="landingPage__section__text">
            Hasta la fecha no se dispone de vacuna alguna ni de tratamiento
            específico para combatir la infección por coronavirus. Mantener una
            higiene básica es la forma más eficaz de evitar contraer este virus
            en los lugares en los que existe un mayor riesgo de transmisión,
            fundamentalmente las zonas del planeta en las que se han registrado
            casos. Es conveniente lavarse las manos con frecuencia y evitar el
            contacto con personas ya infectadas, protegiendo especialmente ojos,
            nariz y boca. A quienes puedan estar en contacto con posibles
            afectados se les aconseja el uso de mascarillas y usar pañuelos para
            cubrirse la nariz y la boca cuando se tose o se estornudaCuando
            surgió el MERS-Cov se informó de que los productos de origen animal
            debidamente procesados por cocción o pasteurización no suponen
            ningún riesgo de infección, pero deben manipularse con cuidado para
            evitar que se contaminen por contacto con productos crudos. La carne
            y la leche de camello pueden seguir consumiéndose tras la
            pasteurización, cocción u otros tratamientos por calor; sin embargo
            su consumo crudo debe descartarse. Estas precauciones deben
            seguirlas especialmente aquellas personas que padezcan diabetes,
            insuficiencia renal, neumopatía crónica o inmunodepresión, ya que
            tienen más riesgo de padecer enfermedad grave en caso de infección
            por coronavirus.
          </p>
        </section>

        <section className="landingPage__section">
          <h1 className="landingPage__section__title">Tipos</h1>

          <h4 className="landingPage__section__sub-title">
            Coronavirus del resfriado
          </h4>
          <p className="landingPage__section__text">
            Esta variante de coronavirus corresponde a los tipos 229E y OC43,
            que provocan los síntomas comunes de un resfriado, aunque en los
            casos más graves también pueden ocasionar una neumonía en personas
            de edad avanzada o en neonatos.
          </p>

          <h4 className="landingPage__section__sub-title">
            Síndrome respiratorio agudo severo (SRAS)
          </h4>
          <p className="landingPage__section__text">
            Es una <b> forma grave de neumonía </b>. Provoca dificultad
            respiratoria y fiebre superior a los 38 grados. El brote de 2002 se
            extendió por todo el mundo, aunque su frecuencia siempre ha sido
            mayor en el este asiático.
          </p>

          <h4 className="landingPage__section__sub-title">
            Síndrome respiratorio de Oriente Medio (MERS-CoV)
          </h4>
          <p className="landingPage__section__text">
            Causa graves problemas respiratorios, además de fiebre, tos y
            dificultad para respirar, aunque en un primer momento puede ser
            asintomático. En los casos más graves también se produce
            expectoración de sangre, diarrea y vómitos. Tuvo su primer brote en
            el año 2012 y desde entonces se han reportado muchos casos en
            Oriente Medio, aunque también ha llegado a Europa y Estados Unidos.
          </p>

          <h4 className="landingPage__section__sub-title">
            Coronavirus COVID-19
          </h4>
          <p className="landingPage__section__text">
            El nuevo coronavirus detectado a finales de 2019 en China muestra
            una secuencia genética que coincide con la del SRAS en un 80%. No
            obstante, en un principio parece menos virulento y con una
            mortalidad inferior. En cambio, su transmisión ha sido muy superior
            y ya ha causado varios miles de casos más que el SRAS.
          </p>
        </section>

        <section class="landingPage__section">
          <h1 class="landingPage__section__title">Tratamientos</h1>

          <p class="landingPage__section__text">
            No existe una vacuna contra el coronavirus humano que causa
            resfriado, pero los casos más leves pueden superarse siguiendo los
            mismos pasos que un catarro común. Esto no requiere intervención
            médica y simplemente con lavarse las manos de forma frecuente,
            guardar reposo y beber líquidos de forma abundante los síntomas
            desaparecerán a los pocos días. También se pueden tomar analgésicos
            como ibuprofeno o paracetamol para aliviar dolores de garganta o
            fiebre. En casos de coronavirus SRAS, MERS CoV y COVID-19, suele ser
            conveniente el ingreso hospitalario. Se administran antivirales,
            dosis altas de esteroides para reducir la inflamación pulmonar y un
            soporte respiratorio con oxígeno; en ocasiones puede precisar
            antibióticos, pero solo en caso de que existan infecciones
            bacterianas sobrevenidas, es decir, sobreinfección. En resumen, este
            tipo de infecciones respiratorias se tratan con antivirales y
            medidas de soporte. El tratamiento se suele adaptar en función de la
            gravedad del paciente, ya que hay casos en los que se producen
            neumonías graves, pero en otros las manifestaciones son leves.
          </p>
        </section>
      </div>
    </div>
  );
}

export default LandingPage;
