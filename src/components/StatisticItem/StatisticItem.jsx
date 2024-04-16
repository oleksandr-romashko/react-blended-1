import {
  StatisticBox,
  StatisticText,
  StatisticCounter,
} from './StatisticItem.styled';

export const StatisticItem = ({ id, icon, title, total }) => {
  return (
    <StatisticBox key={id}>
        {icon}
        <StatisticCounter>{total}</StatisticCounter>
        <StatisticText>{title}</StatisticText>
      </StatisticBox>
  );
};
