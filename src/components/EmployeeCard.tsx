import { FC } from "react";

type EmployeeCardProps = {
  name: string;
};
export const EmployeeCard: FC<EmployeeCardProps> = ({ name }) => {
  return (
    <div className="employee-card">
      <h2>{name}</h2>
    </div>
  );
};
