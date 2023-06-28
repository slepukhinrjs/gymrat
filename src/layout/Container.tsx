type Props = {
  children: React.ReactNode;
};

export default function Container({ children }: Props) {
  return <div className="h-screen max-w-7xl mx-auto text-white flex flex-col">{children}</div>;
}
