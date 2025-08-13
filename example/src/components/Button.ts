export type TButtonProps = {
  title: string;
};

export const Button = ({ title }: TButtonProps) => {
  // eslint-disable-next-line no-console
  console.log('[Button]:', title);
};
