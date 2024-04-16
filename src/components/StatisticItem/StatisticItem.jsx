import { IconContext } from 'react-icons';
import {
  StatisticBox,
  StatisticText,
  StatisticCounter,
} from './StatisticItem.styled';
import { theme } from 'styles';

export const StatisticItem = ({ id, icon, title, total }) => {
  return (
    <StatisticBox key={id}>
      <IconContext.Provider value={{
        color: theme.colors.accent,
        size: theme.iconSizes.medium,
      }}>
        {icon}
      </IconContext.Provider>
      <StatisticCounter>{total}</StatisticCounter>
      <StatisticText>{title}</StatisticText>
    </StatisticBox>
  );
};
