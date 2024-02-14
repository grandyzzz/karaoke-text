import KaraokeText from "./KaraokeText";

export default function Home() {
  return (
    <main>
      <div className="flex min-h-screen flex-col items-center justify-center p-24">
        <h2>init</h2>
      </div>
      <div className="flex min-h-screen flex-col items-center justify-center p-24 bg-white">
        <KaraokeText className="text-black">
          Everybody talks about <strong>how</strong> <strong>AI</strong>{" "}
          <strong>will</strong> <strong>change</strong> <strong>the</strong>{" "}
          <strong>work</strong>, but here we will show it.
        </KaraokeText>
      </div>
      <div className="flex min-h-screen flex-col items-center justify-center p-24">
        <h2>finish</h2>
      </div>
    </main>
  );
}
