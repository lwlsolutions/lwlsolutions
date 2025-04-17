import Image from "next/image"
import { Button } from "@/components/ui/button"

export default function Hero() {
  return (
    <section className="relative h-screen flex items-center">
      {/* Background with overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-gray-900 to-gray-800 opacity-90">
        <Image
          src="/placeholder.svg?height=1080&width=1920"
          alt="Background"
          fill
          className="object-cover mix-blend-overlay"
          priority
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl">
          <Image src="/images/logo-light.svg" alt="LWL Solutions Logo" width={300} height={150} className="mb-8" />
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            Soluções em Tecnologia para o seu Negócio
          </h1>
          <p className="text-xl text-gray-200 mb-8">
            Desenvolvemos sistemas de gestão completos para impulsionar a eficiência e o crescimento da sua empresa.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button className="bg-white text-gray-900 hover:bg-gray-100 text-lg px-8 py-6">
              Conheça Nossos Projetos
            </Button>
            <Button variant="outline" className="text-white border-white hover:bg-white/10 text-lg px-8 py-6">
              Entre em Contato
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

