export type TMessageProps = {
  message: string;
};

export const Message = ({ message }: TMessageProps) => {
  // eslint-disable-next-line no-alert
  alert(message);
};
