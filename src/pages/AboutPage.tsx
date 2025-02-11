import { useEffect, useState } from "react";
import { useLanguage } from "../hooks/useLanguage";
import { pages } from "../components/header/NavBar";
import { EmployeeCard } from "../components/EmployeeCard";

export const AboutPage = () => {
  const { lang } = useLanguage();
  const [employee, setEmployee] = useState<{[key:string]: string}[]>([]);

  useEffect(() => {
    fetch("https://swapi.dev/api/people")
      .then((res) => res.json())
      .then((data) => setEmployee(data.results));
  }, []);
  return (
    <>
      <h1>{pages[lang][1]}</h1>
      {!employee.length && <h2>Loading...</h2>}
      <div className="employee-wrapper">
      {employee.map((item) => (
        <EmployeeCard key={item.name} name={item.name} />
      ))}
      </div>
    </>
  );
};
