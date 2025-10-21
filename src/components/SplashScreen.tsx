import { useEffect } from "react";
import "./SplashScreen.css"

type SplashScreenProps = {
  onFinish: () => void;
};

export default function SplashScreen({ onFinish }: SplashScreenProps) {
  useEffect(() => {
    const timer = setTimeout(() => onFinish(), 3000);
    return () => clearTimeout(timer);
  }, [onFinish]);

  return (
    <div className="flex items-center justify-center h-screen bg-gray-950">
      <h1 className="text-4xl font-bold animate-pulse">loading...</h1>
    </div>
  );
}
