type Props = {
  children: React.ReactNode;
};

export default function Container({ children }: Props) {
  return <div className="min-h-screen max-w-7xl mx-auto flex flex-col">{children}</div>;
}
