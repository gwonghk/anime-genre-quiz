import clsx from 'clsx';
import styles from './Container.module.css';

const Container = ({
  justifyContent,
  flex,
  flexDirection,
  alignItems,
  column,
  className,
  children
}) => {
  return (
    <div
      className={clsx(styles.container, column && styles.column, className)}
      style={{
        justifyContent,
        flex,
        alignItems,
        flexDirection
      }}
    >
      {children}
    </div>
  );
};

export default Container;
