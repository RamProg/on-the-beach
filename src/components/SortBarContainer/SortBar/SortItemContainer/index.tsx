import { IconDefinition } from "@fortawesome/free-solid-svg-icons";
import SortItem from "./SortItem";

type SortItemType = {
  text: string;
  type: string;
  icon: IconDefinition;
  isSelected: boolean;
};

const SortItemContainer = ({ text, type, icon, isSelected }: SortItemType) => {
  return (
    <SortItem text={text} type={type} icon={icon} isSelected={isSelected} />
  );
};

export default SortItemContainer;
