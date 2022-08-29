import { ButtonProps } from "./Button.interface";
import styles from "./Button.module.scss";

export const Button: React.FC<ButtonProps> = ({
  children,
  variant,
  shape,
  ...props
}) => {
  return (
    <button className={styles.button} {...props}>
      {children}
    </button>
  );
};
