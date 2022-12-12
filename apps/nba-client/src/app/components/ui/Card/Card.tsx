import type { CardProps } from './Card.types';

const Card = ({ children, className, ...rest }: CardProps) => (
  <div className={`${className} shadow-md bg-white rounded`} {...rest}>
    {children}
  </div>
);

export default Card;
