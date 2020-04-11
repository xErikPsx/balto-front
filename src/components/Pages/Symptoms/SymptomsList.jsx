import React from "react";
// * Components
import SymptomCard from "../../Organisms/SymptomCard";

function SymptompsList() {
  return (
    <div className="symptomsList">
      <h2>Síntomas del Covid-19</h2>
      <div className="symptomsList__cards">
        <SymptomCard
          title={"Title"}
          description={"Lorem algo algo asjdahsdiawd"}
          image={"https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"}
        />
        <SymptomCard
          title={"Title"}
          description={"Lorem algo algo asjdahsdiawd"}
          image={"https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"}
        />
        <SymptomCard
          title={"Title"}
          description={"Lorem algo algo asjdahsdiawd"}
          image={"https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"}
        />
      </div>
    </div>
  );
}

export default SymptompsList;
