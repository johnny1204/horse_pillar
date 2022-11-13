import { CSSProperties, FC, ReactNode } from 'react';

type TabPanelProps = {
  children?: ReactNode;
  index: number;
  value: number;
  style?: CSSProperties;
};

export const VerticalTab: FC<TabPanelProps> = ({
  children,
  value,
  index,
  style
}) => {
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      style={style}
    >
      {value === index && <>{children}</>}
    </div>
  );
};
