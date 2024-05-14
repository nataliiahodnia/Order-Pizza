export const Pizzas = () => {
  return (
    <div
      className="relative min-h-screen"
      style={{
        backgroundImage:
          "url(https://grill360.pl/wp-content/uploads/2022/08/pizza-wloska-z-grilla.jpg)",
        backgroundSize: 'cover',
      }}
    >
      <div className="absolute inset-0 z[1] bg-black bg-opacity-50"></div>
      <div className="relative z-[2] font-bold text-white text-8">
        <h1>Welcome to pizza!</h1>
      </div>
    </div>
  );
};
