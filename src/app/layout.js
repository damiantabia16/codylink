import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: {
    default: "Codylink - Aprende Programación en Línea",
    template: "%s | Codylink"
  },
  description: "Codylink es tu plataforma de cursos de programación en línea, donde puedes aprender desde los conceptos básicos hasta temas avanzados. Únete a una comunidad de estudiantes apasionados por la tecnología y desarrolla tus habilidades en lenguajes como JavaScript, Python, Java y más. Nuestros cursos están diseñados por expertos en la industria y ofrecen un enfoque práctico para que puedas aplicar lo que aprendes en proyectos reales. ¡Comienza tu viaje en la programación hoy mismo con Codylink!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}
