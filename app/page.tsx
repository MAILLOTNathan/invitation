import Invitation from "@/components/Invitation";
import { BackgroundLines } from "@/components/ui/bg-particles";

export default function Home() {
  return (
    <main
      className="flex min-h-screen flex-col items-center justify-center px-4 py-2"
    >
      <BackgroundLines
        className="flex min-h-screen flex-col items-center justify-center px-4 py-2"
        svgOptions={{
          duration: 3
        }}>
        <Invitation />
      </BackgroundLines>
    </main>
  );
}
