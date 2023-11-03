export default function Home() {
  return (
    <main className="w-[80%] h-full p-[1rem]">
      <div className="grid lg:grid-cols-3 gap-4">
        {[...Array(15)].map((_, index) => (
          <div
            key={index}
            className="bg-gray-200 text-center rounded overflow-hidden">
            <div className="bg-gray-500 h-[5rem] text-white flex items-center justify-center">
              Item {index + 1}
            </div>
            <div className="h-[5rem]"></div>
          </div>
        ))}
      </div>
    </main>
  );
}
