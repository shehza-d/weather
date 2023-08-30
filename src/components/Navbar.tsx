export default function Navbar() {
  // get Date
  const date = new Date();
  const month = date.toLocaleString("default", { month: "long" }).slice(0, 3);
  const dateString = `${date.getDate()} ${month} ${date.getFullYear()}`;

  // get time
  const time = date.toLocaleTimeString("en-US", {
    hour: "numeric",
    minute: "numeric",
    hour12: true,
  });

  return (
    <nav className="p-8 backdrop-blur flex h-16 items-center justify-between text-white  bg-black/50">
      <h1 className="text-2xl">Weather App</h1>

      <div>
        <div>{dateString}</div>
        <div>{time}</div>
      </div>
    </nav>
  );
}
