type ContainerProps = {
  children: React.ReactNode;
};

export default function Container({ children }: ContainerProps) {
  return (
    <div className="flex flex-col items-center justify-center mx-auto px-5 max-w-screen-xl">
      {children}
    </div>
  );
}
