import styles from "./Aside.module.css";

import CertificateList from "../CertificatesList";
import AddButton from "./AddButton";

const Aside = (props) => {
  /*  "O=Міністерство юстиції України, OU=Адміністратор ІТС ЦЗО, CN=Центральний засвідчувальний орган, 2.5.4.5=UA-00015622-2017, C=UA, L=Київ";
      "O=Таксер, OU=IT, T=директор, CN=Таксер Тест Тестерович, SN=Таксер, G=Тест Тестерович, 2.5.4.5=1549, C=UA, L=Харків, ST=Харківська";
      "O=Фізична особа - підприємець Лиференко Андрій Миколайович, T=фізична особа - підприємець, CN=Лиференко Андрій Миколайович, SN=Лиференко, G=Андрій Миколайович, 2.5.4.5=306364, C=UA, L=Озера, ST=Київська";
      "O=Інформаційно-довідковий департамент ДПС, OU=Управління (центр) сертифікації ключів ІДД ДПС, CN=КНЕДП - ІДД ДПС, 2.5.4.5=UA-43174711-2019, C=UA, L=Київ";
      "O=АКЦІОНЕРНЕ ТОВАРИСТВО КОМЕРЦІЙНИЙ БАНК «ПРИВАТБАНК», OU=АЦСК, CN=АЦСК АТ КБ «ПРИВАТБАНК», 2.5.4.5=UA-14360570-2018, C=UA, L=Київ";
      "O=Міністерство доходів і зборів України, OU=Міністерство доходів і зборів України, CN=Міністерство доходів і зборів України. ОТРИМАНО (ЕКПП), 2.5.4.5=1226353, C=UA, L=Київ";
      "O=Тестовий платник 4, CN=Сухаренко Олег Андрійович (Тест), SN=Сухаренко, G=Олег Андрійович (Тест), 2.5.4.5=2468606, C=UA, L=Київ";
      "O=Тестовий платник 4, CN=Нестеренко Володимир Борисович (Тест), SN=Нестеренко, G=Володимир Борисович (Тест), 2.5.4.5=2468611, C=UA, L=Київ";
      "O=Фізична особа - підприємець Таксер Тест Тестович, OU=Фізична особа - підприємець, T=фізична особа - підприємець, CN=Таксер Тест Тестович, SN=Таксер, G=Тест Тестович, 2.5.4.5=4802, C=UA, L=Київ";
      "O=Тест, OU=Тест, T=Директор, CN=Тестувальник Tellipse 1111, SN=Тестувальник, G=Tellipse 1111, 2.5.4.5=579, C=UA, L=Київ"; */



  return (
    <aside className={styles.Aside}>
      <CertificateList commonNames={props.commonNames} />
      <AddButton addIsActive={props.addIsActive} onAddClick={props.onAddClick}/>
    </aside>
  );
};

export default Aside;
