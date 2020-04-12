// * Covid-19 Images
import symptom_01 from '../media/symptomsImages/symptom_01.png';
import symptom_02 from '../media/symptomsImages/symptom_02.png';
import symptom_03 from '../media/symptomsImages/symptom_03.png';
import symptom_04 from '../media/symptomsImages/symptom_04.png';
import symptom_05 from '../media/symptomsImages/symptom_05.png';
import symptom_06 from '../media/symptomsImages/symptom_06.png';
import symptom_07 from '../media/symptomsImages/symptom_07.png';
import symptom_08 from '../media/symptomsImages/symptom_08.png';
import symptom_09 from '../media/symptomsImages/symptom_09.png';

export const symptomsRoutes = (option) => {
  switch (option) {
    case 1:
      return symptom_01;
    case 2:
      return symptom_02;
    case 3:
      return symptom_03;
    case 4:
      return symptom_04;
    case 5:
      return symptom_05;
    case 6:
      return symptom_06;
    case 7:
      return symptom_07;
    case 8:
      return symptom_08;
    case 9:
      return symptom_09;
    default:
      return symptom_01;
  }
};
