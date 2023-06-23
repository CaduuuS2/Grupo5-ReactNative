import React from 'react';
import { LinearGradient } from 'expo-linear-gradient';

type FundoProps = {
  colors: string[];
  start?: [number, number];
  end?: [number, number];
  children?: any;
};

const Fundo: React.FC<FundoProps> = ({
  colors,
  start = [0, 0],
  end = [1, 0],
  children,
}) => {
    
  return (
    <LinearGradient
      colors={colors}
      start={start}
      end={end}
      style={{ flex: 1 }}
    >
      {children}
    </LinearGradient>
  );
};

export default Fundo;

/* exemplo de como usar o fundo em todas as telas 

<Fundo
colors={['#BD6F29', '#ffffff']}
start={[1, 0]}
end={[0, 1]}
> */